import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import { roundedRect } from "@/utils/rounding-svg";

export default function Github({
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
            d="M95.5 76C84.726 76 76 84.718 76 95.48c0 8.621 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.926 0-.462-.024-1.996-.024-3.628-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.756 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.872-2.167-8.872-9.618 0-2.119.755-3.872 1.998-5.236-.195-.487-.877-2.483.195-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.729-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.609 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.121 1.341.926 7.702-2.581 13.284-9.887 13.284-18.482C115 84.718 106.274 76 95.5 76Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#0F0F0F" d="M76 76h47.999v47.998H76z" />
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
            d="M91.5 72C80.726 72 72 80.718 72 91.48c0 8.621 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.926 0-.462-.024-1.996-.024-3.628-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.756 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.872-2.167-8.872-9.618 0-2.119.755-3.872 1.998-5.236-.195-.487-.877-2.483.195-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.729-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.609 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.121 1.34.926 7.703-2.581 13.285-9.887 13.285-18.482C111 80.718 102.274 72 91.5 72Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#0F0F0F" d="M72 72h47.999v47.998H72z" />
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
            d="M87.5 68C76.726 68 68 76.718 68 87.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.926 0-.462-.024-1.996-.024-3.628-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.756 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.872-2.167-8.872-9.618 0-2.119.755-3.872 1.998-5.236-.195-.487-.877-2.483.195-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.121 1.34.926C101.419 103.382 107 96.076 107 87.481 107 76.718 98.274 68 87.5 68Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#0F0F0F" d="M68 68h47.999v47.998H68z" />
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
            d="M83.5 64C72.726 64 64 72.718 64 83.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.926 0-.462-.024-1.996-.024-3.628-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.756 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.872-2.167-8.872-9.618 0-2.119.755-3.872 1.998-5.236-.195-.487-.877-2.483.195-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.121 1.34.926C97.419 99.382 103 92.076 103 83.481 103 72.718 94.274 64 83.5 64Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#0F0F0F" d="M64 64h47.999v47.998H64z" />
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
            d="M75.5 56C64.726 56 56 64.718 56 75.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.756 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.872-2.167-8.872-9.618 0-2.119.755-3.872 1.998-5.236-.195-.487-.877-2.483.195-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C89.419 91.382 95 84.076 95 75.48 95 64.718 86.274 56 75.5 56Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#0F0F0F" d="M56 56h47.999v47.998H56z" />
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
            d="M67.5 48C56.726 48 48 56.718 48 67.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C81.419 83.382 87 76.076 87 67.48 87 56.718 78.274 48 67.5 48Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#0F0F0F" d="M48 48h47.999v47.998H48z" />
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
            d="M59.5 40C48.726 40 40 48.718 40 59.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C73.419 75.382 79 68.076 79 59.48 79 48.718 70.274 40 59.5 40Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#0F0F0F" d="M40 40h47.999v47.998H40z" />
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
            d="M58.5 39C47.726 39 39 47.718 39 58.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.475-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C72.419 74.382 78 67.076 78 58.48 78 47.718 69.274 39 58.5 39Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#0F0F0F" d="M39 39h47.999v47.998H39z" />
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
            d="M54.5 35C43.726 35 35 43.718 35 54.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C68.419 70.382 74 63.076 74 54.48 74 43.718 65.274 35 54.5 35Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#0F0F0F" d="M35 35h47.999v47.998H35z" />
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
            d="M50.5 31C39.726 31 31 39.718 31 50.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C64.419 66.382 70 59.076 70 50.48 70 39.718 61.274 31 50.5 31Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#0F0F0F" d="M31 31h47.999v47.998H31z" />
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
            d="M48.5 29C37.726 29 29 37.718 29 48.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C62.419 64.382 68 57.076 68 48.48 68 37.718 59.274 29 48.5 29Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#0F0F0F" d="M29 29h47.999v47.998H29z" />
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
            d="M46.5 27C35.726 27 27 35.718 27 46.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.357 0 .512.366 1.12 1.34.926C60.419 62.382 66 55.076 66 46.48 66 35.718 57.274 27 46.5 27Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#0F0F0F" d="M27 27h47.999v47.998H27z" />
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
            d="M45.5 26C34.726 26 26 34.718 26 45.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.998 1.997 1.755 2.946 4.559 2.118 5.68 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.358 0 .51.366 1.12 1.34.925C59.419 61.382 65 54.076 65 45.48 65 34.718 56.274 26 45.5 26Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#0F0F0F" d="M26 26h47.999v47.998H26z" />
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
            d="M44.5 25C33.726 25 25 33.718 25 44.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.999 1.997 1.755 2.946 4.558 2.118 5.679 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.358 0 .51.366 1.12 1.34.925C58.419 60.382 64 53.076 64 44.48 64 33.718 55.274 25 44.5 25Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#0F0F0F" d="M25 25h47.999v47.998H25z" />
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
            d="M44 24.5c-10.774 0-19.5 8.718-19.5 19.48 0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.999 1.997 1.755 2.946 4.558 2.118 5.679 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.358 0 .51.366 1.12 1.34.925C57.919 59.882 63.5 52.576 63.5 43.98 63.5 33.218 54.774 24.5 44 24.5Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#0F0F0F" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            d="M43.5 24C32.726 24 24 32.718 24 43.48c0 8.62 5.582 15.902 13.333 18.483.975.17 1.34-.414 1.34-.925 0-.463-.024-1.997-.024-3.629-4.899.901-6.166-1.193-6.556-2.289-.22-.56-1.17-2.289-2-2.751-.682-.366-1.657-1.267-.024-1.291 1.536-.024 2.633 1.412 2.999 1.997 1.755 2.946 4.558 2.118 5.679 1.607.17-1.266.682-2.119 1.243-2.606-4.339-.487-8.873-2.167-8.873-9.618 0-2.119.756-3.872 2-5.236-.196-.487-.878-2.483.194-5.162 0 0 1.633-.511 5.363 1.997a18.109 18.109 0 0 1 4.875-.658c1.657 0 3.315.22 4.875.658 3.73-2.533 5.362-1.997 5.362-1.997 1.073 2.679.39 4.675.195 5.162 1.243 1.364 1.999 3.093 1.999 5.236 0 7.476-4.558 9.131-8.897 9.618.707.61 1.316 1.778 1.316 3.604 0 2.606-.024 4.7-.024 5.358 0 .51.366 1.12 1.34.925C57.419 59.382 63 52.076 63 43.48 63 32.718 54.274 24 43.5 24Z"
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
        Github
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#FBFBFB"
        style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 300 }}
      >
        {children}
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
            result="effect1_foregroundBlur_1_27307"
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
            result="effect1_dropShadow_1_27307"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_27307"
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
          <feBlend in2="shape" result="effect1_innerShadow_1_27307" />
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
            in2="effect1_innerShadow_1_27307"
            result="effect2_innerShadow_1_27307"
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
          <stop stop-color="#25262F" />
          <stop offset="1" stop-color="#0C0D16" />
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
