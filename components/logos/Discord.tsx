import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";

export default function Discord({
  children,
  size,
  rounded = 24,
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
      <path fill="url(#a)" d={`M0 0h${width}v${height}H0z`} />
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
            d="M111.578 78.814A33.418 33.418 0 0 0 102.913 76a26.815 26.815 0 0 0-1.11 2.382 30.798 30.798 0 0 0-9.603 0c-.3-.747-.746-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.627 5.628a27.53 27.53 0 0 0 2.277-3.874 22.14 22.14 0 0 1-3.585-1.803c.301-.23.595-.471.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.878.719a22.01 22.01 0 0 1-3.59 1.806 27.334 27.334 0 0 0 2.276 3.874c3.468-1.116 6.996-2.821 10.633-5.631.873-9.544-1.489-17.819-6.243-25.155ZM90.023 98.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#3531E7" d="M76 76h47.999v47.998H76z" />
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
            d="M107.578 74.814A33.419 33.419 0 0 0 98.913 72c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.746-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.627 5.628a27.53 27.53 0 0 0 2.277-3.874 22.124 22.124 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.878.719a21.995 21.995 0 0 1-3.59 1.806 27.334 27.334 0 0 0 2.276 3.874c3.468-1.116 6.996-2.821 10.633-5.631.873-9.544-1.489-17.819-6.243-25.155ZM86.023 94.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#3531E7" d="M72 72h47.999v47.998H72z" />
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
            d="M103.578 70.814A33.415 33.415 0 0 0 94.913 68c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.746-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.627 5.628a27.512 27.512 0 0 0 2.277-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.878.719a22.003 22.003 0 0 1-3.59 1.806 27.377 27.377 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.489-17.819-6.243-25.155ZM82.023 90.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#3531E7" d="M68 68h47.999v47.998H68z" />
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
            d="M99.578 66.814A33.411 33.411 0 0 0 90.913 64c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.746-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.627 5.628a27.5 27.5 0 0 0 2.277-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.879.719a22.028 22.028 0 0 1-3.591 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.489-17.819-6.243-25.155ZM78.023 86.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#3531E7" d="M64 64h47.999v47.998H64z" />
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
            d="M91.578 58.814A33.411 33.411 0 0 0 82.913 56c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.746-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.627 5.628a27.5 27.5 0 0 0 2.277-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.879.719a22.028 22.028 0 0 1-3.591 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM70.023 78.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#3531E7" d="M56 56h47.999v47.998H56z" />
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
            d="M83.578 50.814A33.411 33.411 0 0 0 74.913 48c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.628a27.5 27.5 0 0 0 2.276-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.879.719a22.028 22.028 0 0 1-3.591 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.818-6.243-25.155ZM62.023 70.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#3531E7" d="M48 48h47.999v47.998H48z" />
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
            d="M75.578 42.814A33.411 33.411 0 0 0 66.913 40c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.628a27.5 27.5 0 0 0 2.276-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.879.719a22.028 22.028 0 0 1-3.591 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.818-6.243-25.155ZM54.023 62.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#3531E7" d="M40 40h47.999v47.998H40z" />
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
            d="M74.578 41.814A33.411 33.411 0 0 0 65.913 39c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.628a27.5 27.5 0 0 0 2.276-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.719 6.91 3.341 14.419 3.341 21.247 0 .287.248.581.489.879.719a22.028 22.028 0 0 1-3.591 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.818-6.243-25.155ZM53.023 61.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#3531E7" d="M39 39h47.999v47.998H39z" />
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
            d="M70.578 37.814A33.411 33.411 0 0 0 61.913 35c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.628a27.5 27.5 0 0 0 2.276-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.879.718a22.028 22.028 0 0 1-3.591 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM49.023 57.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#3531E7" d="M35 35h47.999v47.998H35z" />
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
            d="M66.578 33.814A33.411 33.411 0 0 0 57.913 31c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.628a27.5 27.5 0 0 0 2.276-3.874 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM45.023 53.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#3531E7" d="M31 31h47.999v47.998H31z" />
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
            d="M64.578 31.814A33.411 33.411 0 0 0 55.913 29c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.627a27.5 27.5 0 0 0 2.276-3.873 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM43.023 51.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#3531E7" d="M29 29h47.999v47.998H29z" />
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
            d="M62.578 29.814A33.411 33.411 0 0 0 53.913 27c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.627a27.5 27.5 0 0 0 2.276-3.873 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM41.023 49.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#3531E7" d="M27 27h47.999v47.998H27z" />
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
            d="M61.578 28.814A33.411 33.411 0 0 0 52.913 26c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.627a27.5 27.5 0 0 0 2.276-3.873 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM40.023 48.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#3531E7" d="M26 26h47.999v47.998H26z" />
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
            d="M60.578 27.814A33.411 33.411 0 0 0 51.913 25c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.627a27.5 27.5 0 0 0 2.276-3.873 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM39.023 47.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#3531E7" d="M25 25h47.999v47.998H25z" />
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
            d="M60.078 27.314a33.411 33.411 0 0 0-8.665-2.814c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.627a27.5 27.5 0 0 0 2.276-3.873 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM38.523 47.406c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#3531E7" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            d="M59.578 26.814A33.411 33.411 0 0 0 50.913 24c-.373.697-.81 1.635-1.11 2.382a30.799 30.799 0 0 0-9.603 0c-.3-.747-.747-1.685-1.123-2.382a33.301 33.301 0 0 0-8.672 2.821c-5.483 8.564-6.97 16.915-6.227 25.148 3.637 2.807 7.162 4.512 10.628 5.627a27.5 27.5 0 0 0 2.276-3.873 22.082 22.082 0 0 1-3.585-1.803c.301-.23.595-.47.88-.718 6.91 3.34 14.419 3.34 21.247 0 .287.247.581.488.878.718a22.028 22.028 0 0 1-3.59 1.806 27.371 27.371 0 0 0 2.276 3.874c3.468-1.116 6.996-2.82 10.633-5.631.873-9.544-1.49-17.819-6.243-25.155ZM38.023 46.906c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.111 0 3.812 2.002 3.776 4.443.003 2.437-1.665 4.439-3.776 4.439Zm13.954 0c-2.075 0-3.776-2.002-3.776-4.44 0-2.437 1.665-4.442 3.776-4.442 2.11 0 3.812 2.002 3.776 4.443 0 2.437-1.665 4.439-3.776 4.439Z"
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
        Discord
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#FBFBFB"
        style={{ fontFamily: "sans-serif", fontSize: 14, fontWeight: 300 }}
      >
        {`@${children}`}
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
            result="effect1_foregroundBlur_1_25912"
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
            result="effect1_dropShadow_1_25912"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_25912"
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
          <feColorMatrix values="0 0 0 0 0.435294 0 0 0 0 0.478431 0 0 0 0 0.988235 0 0 0 1 0" />
          <feBlend in2="shape" result="effect1_innerShadow_1_25912" />
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
            in2="effect1_innerShadow_1_25912"
            result="effect2_innerShadow_1_25912"
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
          <stop stop-color="#6F7AFC" />
          <stop offset="1" stop-color="#4554EE" />
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
          <stop offset="1" stop-color="#CBCAFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
