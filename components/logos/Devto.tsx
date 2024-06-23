import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";

export default function DevtoLogo({
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
            d="M85.653 90.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .624-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM108.472 76H79.528A3.528 3.528 0 0 0 76 79.52v28.96a3.528 3.528 0 0 0 3.528 3.52h28.944a3.528 3.528 0 0 0 3.528-3.52V79.52a3.528 3.528 0 0 0-3.528-3.52Zm-20.08 20.828c0 1.511-.934 3.801-3.887 3.797h-3.729V87.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H92.2v3.088h2.617v2.376H92.2v3.086h4.282v2.376h-4.996a1.623 1.623 0 0 1-1.665-1.582V88.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.328 9.265c-1.061 2.471-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138h2.618l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#d)" mask="url(#c)">
          <path fill="#B7B7B7" d="M76 76h47.999v47.998H76z" />
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
            d="M81.653 86.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .624-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM104.472 72H75.528A3.528 3.528 0 0 0 72 75.52v28.96a3.528 3.528 0 0 0 3.528 3.52h28.944a3.528 3.528 0 0 0 3.528-3.52V75.52a3.528 3.528 0 0 0-3.528-3.52Zm-20.08 20.828c0 1.511-.934 3.801-3.887 3.797h-3.729V83.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H88.2v3.088h2.617v2.376H88.2v3.086h4.282v2.376h-4.996a1.624 1.624 0 0 1-1.665-1.582V84.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.328 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138h2.618l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#g)" mask="url(#f)">
          <path fill="#B7B7B7" d="M72 72h47.999v47.998H72z" />
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
            d="M77.653 82.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .624-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM100.472 68H71.528A3.528 3.528 0 0 0 68 71.52v28.96a3.528 3.528 0 0 0 3.528 3.52h28.944a3.528 3.528 0 0 0 3.528-3.52V71.52a3.528 3.528 0 0 0-3.528-3.52Zm-20.08 20.828c0 1.511-.934 3.801-3.887 3.797h-3.729V79.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H84.2v3.088h2.617v2.376H84.2v3.086h4.282v2.376h-4.996a1.624 1.624 0 0 1-1.665-1.582V80.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.328 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H99.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#j)" mask="url(#i)">
          <path fill="#B7B7B7" d="M68 68h47.999v47.998H68z" />
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
            d="M73.653 78.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .624-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM96.472 64H67.527A3.528 3.528 0 0 0 64 67.52v28.96a3.528 3.528 0 0 0 3.528 3.52h28.944A3.528 3.528 0 0 0 100 96.48V67.52A3.528 3.528 0 0 0 96.472 64ZM76.39 84.828c0 1.511-.933 3.801-3.886 3.797h-3.729V75.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H80.2v3.088h2.617v2.376H80.2v3.086h4.282v2.376h-4.996a1.624 1.624 0 0 1-1.665-1.582V76.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H95.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#m)" mask="url(#l)">
          <path fill="#B7B7B7" d="M64 64h47.999v47.998H64z" />
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
            d="M65.653 70.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .624-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM88.472 56H59.527A3.528 3.528 0 0 0 56 59.52v28.96A3.528 3.528 0 0 0 59.528 92h28.944A3.528 3.528 0 0 0 92 88.48V59.52A3.528 3.528 0 0 0 88.472 56ZM68.39 76.828c0 1.511-.933 3.801-3.886 3.797h-3.729V67.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H72.2v3.088h2.617v2.376H72.2v3.086h4.282v2.376h-4.996a1.624 1.624 0 0 1-1.665-1.582V68.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H87.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#p)" mask="url(#o)">
          <path fill="#B7B7B7" d="M56 56h47.999v47.998H56z" />
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
            d="M57.653 62.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM80.472 48H51.527A3.528 3.528 0 0 0 48 51.52v28.96A3.528 3.528 0 0 0 51.528 84h28.944A3.528 3.528 0 0 0 84 80.48V51.52A3.528 3.528 0 0 0 80.472 48ZM60.39 68.828c0 1.511-.933 3.801-3.886 3.797h-3.729V59.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H64.2v3.088h2.617v2.376H64.2v3.086h4.282v2.376h-4.996a1.624 1.624 0 0 1-1.665-1.582V60.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H79.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#s)" mask="url(#r)">
          <path fill="#B7B7B7" d="M48 48h47.999v47.998H48z" />
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
            d="M49.653 54.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM72.472 40H43.527A3.528 3.528 0 0 0 40 43.52v28.96A3.528 3.528 0 0 0 43.528 76h28.944A3.528 3.528 0 0 0 76 72.48V43.52A3.528 3.528 0 0 0 72.472 40ZM52.39 60.828c0 1.511-.933 3.801-3.886 3.797h-3.729V51.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H56.2v3.088h2.617v2.376H56.2v3.086h4.282v2.376h-4.996a1.624 1.624 0 0 1-1.665-1.582V52.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H71.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#v)" mask="url(#u)">
          <path fill="#B7B7B7" d="M40 40h47.999v47.998H40z" />
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
            d="M48.653 53.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM71.472 39H42.527A3.528 3.528 0 0 0 39 42.52v28.96A3.528 3.528 0 0 0 42.528 75h28.944A3.528 3.528 0 0 0 75 71.48V42.52A3.528 3.528 0 0 0 71.472 39ZM51.39 59.828c0 1.511-.933 3.801-3.886 3.797h-3.729V50.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H55.2v3.088h2.617v2.376H55.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V51.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H70.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#y)" mask="url(#x)">
          <path fill="#B7B7B7" d="M39 39h47.999v47.998H39z" />
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
            d="M44.653 49.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM67.472 35H38.527A3.528 3.528 0 0 0 35 38.52v28.96A3.528 3.528 0 0 0 38.528 71h28.944A3.528 3.528 0 0 0 71 67.48V38.52A3.528 3.528 0 0 0 67.472 35ZM47.39 55.828c0 1.511-.933 3.801-3.886 3.797h-3.729V46.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H51.2v3.088h2.617v2.376H51.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V47.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H66.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#B)" mask="url(#A)">
          <path fill="#B7B7B7" d="M35 35h47.999v47.998H35z" />
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
            d="M40.653 45.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM63.473 31H34.527A3.528 3.528 0 0 0 31 34.52v28.96A3.528 3.528 0 0 0 34.528 67h28.944A3.528 3.528 0 0 0 67 63.48V34.52A3.528 3.528 0 0 0 63.472 31ZM43.39 51.828c0 1.511-.933 3.801-3.886 3.797h-3.729V42.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H47.2v3.088h2.617v2.376H47.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V43.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H62.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#E)" mask="url(#D)">
          <path fill="#B7B7B7" d="M31 31h47.999v47.998H31z" />
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
            d="M38.653 43.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM61.473 29H32.527A3.528 3.528 0 0 0 29 32.52v28.96A3.528 3.528 0 0 0 32.528 65h28.944A3.528 3.528 0 0 0 65 61.48V32.52A3.528 3.528 0 0 0 61.472 29ZM41.39 49.828c0 1.511-.933 3.801-3.886 3.797h-3.729V40.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H45.2v3.088h2.617v2.376H45.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V41.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H60.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#H)" mask="url(#G)">
          <path fill="#B7B7B7" d="M29 29h47.999v47.998H29z" />
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
            d="M36.653 41.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM59.473 27H30.527A3.528 3.528 0 0 0 27 30.52v28.96A3.528 3.528 0 0 0 30.528 63h28.944A3.528 3.528 0 0 0 63 59.48V30.52A3.528 3.528 0 0 0 59.472 27ZM39.39 47.828c0 1.511-.933 3.801-3.886 3.797h-3.729V38.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H43.2v3.088h2.617v2.376H43.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V39.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H58.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#K)" mask="url(#J)">
          <path fill="#B7B7B7" d="M27 27h47.999v47.998H27z" />
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
            d="M35.653 40.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM58.473 26H29.527A3.528 3.528 0 0 0 26 29.52v28.96A3.528 3.528 0 0 0 29.528 62h28.944A3.528 3.528 0 0 0 62 58.48V29.52A3.528 3.528 0 0 0 58.472 26ZM38.39 46.828c0 1.511-.933 3.801-3.886 3.797h-3.729V37.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H42.2v3.088h2.617v2.376H42.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V38.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H57.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#N)" mask="url(#M)">
          <path fill="#B7B7B7" d="M26 26h47.999v47.998H26z" />
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
            d="M34.653 39.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM57.473 25H28.527A3.528 3.528 0 0 0 25 28.52v28.96A3.528 3.528 0 0 0 28.528 61h28.944A3.528 3.528 0 0 0 61 57.48V28.52A3.528 3.528 0 0 0 57.472 25ZM37.39 45.828c0 1.511-.933 3.801-3.886 3.797h-3.729V36.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H41.2v3.088h2.617v2.376H41.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V37.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H56.9l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#Q)" mask="url(#P)">
          <path fill="#B7B7B7" d="M25 25h47.999v47.998H25z" />
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
            d="M34.153 38.666c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM56.973 24.5H28.027a3.528 3.528 0 0 0-3.528 3.52v28.96a3.528 3.528 0 0 0 3.528 3.52h28.944a3.528 3.528 0 0 0 3.528-3.52V28.02a3.528 3.528 0 0 0-3.528-3.52ZM36.89 45.328c0 1.511-.933 3.801-3.886 3.797h-3.729V35.829h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H40.7v3.088h2.617v2.376H40.7v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V37.494a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H56.4l-3.09 11.636Z"
            fill="#fff"
          />
        </mask>
        <g filter="url(#T)" mask="url(#S)">
          <path fill="#B7B7B7" d="M24.5 24.5h47.999v47.998H24.5z" />
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
            d="M33.653 38.166c-.312-.233-.625-.35-.937-.35h-1.401v8.395h1.402c.312 0 .625-.116.936-.349.312-.233.468-.583.468-1.05v-5.596c0-.466-.157-.817-.468-1.05ZM56.473 24H27.527A3.528 3.528 0 0 0 24 27.52v28.96A3.528 3.528 0 0 0 27.528 60h28.944A3.528 3.528 0 0 0 60 56.48V27.52A3.528 3.528 0 0 0 56.472 24ZM36.39 44.828c0 1.511-.933 3.801-3.886 3.797h-3.729V35.329h3.808c2.848 0 3.805 2.287 3.806 3.799l.001 5.7Zm8.09-7.125H40.2v3.088h2.617v2.376H40.2v3.086h4.282v2.377h-4.996a1.624 1.624 0 0 1-1.665-1.583V36.994a1.625 1.625 0 0 1 1.584-1.663h5.077v2.372Zm8.329 9.265c-1.061 2.47-2.962 1.979-3.813 0l-3.096-11.636h2.618l2.387 9.138 2.376-9.138H55.9l-3.09 11.636Z"
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
        fill="#353535"
        style={{
          fontFamily: "sans-serif",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        DEV Community
      </text>

      <text
        y={height - 24}
        x={24}
        fill="#353535"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
            result="effect1_foregroundBlur_70_12795"
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
            result="effect1_dropShadow_70_12795"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_70_12795"
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
          <feBlend in2="shape" result="effect1_innerShadow_70_12795" />
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
            in2="effect1_innerShadow_70_12795"
            result="effect2_innerShadow_70_12795"
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
          <stop stop-color="#FBFBFC" />
          <stop offset="1" stop-color="#DBDBDB" />
        </linearGradient>
        <linearGradient
          id="W"
          x1="48"
          y1="24"
          x2="48"
          y2="71.998"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#33353A" />
          <stop offset="1" stop-color="#212427" />
        </linearGradient>
      </defs>
    </svg>
  );
}
