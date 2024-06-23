import { z } from "zod";

export const supportedSocialMedia = [
  "Behance",
  "Coffee",
  "Dev.to",
  "Discord",
  "Dribbble",
] as const;
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
  children: string;
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
};

export const getUsernameByUrl = (url: string) => {
  const urlObject = new URL(url);
  const pathname = urlObject.pathname;
  const socialMedia = getSocialMediaByUrl(url);
  switch (socialMedia) {
    case "Behance":
    case "Coffee":
    case "Dev.to":
    case "Dribbble":
      return pathname.split("/")[1];
    case "Discord":
      if (urlObject.pathname.includes("/invite/")) {
        return urlObject.pathname.split("/")[2];
      }
      return urlObject.pathname.split("/")[1];
    default:
      break;
  }
};
