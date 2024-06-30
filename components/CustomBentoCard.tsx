import { IMAGE_SCALE_FACTOR } from "@/const";
import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";

export default function CustomBentoCard({
  size,
  rounded,
  subtitle,
  imageSrc,
  title,
  colors,
}: Omit<BentoLogoProps, "children"> & {
  subtitle?: string;
  imageSrc?: string;
  title: string;
  colors: {
    backgroundColor: string;
    darkerColor: string;
    foregroundColor: string;
  };
}) {
  const { height, width } = getBentoCardSizes(size);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        position: "relative",
        transform: `scale(${IMAGE_SCALE_FACTOR})`,
        transformOrigin: "top left",
        width,
        height,
        backgroundImage: `linear-gradient(45deg, ${colors.backgroundColor}, ${colors.darkerColor})`,
        borderRadius: rounded,
      }}
    >
      <img
        width={32}
        height={32}
        src={imageSrc}
        alt={subtitle ?? "Bento card"}
        style={{
          width: "32px",
          height: "32px",
          position: "absolute",
          top: "16px",
          left: "16px",
          objectFit: "scale-down",
          borderRadius: "8px",
        }}
      />

      <h1
        style={{
          color: colors.foregroundColor,
          fontSize: "18px",
          fontWeight: 900,
          margin: "16px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </h1>
      <p>{subtitle}</p>

      {/* <img
        width={48}
        height={48}
        src={logoUrl}
        alt={subtitle ?? "Bento card"}
        style={{
          width: "48px",
          height: "48px",
          position: "absolute",
          top: "8px",
          left: "8px",
          objectFit: "cover",
          borderRadius: "50%",
          filter: "blur(30px)",
        }}
      /> */}
    </div>
  );
}
