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
  siLinkedin,
  siMedium,
  SimpleIcon,
  siPinterest,
  siReaddotcv,
  siReddit,
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
  "Layers",
  "Linkedin",
  "Medium",
  "Pinterest",
  "Reddit",
  "Read.cv",
] as const;
export const supportedSocialMediaIcons: Record<
  SupportedSocialMedia,
  SimpleIcon | React.ReactNode
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
  Layers: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="1em"
      width="1em"
      viewBox="0 0 32 33"
    >
      <path
        fill="currentColor"
        fill-opacity=".2"
        d="M0 18.83.08 6.832C.094 4.66 1.613 2.798 3.71 2.383L15.297.086c2.784-.552 5.368 1.627 5.35 4.51l-.08 12c-.015 2.171-1.534 4.032-3.631 4.448L5.349 23.341C2.565 23.893-.019 21.714 0 18.83z"
      />
      <path
        fill="currentColor"
        fill-opacity=".5"
        d="m5.677 23.617.08-12c.013-2.17 1.533-4.031 3.63-4.447l11.587-2.296c2.784-.552 5.368 1.626 5.349 4.51l-.08 12c-.014 2.171-1.533 4.032-3.63 4.448l-11.587 2.297c-2.784.551-5.368-1.627-5.349-4.51z"
      />
      <path
        fill="currentColor"
        fill-opacity=".8"
        d="m11.354 28.404.08-12c.014-2.172 1.533-4.032 3.63-4.448l11.587-2.297c2.784-.552 5.368 1.627 5.349 4.51l-.08 12c-.014 2.172-1.533 4.033-3.63 4.448l-11.587 2.297c-2.784.552-5.368-1.627-5.35-4.51z"
      />
    </svg>
  ),
  Linkedin: siLinkedin,
  Medium: siMedium,
  Pinterest: siPinterest,
  Reddit: siReddit,
  "Read.cv": siReaddotcv,
};
export const supportedSocialMediaSchema = z.enum(supportedSocialMedia);
export type SupportedSocialMedia = z.infer<typeof supportedSocialMediaSchema>;

export const sizeSchema = z.enum(["square", "wide", "tall"]).optional();
export type Size = z.infer<typeof sizeSchema>;
export const roundedSizeSchema = z.coerce.number().min(0).max(9999).optional();
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
  if (hostname.includes("layers.to")) {
    return "Layers";
  }
  if (hostname.includes("linkedin")) {
    return "Linkedin";
  }
  if (hostname.includes("medium")) {
    return "Medium";
  }
  if (hostname.includes("pinterest")) {
    return "Pinterest";
  }
  if (hostname.includes("reddit")) {
    return "Reddit";
  }
  if (hostname.includes("read.cv")) {
    return "Read.cv";
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
    case "Layers":
    case "Pinterest":
    case "Read.cv":
      return "@" + pathname.split("/")[1];
    case "Linkedin":
      return "@" + pathname.split("/")[2];
    case "Figma":
    case "Medium":
      return pathname.split("/")[1];
    case "Gitlab":
    case "Github":
    case "Reddit":
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
