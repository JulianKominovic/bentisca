import clsx from "clsx";
import BentoCardLayout, { BentoCardLayoutProps } from "./BentoCardLayout";
import { BENTO_CARDS, type SupportedSocialMedia } from "@/const/bento-cards";

type BentoCardProps = {
  socialMedia: SupportedSocialMedia;
  href: string;
} & Required<Pick<BentoCardLayoutProps, "size" | "roundedSize">>;

export function BentoCard({
  size,
  roundedSize,
  socialMedia,
  href,
}: BentoCardProps) {
  const socialMediaConfig = BENTO_CARDS[socialMedia];
  if (!socialMediaConfig) {
    throw new Error(
      `Unsupported social media: ${socialMedia}. Add it to BENTO_CARDS in const/bento-cards.tsx`
    );
  }
  return (
    <BentoCardLayout
      linearGradient={socialMediaConfig.linearGradient}
      size={size}
      roundedSize={roundedSize}
    >
      <span
        style={{
          height: "80px",
          position: "absolute",
          top: "24px",
          left: "16px",
        }}
      >
        {socialMediaConfig.logo}
      </span>
      {/* <div
        style={{
          color:
            socialMediaConfig.textColor === "white" ? "#FBFBFB" : "#353535",
        }}
      >
        <h2
          style={{
            fontWeight: 600,
            paddingBlockStart: "64px",
          }}
        >
          {socialMediaConfig.title}
        </h2>
        <p>@{socialMediaConfig.getUserFromUrl(href)}</p>
      </div> */}
    </BentoCardLayout>
  );
}
