import GenericBento from "@/components/GenericBento";
import { roundedSizeSchema, sizeSchema } from "@/const/bento-cards";
import { NextRequest } from "next/server";
import { z } from "zod";
import * as SimpleIcons from "simple-icons";

export async function GET(req: NextRequest) {
  const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());

  const validationSchema = z.object({
    icon: z.string().startsWith("si", {
      message:
        "Icon name must start with 'si'. For example: Next.js icon is 'siNextdotjs', Google icon is 'siGoogle', Discord icon is 'siDiscord'. See https://simpleicons.org/ to list all available icons.",
    }),
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
  const { icon: iconName, rounded = 24, size, subtitle } = data;
  const sanitizedIconName =
    iconName.slice(0, 2) + iconName.at(2)?.toUpperCase() + iconName.slice(3);
  const icon: SimpleIcons.SimpleIcon = (SimpleIcons as any)[sanitizedIconName];
  if (!icon) {
    return new Response(
      JSON.stringify({
        errors: {
          icon: "Invalid icon. See https://simpleicons.org/ to list all available icons.",
        },
      }),
      {
        status: 400,
      }
    );
  }

  const ReactDOMServer = (await import("react-dom/server")).default;
  const Component = (
    <GenericBento icon={icon} rounded={rounded} size={size}>
      {subtitle}
    </GenericBento>
  );

  const svgString = ReactDOMServer.renderToStaticMarkup(Component);
  return new Response(svgString, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
