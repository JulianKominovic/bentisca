import {
  BentoLogoProps,
  getBentoCardSizes,
  getHandmadeBrandColor,
} from "@/const/bento-cards";
import {
  changeHue,
  changeLuminosity,
  contrastingColor,
  hexColorToMatrix,
} from "@/utils/colors";
import { roundedRect } from "@/utils/rounding-svg";
import React from "react";
import { SimpleIcon } from "simple-icons";

export type GenericBentoProps = {
  icon: SimpleIcon;
} & BentoLogoProps;
const GenericBento = ({
  size,
  children,
  rounded = 24,
  icon,
}: GenericBentoProps) => {
  const { width, height } = getBentoCardSizes(size);

  const color = getHandmadeBrandColor(icon.title) || "#" + icon.hex;
  const darkerColor = changeHue(color, 10);
  const lighterColor = changeLuminosity(color as any, 50);
  const shadowColor = changeLuminosity(color as any, -50);
  const contrastColor = contrastingColor(color);
  const shadowsColorMatrix = hexColorToMatrix(color);
  const path = icon.path;
  const title = icon.title;
  const subtitle =
    children && children.length > width / 9
      ? children.slice(0, width / 9) + "..."
      : children;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
    >
      <path fill="url(#a)" d={roundedRect(width, height, rounded)} />
      <g opacity=".05" filter="url(#b)">
        <mask
          id="c"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="76"
          y="76"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(76 76) scale(2)"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill={shadowColor} d="M76 76h47.999v47.998H76z" />
        </g>
      </g>
      <g opacity=".1" filter="url(#e)">
        <mask
          id="f"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="72"
          y="72"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(72 72) scale(2)"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill={shadowColor} d="M72 72h47.999v47.998H72z" />
        </g>
      </g>
      <g opacity=".15" filter="url(#h)">
        <mask
          id="i"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="68"
          y="68"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(68 68) scale(2)"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill={shadowColor} d="M68 68h47.999v47.998H68z" />
        </g>
      </g>
      <g opacity=".2" filter="url(#k)">
        <mask
          id="l"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="64"
          y="64"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(64 64) scale(2)"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill={shadowColor} d="M64 64h47.999v47.998H64z" />
        </g>
      </g>
      <g opacity=".25" filter="url(#n)">
        <mask
          id="o"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="56"
          y="56"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(56 56) scale(2)"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill={shadowColor} d="M56 56h47.999v47.998H56z" />
        </g>
      </g>
      <g opacity=".3" filter="url(#q)">
        <mask
          id="r"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="48"
          y="48"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(48 48) scale(2)"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill={shadowColor} d="M48 48h47.999v47.998H48z" />
        </g>
      </g>
      <g opacity=".35" filter="url(#t)">
        <mask
          id="u"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="40"
          y="40"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(40 40) scale(2)"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill={shadowColor} d="M40 40h47.999v47.998H40z" />
        </g>
      </g>
      <g opacity=".4" filter="url(#w)">
        <mask
          id="x"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="39"
          y="39"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(39 39) scale(2)"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill={shadowColor} d="M39 39h47.999v47.998H39z" />
        </g>
      </g>
      <g opacity=".45" filter="url(#z)">
        <mask
          id="A"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="35"
          y="35"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(35 35) scale(2)"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill={shadowColor} d="M35 35h47.999v47.998H35z" />
        </g>
      </g>
      <g opacity=".5" filter="url(#C)">
        <mask
          id="D"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="31"
          y="31"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(31 31) scale(2)"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill={shadowColor} d="M31 31h47.999v47.998H31z" />
        </g>
      </g>
      <g opacity=".55" filter="url(#F)">
        <mask
          id="G"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="29"
          y="29"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(29 29) scale(2)"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill={shadowColor} d="M29 29h47.999v47.998H29z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#I)">
        <mask
          id="J"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="27"
          y="27"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(27 27) scale(2)"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill={shadowColor} d="M27 27h47.999v47.998H27z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#L)">
        <mask
          id="M"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="26"
          y="26"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(26 26) scale(2)"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill={shadowColor} d="M26 26h47.999v47.998H26z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#O)">
        <mask
          id="P"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="25"
          y="25"
          width="48"
          height="48"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(25 25) scale(2)"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill={shadowColor} d="M25 25h47.999v47.998H25z" />
        </g>
      </g>
      <g opacity=".6" filter="url(#R)">
        <mask
          id="S"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="24"
          y="24"
          width="49"
          height="49"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            fill="#fff"
            transform="translate(24 24) scale(2)"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill={shadowColor} d="M24.5 24.5h47.999v47.998H24.5z" />
        </g>
      </g>
      <g filter="url(#U)">
        <mask
          id="V"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="24"
          y="24"
          width="48"
          height="48"
        >
          <path
            transform="translate(24 24) scale(2)"
            fillRule="evenodd"
            clipRule="evenodd"
            d={path}
            style={{
              borderRadius: rounded,
            }}
            fill="#fff"
          />
        </mask>
        <g mask="url(#V)">
          <path
            fill="url(#W)"
            transform="translate(24 24)"
            d={roundedRect(48, 48, 0)}
            // d="M24 24h47.999v47.998H24z"
          />
        </g>
      </g>
      <text
        y={height - 48}
        x={24}
        fill={contrastColor}
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        {title}
      </text>

      <text
        y={height - 24}
        x={24}
        fill={contrastColor}
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 14,
          fontWeight: 300,
        }}
      >
        {subtitle}
      </text>
      <defs>
        <filter
          id="b"
          x="28"
          y="28"
          width="144"
          height="144"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="24"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="d"
          x="72"
          y="76"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="e"
          x="28"
          y="28"
          width="136"
          height="136"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="22"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="g"
          x="68"
          y="72"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="h"
          x="28"
          y="28"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="j"
          x="64"
          y="68"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="k"
          x="24"
          y="24"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="m"
          x="60"
          y="64"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="n"
          x="24"
          y="24"
          width="112"
          height="112"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="16"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="p"
          x="52"
          y="56"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="q"
          x="20"
          y="20"
          width="104"
          height="104"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="14"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="s"
          x="44"
          y="48"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="t"
          x="16"
          y="16"
          width="96"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="v"
          x="36"
          y="40"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="w"
          x="15"
          y="15"
          width="96"
          height="96"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="y"
          x="35"
          y="39"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="z"
          x="19"
          y="19"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="8"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="B"
          x="31"
          y="35"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="C"
          x="21"
          y="21"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="E"
          x="27"
          y="31"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="F"
          x="23"
          y="23"
          width="60"
          height="60"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="H"
          x="25"
          y="29"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="I"
          x="23"
          y="23"
          width="56"
          height="56"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="K"
          x="23"
          y="27"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="L"
          x="23"
          y="23"
          width="54"
          height="54"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="N"
          x="22"
          y="26"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="O"
          x="23"
          y="23"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="Q"
          x="21"
          y="25"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="R"
          x="23.5"
          y="23.5"
          width="50"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_1_25319"
          />
        </filter>
        <filter
          id="T"
          x="20.5"
          y="24.5"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_25319"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25319"
            result="shape"
          />
        </filter>
        <filter
          id="U"
          x="23.5"
          y="23"
          width="49.5"
          height="50"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 1 0"
            result="hardAlpha"
          />
          <feOffset dx="-.5" dy="-0.5" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values={shadowsColorMatrix} />
          <feBlend in2="shape" result="effect1_innerShadow_1_25319" />
          <feColorMatrix
            in="SourceAlpha"
            values={"1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 1 0"}
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values={shadowsColorMatrix} />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_25319"
            result="effect2_innerShadow_1_25319"
          />
        </filter>
        <linearGradient
          id="a"
          x1="87.5"
          y1="0"
          x2="87.5"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={lighterColor} />
          <stop offset="1" stopColor={color} />
        </linearGradient>
        <linearGradient
          id="W"
          x1="48"
          y1="24"
          x2="48"
          y2="71.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={contrastColor} />
          <stop offset="1" stopColor={changeLuminosity(contrastColor, -10)} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GenericBento;
