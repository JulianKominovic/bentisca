import BentoCard from "@/components/BentoCard";
import ThanksBentisca from "@/components/ThanksBentoCard";
import { roundedSizeSchema, sizeSchema } from "@/const/bento-cards";
import { NextRequest } from "next/server";
import { z } from "zod";
// import sharp from "sharp";

export async function GET(req: NextRequest) {
  const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

  const validationSchema = z.object({
    rounded: roundedSizeSchema,
    size: sizeSchema,
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
  const { rounded = 24, size } = data;

  const ReactDOMServer = (await import("react-dom/server")).default;
  const Component = <ThanksBentisca rounded={rounded} size={size} />;

  const svgString = ReactDOMServer.renderToStaticMarkup(Component);
  return new Response(svgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
