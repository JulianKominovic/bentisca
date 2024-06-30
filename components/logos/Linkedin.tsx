import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Linkedin({
  size,
  rounded = 24,
  children,
}: BentoLogoProps) {
  const { width, height } = getBentoCardSizes(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      style={{
        borderRadius: rounded,
      }}
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
            d="M112 112h-7.397V99.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.385V112H88.9V88h7.128v3.233s2.144-3.966 7.237-3.966c5.09 0 8.735 3.108 8.735 9.538V112ZM80.396 84.857c-2.428 0-4.396-1.983-4.396-4.428C76 77.983 77.968 76 80.396 76s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM76.715 112h7.433V88h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#1946B8" d="M76 76h47.999v47.998H76z" />
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
            d="M108 108h-7.397V95.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.385V108H84.9V84h7.128v3.233s2.144-3.966 7.237-3.966c5.09 0 8.735 3.108 8.735 9.538V108ZM76.396 80.857c-2.428 0-4.396-1.983-4.396-4.428C72 73.983 73.968 72 76.396 72s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM72.715 108h7.433V84h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#1946B8" d="M72 72h47.999v47.998H72z" />
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
            d="M104 104h-7.397V91.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.385V104H80.9V80h7.128v3.233s2.144-3.966 7.237-3.966c5.09 0 8.735 3.108 8.735 9.538V104ZM72.396 76.857c-2.428 0-4.396-1.983-4.396-4.428C68 69.983 69.968 68 72.396 68s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM68.715 104h7.433V80h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#1946B8" d="M68 68h47.999v47.998H68z" />
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
            d="M100 100h-7.397V87.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.385V100H76.9V76h7.128v3.233s2.144-3.966 7.237-3.966c5.09 0 8.735 3.108 8.735 9.538V100ZM68.396 72.857c-2.428 0-4.396-1.983-4.396-4.428C64 65.983 65.968 64 68.396 64s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM64.715 100h7.433V76h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#1946B8" d="M64 64h47.999v47.998H64z" />
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
            d="M92 92h-7.397V79.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.385V92H68.9V68h7.128v3.233s2.144-3.966 7.237-3.966c5.09 0 8.735 3.108 8.735 9.538V92ZM60.396 64.857c-2.428 0-4.396-1.983-4.396-4.428C56 57.983 57.968 56 60.396 56s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM56.715 92h7.433V68h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#1946B8" d="M56 56h47.999v47.998H56z" />
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
            d="M84 84h-7.397V71.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.385V84H60.9V60h7.128v3.233s2.144-3.966 7.237-3.966c5.09 0 8.735 3.108 8.735 9.538V84ZM52.396 56.857c-2.428 0-4.396-1.983-4.396-4.428C48 49.983 49.968 48 52.396 48s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM48.715 84h7.433V60h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#1946B8" d="M48 48h47.999v47.998H48z" />
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
            d="M76 76h-7.397V63.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V76H52.9V52h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V76ZM44.396 48.857c-2.428 0-4.396-1.983-4.396-4.428C40 41.983 41.968 40 44.396 40s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM40.715 76h7.433V52h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#1946B8" d="M40 40h47.999v47.998H40z" />
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
            d="M75 75h-7.397V62.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V75H51.9V51h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V75ZM43.396 47.857c-2.428 0-4.396-1.983-4.396-4.428C39 40.983 40.968 39 43.396 39s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM39.715 75h7.433V51h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#1946B8" d="M39 39h47.999v47.998H39z" />
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
            d="M71 71h-7.397V58.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V71H47.9V47h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V71ZM39.396 43.857c-2.428 0-4.396-1.983-4.396-4.428C35 36.983 36.968 35 39.396 35s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM35.715 71h7.433V47h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#1946B8" d="M35 35h47.999v47.998H35z" />
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
            d="M67 67h-7.397V54.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V67H43.9V43h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V67ZM35.396 39.857c-2.428 0-4.396-1.983-4.396-4.428C31 32.983 32.968 31 35.396 31s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM31.715 67h7.433V43h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#1946B8" d="M31 31h47.999v47.998H31z" />
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
            d="M65 65h-7.397V52.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V65H41.9V41h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V65ZM33.396 37.857c-2.428 0-4.396-1.983-4.396-4.428C29 30.983 30.968 29 33.396 29s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM29.715 65h7.433V41h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#1946B8" d="M29 29h47.999v47.998H29z" />
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
            d="M63 63h-7.397V50.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V63H39.9V39h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V63ZM31.396 35.857c-2.428 0-4.396-1.983-4.396-4.428C27 28.983 28.968 27 31.396 27s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM27.715 63h7.433V39h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#1946B8" d="M27 27h47.999v47.998H27z" />
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
            d="M62 62h-7.397V49.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V62H38.9V38h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V62ZM30.396 34.857c-2.428 0-4.396-1.983-4.396-4.428C26 27.983 27.968 26 30.396 26s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM26.715 62h7.433V38h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#1946B8" d="M26 26h47.999v47.998H26z" />
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
            d="M61 61h-7.397V48.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V61H37.9V37h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V61ZM29.396 33.857c-2.428 0-4.396-1.983-4.396-4.428C25 26.983 26.968 25 29.396 25s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM25.715 61h7.433V37h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#1946B8" d="M25 25h47.999v47.998H25z" />
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
            d="M60.5 60.5h-7.397V47.901c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V60.5H37.4v-24h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V60.5ZM28.896 33.357c-2.428 0-4.396-1.983-4.396-4.428 0-2.446 1.968-4.429 4.396-4.429s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM25.215 60.5h7.433v-24h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#1946B8" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60 60h-7.397V47.401c0-3.454-1.312-5.384-4.046-5.384-2.975 0-4.529 2.009-4.529 5.384V60H36.9V36h7.129v3.233s2.143-3.966 7.236-3.966c5.09 0 8.735 3.108 8.735 9.538V60ZM28.396 32.857c-2.428 0-4.396-1.983-4.396-4.428C24 25.983 25.968 24 28.396 24s4.394 1.983 4.394 4.429c0 2.445-1.966 4.428-4.394 4.428ZM24.715 60h7.433V36h-7.433v24Z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#V)">
          <path fill="url(#W)" d="M24 24h47.999v47.998H24z" />
        </g>
      </g>
      <text
        y={height - 48}
        x={24}
        fill="#FBFBFB"
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Linkedin
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#FBFBFB"
        style={{
          fontFamily:
            "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
          fontSize: 14,
          fontWeight: 300,
        }}
      >
        {children && children.length > width / 9
          ? children.slice(0, width / 9) + "..."
          : children}
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            stdDeviation=".5"
            result="effect1_foregroundBlur_1_24522"
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
            result="effect1_dropShadow_1_24522"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_24522"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-.5" dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.420104 0 0 0 0 0.625302 0 0 0 0 0.908333 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_24522" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_24522"
            result="effect2_innerShadow_1_24522"
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
          <stop stopColor="#3D77C7" />
          <stop offset="1" stopColor="#195AB5" />
        </linearGradient>
        <linearGradient
          id="W"
          x1="48"
          y1="24"
          x2="48"
          y2="71.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#A9CDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
