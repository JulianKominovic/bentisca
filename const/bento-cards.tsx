import { type BentoCardLayoutProps } from "@/components/bento-cards/BentoCardLayout";
import BehanceLogo from "@/components/logos/Behance";
import { z } from "zod";
import { DOCS_URL } from ".";

type BentoConfig = {
  linearGradient: BentoCardLayoutProps["linearGradient"];
  title: string;
  logo: any;
  textColor: "white" | "black";
  getUserFromUrl: (url: string) => string;
};
export const supportedSocialMediaSchema = z.enum(["Behance"]);
export type SupportedSocialMedia = z.infer<typeof supportedSocialMediaSchema>;

export const BENTO_CARDS: Record<SupportedSocialMedia, BentoConfig> = {
  Behance: {
    logo: <BehanceLogo />,
    linearGradient: "linear-gradient(135deg, #0075FF 0%, #6539FF 100%)",
    title: "Behance",
    getUserFromUrl: (url: string) => new URL(url).pathname.split("/")[1],
    textColor: "white",
  },
};
