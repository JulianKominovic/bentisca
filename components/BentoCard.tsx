import {
  BentoLogoProps,
  getSocialMediaByUrl,
  getUsernameByUrl,
} from "@/const/bento-cards";
import BehanceLogo from "./logos/Behance";
import Coffee from "./logos/Coffee";
import DevtoLogo from "./logos/Devto";
import Discord from "./logos/Discord";
import Dribbble from "./logos/Dribbble";

export default function BentoCard({
  url,
  rounded,
  size,
}: BentoLogoProps & { url: string }) {
  const socialMedia = getSocialMediaByUrl(url);
  const username = getUsernameByUrl(url);
  if (!socialMedia || !username) return null;
  switch (socialMedia) {
    case "Behance":
      return (
        <BehanceLogo rounded={rounded} size={size}>
          {username}
        </BehanceLogo>
      );
    case "Coffee":
      return (
        <Coffee rounded={rounded} size={size}>
          {username}
        </Coffee>
      );
    case "Dev.to":
      return (
        <DevtoLogo rounded={rounded} size={size}>
          {username}
        </DevtoLogo>
      );
    case "Discord":
      return (
        <Discord rounded={rounded} size={size}>
          {username}
        </Discord>
      );
    case "Dribbble":
      return (
        <Dribbble rounded={rounded} size={size}>
          {username}
        </Dribbble>
      );
    default:
      return null;
  }
}
