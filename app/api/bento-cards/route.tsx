import { BentoCard } from "@/components/bento-cards/BentoCard";
import {
  roundedSizeSchema,
  sizeSchema,
} from "@/components/bento-cards/BentoCardLayout";
import { supportedSocialMediaSchema } from "@/const/bento-cards";
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest) {
  const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

  const validationSchema = z.object({
    social_media: supportedSocialMediaSchema,
    url: z.string().url(),
    rounded: roundedSizeSchema,
    size: sizeSchema,
  });
  const { data, error } = validationSchema.safeParse(searchParams);
  console.log("error", error);
  if (error) {
    return new Response(
      JSON.stringify({ errors: error.flatten().fieldErrors }),
      {
        status: 400,
      }
    );
  }
  const { social_media, url, rounded, size } = data;
  console.log("social_media", social_media);
  console.log("url", url);
  const width = size === "wide" ? 384 : size === "tall" ? 176 : 176;
  const height = size === "wide" ? 176 : size === "tall" ? 384 : 176;

  return new ImageResponse(
    (
      <BentoCard
        socialMedia={social_media}
        href={url}
        roundedSize={rounded}
        size={size}
      />
    ),
    {
      width,
      height,
    }
  );
}
