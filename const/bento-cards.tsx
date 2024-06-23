import {
  siBehance,
  siBuymeacoffee,
  siDevdotto,
  siDiscord,
  siDribbble,
  siFacebook,
  siFigma,
  siGithub,
  siGitlab,
  siGmail,
  siInstagram,
  SimpleIcon,
} from "simple-icons";
import { z } from "zod";

export const supportedSocialMedia = [
  "Behance",
  "Coffee",
  "Dev.to",
  "Discord",
  "Dribbble",
  "Email",
  "Facebook",
  "Figma",
  "Gitlab",
  "Github",
  "Instagram",
] as const;
export const supportedSocialMediaIcons: Record<
  SupportedSocialMedia,
  SimpleIcon
> = {
  "Dev.to": siDevdotto,
  Discord: siDiscord,
  Dribbble: siDribbble,
  Email: siGmail,
  Facebook: siFacebook,
  Figma: siFigma,
  Github: siGithub,
  Instagram: siInstagram,
  Behance: siBehance,
  Coffee: siBuymeacoffee,
  Gitlab: siGitlab,
};
export const supportedSocialMediaSchema = z.enum(supportedSocialMedia);
export type SupportedSocialMedia = z.infer<typeof supportedSocialMediaSchema>;

export const sizeSchema = z.enum(["square", "wide", "tall"]).optional();
export type Size = z.infer<typeof sizeSchema>;
export const roundedSizeSchema = z
  .number()
  .min(0)
  .max(9999)
  .optional()
  .or(z.enum(["50%"]))
  .optional();
export type RoundedSize = z.infer<typeof roundedSizeSchema>;

export type BentoLogoProps = {
  size: Size;
  rounded?: RoundedSize;
  children?: string;
};

export const getBentoCardSizes = (
  size: "square" | "wide" | "tall" = "square"
) => {
  switch (size) {
    case "square":
      return { width: 176, height: 176 };
    case "wide":
      return { width: 384, height: 176 };
    case "tall":
      return { width: 176, height: 384 };
    default:
      return { width: 176, height: 176 };
  }
};

export const getSocialMediaByUrl = (
  url: string
): SupportedSocialMedia | undefined => {
  if (!URL.canParse(url)) {
    if (url.includes("@")) {
      return "Email";
    }
  }
  const urlObject = new URL(url);
  const hostname = urlObject.hostname;
  if (hostname.includes("behance")) {
    return "Behance";
  }
  if (hostname.includes("buymeacoffee")) {
    return "Coffee";
  }
  if (hostname.includes("dev.to")) {
    return "Dev.to";
  }
  if (hostname.includes("discord")) {
    return "Discord";
  }
  if (hostname.includes("dribbble")) {
    return "Dribbble";
  }
  if (hostname.includes("facebook")) {
    return "Facebook";
  }
  if (hostname.includes("figma")) {
    return "Figma";
  }
  if (hostname.includes("gitlab")) {
    return "Gitlab";
  }
  if (hostname.includes("github")) {
    return "Github";
  }
  if (hostname.includes("instagram")) {
    return "Instagram";
  }
};

export const getSubtitleByUrl = (url: string) => {
  if (!URL.canParse(url)) return url;
  const urlObject = new URL(url);
  const pathname = urlObject.pathname;
  const socialMedia = getSocialMediaByUrl(url);
  switch (socialMedia) {
    case "Behance":
    case "Coffee":
    case "Dev.to":
    case "Dribbble":
    case "Facebook":
    case "Instagram":
      return "@" + pathname.split("/")[1];
    case "Figma":
      return pathname.split("/")[1];
    case "Gitlab":
    case "Github":
      return pathname.split("/").slice(1, 3).join("/");
    case "Discord":
      if (urlObject.pathname.includes("/invite/")) {
        return urlObject.pathname.split("/")[2];
      }
      return urlObject.pathname.split("/")[1];
    default:
      return url;
  }
};
