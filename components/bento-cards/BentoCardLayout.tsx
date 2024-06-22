import { z } from "zod";

export const sizeSchema = z.enum(["square", "wide", "tall"]).optional();
type Size = z.infer<typeof sizeSchema>;
export const roundedSizeSchema = z
  .enum(["none", "small", "medium", "large"])
  .optional();
type RoundedSize = z.infer<typeof roundedSizeSchema>;

export type BentoCardLayoutProps = {
  children: React.ReactNode;
  linearGradient: string;
  size: Size;
  roundedSize: RoundedSize;
} & React.ComponentProps<"div">;

export default function BentoCardLayout({
  children,
  linearGradient,
  size = "square",
  roundedSize = "large",
  ...rest
}: BentoCardLayoutProps) {
  return (
    <div
      style={{
        backgroundImage: linearGradient,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingTop: "24px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingBottom: "16px",
        position: "relative",
        textDecoration: "none",
        width: size === "wide" ? "384px" : size === "tall" ? "176px" : "176px",
        height: size === "wide" ? "176px" : size === "tall" ? "384px" : "176px",
        borderRadius:
          roundedSize === "none"
            ? "0"
            : roundedSize === "small"
            ? "0.25rem"
            : roundedSize === "medium"
            ? "0.375rem"
            : roundedSize === "large"
            ? "0.5rem"
            : "1.125rem",
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
