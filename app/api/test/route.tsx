import {
  getBentoCardSizes,
  roundedSizeSchema,
  sizeSchema,
} from "@/const/bento-cards";
import { ImageResponse } from "next/og";
import { z } from "zod";
import CustomBentoCard from "@/components/CustomBentoCard";
import { getWebsiteOgInfo } from "@/utils/scrapping";
import { getBackgroundColorsFromFavicon } from "@/utils/colors";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";
import { IMAGE_SCALE_FACTOR } from "@/const";

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
  const { width, height } = getBentoCardSizes(size);

  const { faviconArrayBuffer, faviconUrl, fileType, title } =
    await getWebsiteOgInfo(url);
  if (!faviconArrayBuffer)
    return new NextResponse("No favicon found", { status: 404 });
  const { backgroundColor, darkerColor } = await getBackgroundColorsFromFavicon(
    Buffer.from(faviconArrayBuffer),
    fileType
  );
  const componentToImage = new ImageResponse(
    (
      <CustomBentoCard
        imageSrc={`data:${fileType};base64,${Buffer.from(
          faviconArrayBuffer
        ).toString("base64")}`}
        title={title}
        colors={{
          backgroundColor,
          darkerColor,
          foregroundColor: "#fff",
        }}
        rounded={rounded}
        size={size}
        subtitle={subtitle}
      />
    ),
    {
      width: width * IMAGE_SCALE_FACTOR,
      height: height * IMAGE_SCALE_FACTOR,
    }
  );
  const imageBuffer = await sharp(await componentToImage.arrayBuffer())
    .resize(width, height)
    .avif()
    .toBuffer();
  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/avif",
    },
  } as ResponseInit);
}
