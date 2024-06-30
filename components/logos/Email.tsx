import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Email({
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
            d="M77.014 79.918c-.729 1.373-.783 2.666-.89 5.253a145.71 145.71 0 0 0 .035 12.86c.1 2.12.15 3.179.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.759 4.502.837 2.811.105 6.585.182 11.608.182 5.069 0 8.867-.078 11.686-.185 2.043-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.781-2.399.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.121-6.118-.102-2.528-.153-3.792-.882-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.669-.78-5.259-.883A273.627 273.627 0 0 0 96 76c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.509 1.509 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L83.055 82.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#01154A" d="M76 76h47.999v47.998H76z" />
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
            d="M73.014 75.918c-.729 1.373-.783 2.666-.89 5.253a145.71 145.71 0 0 0 .035 12.86c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.759 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.043-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.781-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.121-6.118-.102-2.528-.153-3.792-.882-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.669-.78-5.259-.883A273.635 273.635 0 0 0 92 72c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.509 1.509 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L79.055 78.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#01154A" d="M72 72h47.999v47.998H72z" />
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
            d="M69.014 71.918c-.729 1.373-.783 2.666-.89 5.253a145.71 145.71 0 0 0 .035 12.86c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.043-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.781-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.121-6.118-.102-2.528-.153-3.792-.882-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.669-.78-5.259-.883A273.629 273.629 0 0 0 88 68c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.509 1.509 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L75.055 74.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#01154A" d="M68 68h47.999v47.998H68z" />
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
            d="M65.014 67.918c-.729 1.373-.783 2.666-.89 5.253a145.71 145.71 0 0 0 .035 12.86c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.781-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.121-6.118-.102-2.528-.153-3.792-.882-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 84 64c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L71.055 70.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#01154A" d="M64 64h47.999v47.998H64z" />
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
            d="M57.014 59.918c-.729 1.373-.783 2.666-.89 5.253a145.71 145.71 0 0 0 .035 12.86c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 76 56c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L63.055 62.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#01154A" d="M56 56h47.999v47.998H56z" />
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
            d="M49.014 51.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 68 48c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L55.055 54.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#01154A" d="M48 48h47.999v47.998H48z" />
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
            d="M41.014 43.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 60 40c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L47.055 46.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#01154A" d="M40 40h47.999v47.998H40z" />
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
            d="M40.014 42.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 59 39c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L46.055 45.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#01154A" d="M39 39h47.999v47.998H39z" />
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
            d="M36.014 38.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 55 35c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L42.055 41.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#01154A" d="M35 35h47.999v47.998H35z" />
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
            d="M32.014 34.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.728-2.67-.78-5.259-.883A273.629 273.629 0 0 0 51 31c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L38.055 37.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#01154A" d="M31 31h47.999v47.998H31z" />
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
            d="M30.014 32.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.727-2.67-.78-5.259-.883A273.629 273.629 0 0 0 49 29c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L36.055 35.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#01154A" d="M29 29h47.999v47.998H29z" />
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
            d="M28.014 30.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.727-2.67-.78-5.259-.883A273.629 273.629 0 0 0 47 27c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L34.055 33.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#01154A" d="M27 27h47.999v47.998H27z" />
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
            d="M27.014 29.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.727-2.67-.78-5.259-.883A273.629 273.629 0 0 0 46 26c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L33.055 32.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#01154A" d="M26 26h47.999v47.998H26z" />
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
            d="M26.014 28.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.727-2.67-.78-5.259-.883A273.629 273.629 0 0 0 45 25c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L32.055 31.37Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#01154A" d="M25 25h47.999v47.998H25z" />
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
            d="M25.514 28.418c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.727-2.67-.78-5.259-.883A273.629 273.629 0 0 0 44.5 24.5c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L31.555 30.87Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#01154A" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            d="M25.014 27.918c-.729 1.373-.783 2.666-.89 5.254a145.71 145.71 0 0 0 .035 12.859c.1 2.12.15 3.18.884 4.545.53.986 1.856 2.3 2.847 2.82 1.373.72 2.416.76 4.502.837 2.811.105 6.585.182 11.608.182 5.07 0 8.867-.078 11.686-.185 2.042-.077 3.064-.116 4.437-.837.982-.517 2.321-1.844 2.846-2.822.733-1.367.78-2.4.876-4.463.091-1.96.155-4.273.155-6.9 0-2.286-.048-4.334-.12-6.118-.103-2.528-.154-3.792-.883-5.166-.56-1.057-1.784-2.28-2.841-2.84-1.375-.727-2.67-.78-5.259-.883A273.629 273.629 0 0 0 44 24c-4.368 0-7.964.085-10.816.198-2.636.104-3.953.157-5.327.883-1.066.564-2.277 1.773-2.843 2.837Zm6.04 2.453a1.55 1.55 0 0 0-2.147.342 1.51 1.51 0 0 0 .346 2.124l10.243 7.312a7.765 7.765 0 0 0 9.008 0l10.243-7.312a1.51 1.51 0 0 0 .346-2.124 1.55 1.55 0 0 0-2.148-.342l-10.243 7.313a4.659 4.659 0 0 1-5.404 0L31.055 30.37Z"
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
        Email
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
            result="effect1_foregroundBlur_10_6826"
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
            result="effect1_dropShadow_10_6826"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10_6826"
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
          <feColorMatrix values="0 0 0 0 0.380139 0 0 0 0 0.533759 0 0 0 0 0.766667 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_10_6826" />
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
            in2="effect1_innerShadow_10_6826"
            result="effect2_innerShadow_10_6826"
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
          <stop stopColor="#1F3E6D" />
          <stop offset="1" stopColor="#00154A" />
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
          <stop offset="1" stopColor="#BDCFF5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
