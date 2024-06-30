import CustomBentoCard from "@/components/CustomBentoCard";
// import getColors from "get-image-colors";
const icoToPng = require("ico-to-png");
import ogs from "open-graph-scraper-lite";
const getColors = require("get-image-colors");

export default async function Demo() {
  const html = await fetch(
    "https://github.com/JulianKominovic/JulianKominovic/edit/main/README.md",
    {
      headers: {
        "User-Agent": userAgent,
      },
    }
  ).then((res) => res.text());
  const ogInfo = await ogs({
    html,
  });
  const favicon = ogInfo.result.favicon;
  if (!favicon) return null;

  let fileType = "image/png";
  const faviconBuffer = await fetch(favicon).then((res) => {
    fileType = res.headers.get("content-type") ?? "image/png";
    return res.arrayBuffer();
  });
  const colors = await getColors(Buffer.from(faviconBuffer), {
    count: 2,
    type: fileType,
  })
    .then((colors) => {
      console.log({ colors });
      return colors.map((color) => color.hex());
    })
    .catch((e: any) => {
      console.error(e);
    });
  console.log({ colors });
  const secondPredominantColor = colors[1] ?? colors[0];
  const darkerColor = changeColor(secondPredominantColor, -40);
  return (
    <CustomBentoCard
      logoUrl={favicon}
      gradient={`linear-gradient(45deg, ${secondPredominantColor}, ${darkerColor})`}
      rounded={12}
      size="square"
      url="https://www.behance.net/example_user"
      subtitle="Example user"
    />
  );
}
