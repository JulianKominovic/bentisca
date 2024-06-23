import BentoCard from "@/components/BentoCard";
import { roundedSizeSchema, sizeSchema } from "@/const/bento-cards";
import { NextRequest } from "next/server";
import { z } from "zod";

import { optimize } from "svgo";

export async function GET(req: NextRequest) {
  const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

  const validationSchema = z.object({
    url: z.string().url(),
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
  const { url, rounded, size } = data;
  const ReactDOMServer = (await import("react-dom/server")).default;
  const svgString = ReactDOMServer.renderToStaticMarkup(
    <BentoCard url={url} rounded={rounded} size={size}>
      {url}
    </BentoCard>
  );
  const result = optimize(svgString, {
    multipass: true,
  });

  const optimizedSvgString = result.data;

  return new Response(optimizedSvgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=604800, immutable",
    },
  });
}
