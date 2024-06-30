import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Figma({
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
            d="M76.402 82.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H82.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M76.402 94.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H82.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M101.153 82.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="94.966" cy="94.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M88.778 107.369a6.188 6.188 0 1 1-6.188-6.187h6.188v6.187Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#171717" d="M76 76h47.999v47.998H76z" />
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
            d="M72.402 78.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H78.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M72.402 90.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H78.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M97.153 78.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="90.966" cy="90.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M84.778 103.369a6.188 6.188 0 1 1-6.188-6.187h6.188v6.187Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#171717" d="M72 72h47.999v47.998H72z" />
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
            d="M68.402 74.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H74.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M68.402 86.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H74.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M93.153 74.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="86.966" cy="86.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M80.778 99.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#171717" d="M68 68h47.999v47.998H68z" />
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
            d="M64.402 70.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H70.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M64.402 82.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H70.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M89.153 70.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="82.966" cy="82.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M76.778 95.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#171717" d="M64 64h47.999v47.998H64z" />
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
            d="M56.402 62.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H62.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M56.402 74.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H62.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M81.153 62.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="74.966" cy="74.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M68.778 87.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#171717" d="M56 56h47.999v47.998H56z" />
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
            d="M48.402 54.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H54.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M48.402 66.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H54.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M73.153 54.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="66.966" cy="66.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M60.778 79.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#171717" d="M48 48h47.999v47.998H48z" />
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
            d="M40.402 46.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H46.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M40.402 58.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H46.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M65.153 46.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="58.966" cy="58.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M52.778 71.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#171717" d="M40 40h47.999v47.998H40z" />
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
            d="M39.402 45.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H45.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M39.402 57.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H45.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M64.153 45.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="57.966" cy="57.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M51.778 70.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#171717" d="M39 39h47.999v47.998H39z" />
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
            d="M35.402 41.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H41.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M35.402 53.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H41.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M60.153 41.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="53.966" cy="53.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M47.778 66.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#171717" d="M35 35h47.999v47.998H35z" />
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
            d="M31.402 37.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H37.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M31.402 49.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H37.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M56.153 37.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="49.966" cy="49.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M43.778 62.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#171717" d="M31 31h47.999v47.998H31z" />
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
            d="M29.402 35.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H35.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M29.402 47.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H35.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M54.153 35.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="47.966" cy="47.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M41.778 60.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#171717" d="M29 29h47.999v47.998H29z" />
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
            d="M27.402 33.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H33.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M27.402 45.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H33.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M52.153 33.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="45.966" cy="45.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M39.778 58.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#171717" d="M27 27h47.999v47.998H27z" />
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
            d="M26.402 32.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H32.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M26.402 44.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H32.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M51.153 32.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="44.966" cy="44.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M38.778 57.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#171717" d="M26 26h47.999v47.998H26z" />
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
            d="M25.402 31.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H31.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M25.402 43.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H31.59a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M50.153 31.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="43.966" cy="43.994" r="6.188" fill="#2FEBFF" />
          <path
            d="M37.778 56.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#171717" d="M25 25h47.999v47.998H25z" />
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
            d="M24.902 31.118a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H31.09a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#FF773D"
          />
          <path
            d="M24.902 43.494a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H31.09a6.188 6.188 0 0 1-6.188-6.188Z"
            fill="#C677FF"
          />
          <path
            d="M49.653 31.118a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
            fill="#FFB1A3"
          />
          <circle cx="43.466" cy="43.494" r="6.188" fill="#2FEBFF" />
          <path
            d="M37.278 55.87a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
            fill="#00EDAB"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#171717" d="M24.5 24.5h47.999v47.998H24.5z" />
        </g>
      </g>
      <g filter="url(#U)">
        <path
          d="M24.402 30.618a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H30.59a6.188 6.188 0 0 1-6.188-6.188Z"
          fill="#FF773D"
        />
      </g>
      <g filter="url(#V)">
        <path
          d="M24.402 42.994a6.188 6.188 0 0 1 6.188-6.188h6.188v12.376H30.59a6.188 6.188 0 0 1-6.188-6.188Z"
          fill="#C677FF"
        />
      </g>
      <g filter="url(#W)">
        <path
          d="M49.153 30.618a6.188 6.188 0 0 0-6.188-6.188h-6.187v12.376h6.188a6.188 6.188 0 0 0 6.187-6.188Z"
          fill="#FFB1A3"
        />
      </g>
      <g filter="url(#X)">
        <circle cx="42.966" cy="42.994" r="6.188" fill="#2FEBFF" />
      </g>
      <g filter="url(#Y)">
        <path
          d="M36.778 55.37a6.188 6.188 0 1 1-6.188-6.188h6.188v6.188Z"
          fill="#00EDAB"
        />
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
        Figma
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
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
            result="effect1_foregroundBlur_1_27991"
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
            result="effect1_dropShadow_1_27991"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27991"
            result="shape"
          />
        </filter>
        <filter
          id="U"
          x="24.015"
          y="23.657"
          width="12.762"
          height="13.923"
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
          <feOffset dx="-.387" dy="-.773" />
          <feGaussianBlur stdDeviation="2.32" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.06 0 0 0 0 0 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_27991" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".773" />
          <feGaussianBlur stdDeviation="3.094" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_27991"
            result="effect2_innerShadow_1_27991"
          />
        </filter>
        <filter
          id="V"
          x="24.015"
          y="36.033"
          width="12.762"
          height="13.923"
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
          <feOffset dx="-.387" dy="-.773" />
          <feGaussianBlur stdDeviation="2.707" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0.228977 0 0 0 0 0 0 0 0 0 0.3875 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_27991" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".773" />
          <feGaussianBlur stdDeviation="3.094" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_27991"
            result="effect2_innerShadow_1_27991"
          />
        </filter>
        <filter
          id="W"
          x="36.391"
          y="23.657"
          width="12.762"
          height="13.923"
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
          <feOffset dx="-.387" dy="-.773" />
          <feGaussianBlur stdDeviation="2.32" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.159664 0 0 0 0 0 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_27991" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".773" />
          <feGaussianBlur stdDeviation="3.094" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_27991"
            result="effect2_innerShadow_1_27991"
          />
        </filter>
        <filter
          id="X"
          x="36.391"
          y="36.033"
          width="12.762"
          height="13.923"
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
          <feOffset dx="-.387" dy="-.773" />
          <feGaussianBlur stdDeviation="2.32" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.113333 0 0 0 0 0.333333 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_27991" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".773" />
          <feGaussianBlur stdDeviation="3.094" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_27991"
            result="effect2_innerShadow_1_27991"
          />
        </filter>
        <filter
          id="Y"
          x="24.015"
          y="48.408"
          width="12.762"
          height="13.923"
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
          <feOffset dx="-.387" dy="-.773" />
          <feGaussianBlur stdDeviation="2.707" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.145833 0 0 0 0 0.107843 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_27991" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy=".773" />
          <feGaussianBlur stdDeviation="3.094" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend
            mode="soft-light"
            in2="effect1_innerShadow_1_27991"
            result="effect2_innerShadow_1_27991"
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
          <stop stopColor="#313030" />
          <stop offset="1" stopColor="#121313" />
        </linearGradient>
      </defs>
    </svg>
  );
}
