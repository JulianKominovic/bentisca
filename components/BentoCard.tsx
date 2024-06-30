import {
  BentoLogoProps,
  getBentoCardSizes,
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
import Twitch from "./logos/Twitch";
import Twitter from "./logos/Twitter";
import Youtube from "./logos/Youtube";

export default function BentoCard({
  url,
  rounded = 24,
  size,
  subtitle: _subtitle,
}: BentoLogoProps & { url: string; subtitle?: string }) {
  const socialMedia = getSocialMediaByUrl(url);
  const subtitle = _subtitle || getSubtitleByUrl(url);
  const { width, height } = getBentoCardSizes(size);
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
    case "Twitch":
      return (
        <Twitch rounded={rounded} size={size}>
          {subtitle}
        </Twitch>
      );
    case "Twitter":
    case "X":
      return (
        <Twitter rounded={rounded} size={size}>
          {subtitle}
        </Twitter>
      );
    case "Youtube":
      return (
        <Youtube rounded={rounded} size={size}>
          {subtitle}
        </Youtube>
      );

    default:
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
          <rect
            width="100%"
            height="100%"
            fill="#000"
            rx={rounded}
            ry={rounded}
          />
          <text
            style={{
              fontFamily:
                "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              fontSize: 16,
              fontWeight: 600,
            }}
            x="50%"
            y={height / 2 - 30}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
          >
            Url not supported
          </text>
          <text
            style={{
              fontFamily:
                "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              fontSize: 14,
              fontWeight: 300,
            }}
            x="50%"
            y={height / 2 + 20}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
          >
            See
          </text>
          <text
            style={{
              fontFamily:
                "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              fontSize: 14,
              fontWeight: 300,
            }}
            x="50%"
            y={height / 2 + 35}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
          >
            bentos.jkominovic.dev
          </text>
          <text
            style={{
              fontFamily:
                "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              fontSize: 14,
              fontWeight: 300,
            }}
            x="50%"
            y={height / 2 + 50}
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#fff"
          >
            for information
          </text>
        </svg>
      );
  }
}
