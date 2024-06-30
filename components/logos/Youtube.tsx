import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Youtube({
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
            d="M113.358 76.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.786-1.901 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.22 5.22 0 0 1-3.71-3.661c-1.206-4.855-1.123-15.121-.026-19.87.484-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM92.927 84.27l10.968 6.208-10.968 6.208V84.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#A41006" d="M76 76h47.999v47.998H76z" />
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
            d="M109.358 72.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.901 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.484-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM88.927 80.27l10.968 6.208-10.968 6.208V80.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#A41006" d="M72 72h47.999v47.998H72z" />
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
            d="M105.358 68.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.901 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.484-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM84.927 76.27l10.968 6.208-10.968 6.208V76.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#A41006" d="M68 68h47.999v47.998H68z" />
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
            d="M101.358 64.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.901 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.484-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.952 32.797-.027ZM80.927 72.27l10.968 6.208-10.968 6.208V72.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#A41006" d="M64 64h47.999v47.998H64z" />
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
            d="M93.358 56.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.207-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM72.927 64.27l10.968 6.208-10.968 6.208V64.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#A41006" d="M56 56h47.999v47.998H56z" />
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
            d="M85.358 48.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.207-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM64.927 56.27l10.968 6.208-10.968 6.208V56.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#A41006" d="M48 48h47.999v47.998H48z" />
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
            d="M77.358 40.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.207-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM56.927 48.27l10.968 6.208-10.968 6.207V48.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#A41006" d="M40 40h47.999v47.998H40z" />
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
            d="M76.358 39.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.207-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM55.927 47.27l10.968 6.208-10.968 6.207V47.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#A41006" d="M39 39h47.999v47.998H39z" />
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
            d="M72.358 35.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.207-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM51.927 43.27l10.968 6.208-10.968 6.207V43.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#A41006" d="M35 35h47.999v47.998H35z" />
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
            d="M68.358 31.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM47.927 39.27l10.968 6.208-10.968 6.207V39.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#A41006" d="M31 31h47.999v47.998H31z" />
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
            d="M66.358 29.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.785 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM45.927 37.27l10.968 6.208-10.968 6.207V37.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#A41006" d="M29 29h47.999v47.998H29z" />
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
            d="M64.358 27.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.986 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.786 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM43.927 35.27l10.968 6.208-10.968 6.207V35.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#A41006" d="M27 27h47.999v47.998H27z" />
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
            d="M63.358 26.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.985 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.786 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM42.927 34.27l10.968 6.208-10.968 6.207V34.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#A41006" d="M26 26h47.999v47.998H26z" />
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
            d="M62.358 25.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.985 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.786 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM41.927 33.27l10.968 6.208-10.968 6.207V33.27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#A41006" d="M25 25h47.999v47.998H25z" />
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
            d="M61.858 25.368a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.985 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.786 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM41.427 32.77l10.968 6.208-10.968 6.207V32.77Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#A41006" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            d="M61.358 24.868a5.222 5.222 0 0 1 3.71 3.661c1.28 5.094 1.196 14.724.027 19.897-.484 1.785-1.9 3.178-3.71 3.661-5.108 1.247-27.985 1.093-32.798 0a5.222 5.222 0 0 1-3.71-3.66c-1.206-4.856-1.123-15.122-.026-19.871.483-1.786 1.9-3.178 3.71-3.661 6.828-1.406 30.367-.953 32.797-.027ZM40.927 32.27l10.968 6.208-10.968 6.207V32.27Z"
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
        Youtube
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
            stdDeviation=".5"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-.5" dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.795833 0 0 0 0 0.338229 0 0 0 0 0.343286 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_25319" />
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
          <stop stopColor="#F03B3E" />
          <stop offset="1" stopColor="#CF0000" />
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
          <stop offset="1" stopColor="#FFB9BA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
