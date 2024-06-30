import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function ReadCv({
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M83.256 77.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.579 2.871c3.019.82 4.529 1.229 5.84.947a5.569 5.569 0 0 0 2.987-1.747c.897-1.008 1.301-2.537 2.11-5.595l4.123-15.585c.809-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L88.762 83.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.412a1.355 1.355 0 0 0 1.663-.972 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#000" d="M76 76h47.999v47.998H76z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M79.256 73.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.579 2.871c3.019.82 4.529 1.229 5.84.947a5.566 5.566 0 0 0 2.987-1.747c.897-1.008 1.301-2.537 2.11-5.595l4.123-15.585c.809-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L84.762 79.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.412a1.356 1.356 0 0 0 1.663-.972 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#000" d="M72 72h47.999v47.998H72z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M75.256 69.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.579 2.871c3.019.82 4.529 1.229 5.84.947a5.566 5.566 0 0 0 2.987-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.809-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L80.762 75.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.412a1.356 1.356 0 0 0 1.663-.972 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#000" d="M68 68h47.999v47.998H68z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M71.256 65.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.579 2.871c3.019.82 4.529 1.229 5.84.947a5.566 5.566 0 0 0 2.987-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L76.762 71.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.412a1.356 1.356 0 0 0 1.663-.972 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#000" d="M64 64h47.999v47.998H64z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.256 57.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L68.762 63.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.412a1.356 1.356 0 0 0 1.663-.972 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#000" d="M56 56h47.999v47.998H56z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M55.256 49.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L60.762 55.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.412a1.356 1.356 0 0 0 1.663-.972 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#000" d="M48 48h47.999v47.998H48z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.256 41.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L52.762 47.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#000" d="M40 40h47.999v47.998H40z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.256 40.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.579-2.871c-3.019-.82-4.529-1.23-5.84-.947a5.566 5.566 0 0 0-2.987 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L51.762 46.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#000" d="M39 39h47.999v47.998H39z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M42.256 36.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L47.762 42.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#000" d="M35 35h47.999v47.998H35z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M38.256 32.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L43.762 38.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#000" d="M31 31h47.999v47.998H31z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.256 30.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L41.762 36.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#000" d="M29 29h47.999v47.998H29z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.256 28.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L39.762 34.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#000" d="M27 27h47.999v47.998H27z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.256 27.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L38.762 33.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#000" d="M26 26h47.999v47.998H26z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32.256 26.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L37.762 32.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#000" d="M25 25h47.999v47.998H25z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.756 26.336c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L37.262 32.07Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#000" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.256 25.836c-.897 1.008-1.301 2.537-2.11 5.596l-4.123 15.584c-.81 3.058-1.214 4.587-.935 5.914a5.67 5.67 0 0 0 1.725 3.026c.995.908 2.505 1.318 5.525 2.137l10.578 2.871c3.02.82 4.53 1.23 5.84.947a5.566 5.566 0 0 0 2.988-1.747c.897-1.008 1.301-2.537 2.11-5.596l4.123-15.584c.81-3.058 1.214-4.587.935-5.914a5.67 5.67 0 0 0-1.725-3.026c-.995-.908-2.505-1.318-5.525-2.137l-10.578-2.871c-3.02-.82-4.53-1.23-5.84-.947a5.566 5.566 0 0 0-2.988 1.747Zm5.506 5.733a1.356 1.356 0 0 0-1.663.972 1.377 1.377 0 0 0 .96 1.684l13.552 3.678a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684L36.762 31.57Zm-3.224 6.875a1.356 1.356 0 0 1 1.662-.972l13.552 3.677c.724.197 1.154.95.96 1.684a1.356 1.356 0 0 1-1.663.973l-13.551-3.678a1.377 1.377 0 0 1-.96-1.684Zm.1 4.93a1.356 1.356 0 0 0-1.662.973 1.377 1.377 0 0 0 .96 1.684l8.888 2.413a1.356 1.356 0 0 0 1.663-.973 1.377 1.377 0 0 0-.96-1.684l-8.888-2.412Z"
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
          fontFamily: "sans-serif",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Read.cv
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#FBFBFB"
        style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 300 }}
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="24"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="d"
          x="72"
          y="76"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="22"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="g"
          x="68"
          y="72"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="j"
          x="64"
          y="68"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="20"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="m"
          x="60"
          y="64"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="16"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="p"
          x="52"
          y="56"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="14"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="s"
          x="44"
          y="48"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="v"
          x="36"
          y="40"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="12"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="y"
          x="35"
          y="39"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="8"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="B"
          x="31"
          y="35"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="5"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="E"
          x="27"
          y="31"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="3"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="H"
          x="25"
          y="29"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="2"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="K"
          x="23"
          y="27"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="N"
          x="22"
          y="26"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="Q"
          x="21"
          y="25"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_42_5806"
          />
        </filter>
        <filter
          id="T"
          x="20.5"
          y="24.5"
          width="55.999"
          height="55.998"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_42_5806"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_42_5806"
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
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-.5" dy="-1" />
          <feGaussianBlur stdDeviation=".5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect1_innerShadow_42_5806" />
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
            in2="effect1_innerShadow_42_5806"
            result="effect2_innerShadow_42_5806"
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
          <stop stop-color="#2B2B2B" />
          <stop offset="1" stop-color="#111" />
        </linearGradient>
        <linearGradient
          id="W"
          x1="48"
          y1="24"
          x2="48"
          y2="71.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#fff" />
          <stop offset="1" stop-color="#CDCDCD" />
        </linearGradient>
      </defs>
    </svg>
  );
}
