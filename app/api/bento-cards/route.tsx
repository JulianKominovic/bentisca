import BentoCard from "@/components/BentoCard";
import {
  getBentoCardSizes,
  roundedSizeSchema,
  sizeSchema,
} from "@/const/bento-cards";
import { NextRequest } from "next/server";
import { z } from "zod";
import sharp from "sharp";

import { optimize } from "svgo";

export async function GET(req: NextRequest) {
  const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

  const validationSchema = z.object({
    url: z.string(),
    rounded: roundedSizeSchema,
    size: sizeSchema,
    subtitle: z.string().optional(),
  });
  const { data, error } = validationSchema.safeParse(searchParams);
  if (error) {
    return new Response(
      JSON.stringify({ errors: error.flatten().fieldErrors }),
      {
        status: 400,
      }
    );
  }
  const { url, rounded = 24, size, subtitle } = data;
  const ReactDOMServer = (await import("react-dom/server")).default;
  const svgString = ReactDOMServer.renderToStaticMarkup(
    <BentoCard url={url} rounded={rounded} size={size} subtitle={subtitle} />
  );

  // const png = await sharp(Buffer.from(svgString), { density: 400 })
  //   .webp()
  //   .toBuffer();
  return new Response(svgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      // "Content-Type": "image/webp",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
