const getColors = require("get-image-colors");

// function changeColor(_color: `#${string}`, amount: number) {
//   const color = _color + "";
//   // #FFF not supportet rather use #FFFFFF
//   const clamp = (val: any) => Math.min(Math.max(val, 0), 0xff);
//   const fill = (str: any) => ("00" + str).slice(-2);

//   const num = parseInt(color.substr(1), 16);
//   const red = clamp((num >> 16) + amount);
//   const green = clamp(((num >> 8) & 0x00ff) + amount);
//   const blue = clamp((num & 0x0000ff) + amount);
//   return (
//     "#" +
//     fill(red.toString(16)) +
//     fill(green.toString(16)) +
//     fill(blue.toString(16))
//   );
// }

export async function getBackgroundColorsFromFavicon(
  faviconBuffer: Buffer,
  fileType: string
) {
  const colors = await getColors(Buffer.from(faviconBuffer), {
    count: 2,
    type: fileType,
  })
    .then((colors: any) => {
      console.log({ colors });
      return colors.map((color: any) => color.hex());
    })
    .catch((e: any) => {
      console.error(e);
      return [];
    });

  const backgroundColor = colors[0] ?? "#FFFFFF"; // default to white if no color is found
  const darkerColor = changeHue(backgroundColor, -15);
  const foregroundColor = contrastingColor(backgroundColor);

  return {
    backgroundColor,
    darkerColor,
    foregroundColor,
  };
}

export function contrastingColor(color: string) {
  return luma(color) >= 165 ? "000" : "fff";
}
function luma(color: string) {
  // color can be a hx string or an array of RGB values 0-255
  var rgb = typeof color === "string" ? hexToRGBArray(color) : color;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]; // SMPTE C, Rec. 709 weightings
}
function hexToRGBArray(color: string) {
  color = color.replace(/^#/, "");
  if (color.length === 3)
    color =
      color.charAt(0) +
      color.charAt(0) +
      color.charAt(1) +
      color.charAt(1) +
      color.charAt(2) +
      color.charAt(2);
  else if (color.length !== 6) throw "Invalid hex color: " + color;
  var rgb = [];
  for (var i = 0; i <= 2; i++) rgb[i] = parseInt(color.substr(i * 2, 2), 16);
  return rgb;
}

function changeHue(rgb: string, degree: number) {
  var hsl = rgbToHSL(rgb);
  hsl.h += degree;
  if (hsl.h > 360) {
    hsl.h -= 360;
  } else if (hsl.h < 0) {
    hsl.h += 360;
  }
  return hslToRGB(hsl);
}

// exepcts a string and returns an object
function rgbToHSL(rgb: string) {
  // strip the leading # if it's there
  rgb = rgb.replace(/^\s*#|\s*$/g, "");

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (rgb.length == 3) {
    rgb = rgb.replace(/(.)/g, "$1$1");
  }

  var r = parseInt(rgb.substr(0, 2), 16) / 255,
    g = parseInt(rgb.substr(2, 2), 16) / 255,
    b = parseInt(rgb.substr(4, 2), 16) / 255,
    cMax = Math.max(r, g, b),
    cMin = Math.min(r, g, b),
    delta = cMax - cMin,
    l = (cMax + cMin) / 2,
    h = 0,
    s = 0;

  if (delta == 0) {
    h = 0;
  } else if (cMax == r) {
    h = 60 * (((g - b) / delta) % 6);
  } else if (cMax == g) {
    h = 60 * ((b - r) / delta + 2);
  } else {
    h = 60 * ((r - g) / delta + 4);
  }

  if (delta == 0) {
    s = 0;
  } else {
    s = delta / (1 - Math.abs(2 * l - 1));
  }

  return {
    h: h,
    s: s,
    l: l,
  };
}

// expects an object and returns a string
function hslToRGB(hsl: { h: number; s: number; l: number }) {
  var h = hsl.h,
    s = hsl.s,
    l = hsl.l,
    c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r,
    g,
    b;

  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }

  r = normalize_rgb_value(r, m);
  g = normalize_rgb_value(g, m);
  b = normalize_rgb_value(b, m);

  return rgbToHex(r, g, b);
}

function normalize_rgb_value(color: number, m: number) {
  color = Math.floor((color + m) * 255);
  if (color < 0) {
    color = 0;
  }
  return color;
}

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
