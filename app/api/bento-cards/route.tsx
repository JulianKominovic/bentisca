import BentoCard from "@/components/BentoCard";
import { roundedSizeSchema, sizeSchema } from "@/const/bento-cards";
import { NextRequest } from "next/server";
import { z } from "zod";
import sharp from "sharp";

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
  const Component = (
    <BentoCard url={url} rounded={rounded} size={size} subtitle={subtitle} />
  );
  if (Component === null) {
    return new Response(JSON.stringify({ errors: { url: "Invalid url" } }), {
      status: 400,
    });
  }
  const svgString = ReactDOMServer.renderToStaticMarkup(Component);

  const imageBuffer = await sharp(Buffer.from(svgString), { density: 400 })
    .avif()
    .toBuffer();

  return new Response(imageBuffer, {
    headers: {
      "Content-Type": "image/avif",
      // cache forever
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
