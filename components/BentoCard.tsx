import {
  BentoLogoProps,
  getSocialMediaByUrl,
  getSubtitleByUrl,
} from "@/const/bento-cards";
import BehanceLogo from "./logos/Behance";
import Coffee from "./logos/Coffee";
import DevtoLogo from "./logos/Devto";
import Discord from "./logos/Discord";
import Dribbble from "./logos/Dribbble";
import Email from "./logos/Email";
import Facebook from "./logos/Facebook";
import Figma from "./logos/Figma";
import Gitlab from "./logos/Gitlab";
import Github from "./logos/Github";
import Instagram from "./logos/Instagram";
import Layers from "./logos/Layers";
import Linkedin from "./logos/Linkedin";
import Medium from "./logos/Medium";
import Pinterest from "./logos/Pinterest";
import Reddit from "./logos/Reddit";
import ReadCv from "./logos/Read.cv";
import Tiktok from "./logos/Tiktok";

export default function BentoCard({
  url,
  rounded = 24,
  size,
  subtitle: _subtitle,
}: BentoLogoProps & { url: string; subtitle?: string }) {
  const socialMedia = getSocialMediaByUrl(url);
  const subtitle = _subtitle || getSubtitleByUrl(url);
  if (!socialMedia) return null;
  switch (socialMedia) {
    case "Behance":
      return (
        <BehanceLogo rounded={rounded} size={size}>
          {subtitle}
        </BehanceLogo>
      );
    case "Coffee":
      return (
        <Coffee rounded={rounded} size={size}>
          {subtitle}
        </Coffee>
      );
    case "Dev.to":
      return (
        <DevtoLogo rounded={rounded} size={size}>
          {subtitle}
        </DevtoLogo>
      );
    case "Discord":
      return (
        <Discord rounded={rounded} size={size}>
          {subtitle}
        </Discord>
      );
    case "Dribbble":
      return (
        <Dribbble rounded={rounded} size={size}>
          {subtitle}
        </Dribbble>
      );
    case "Email":
      return (
        <Email rounded={rounded} size={size}>
          {subtitle}
        </Email>
      );
    case "Facebook":
      return (
        <Facebook rounded={rounded} size={size}>
          {subtitle}
        </Facebook>
      );
    case "Figma":
      return (
        <Figma rounded={rounded} size={size}>
          {subtitle}
        </Figma>
      );
    case "Gitlab":
      return (
        <Gitlab rounded={rounded} size={size}>
          {subtitle}
        </Gitlab>
      );
    case "Github":
      return (
        <Github rounded={rounded} size={size}>
          {subtitle}
        </Github>
      );
    case "Instagram":
      return (
        <Instagram rounded={rounded} size={size}>
          {subtitle}
        </Instagram>
      );
    case "Layers":
      return (
        <Layers rounded={rounded} size={size}>
          {subtitle}
        </Layers>
      );
    case "Linkedin":
      return (
        <Linkedin rounded={rounded} size={size}>
          {subtitle}
        </Linkedin>
      );
    case "Medium":
      return (
        <Medium rounded={rounded} size={size}>
          {subtitle}
        </Medium>
      );
    case "Pinterest":
      return (
        <Pinterest rounded={rounded} size={size}>
          {subtitle}
        </Pinterest>
      );
    case "Reddit":
      return (
        <Reddit rounded={rounded} size={size}>
          {subtitle}
        </Reddit>
      );
    case "Read.cv":
      return (
        <ReadCv rounded={rounded} size={size}>
          {subtitle}
        </ReadCv>
      );
    case "Tiktok":
      return (
        <Tiktok rounded={rounded} size={size}>
          {subtitle}
        </Tiktok>
      );

    default:
      return null;
  }
}
