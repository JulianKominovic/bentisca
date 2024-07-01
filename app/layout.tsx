import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "🍱 Bentisca - Beatiful bento cards for your readme",
  description:
    "22 handcrafted social media bento cards thanks to Double Glitch's figma design and +3150 dynamic card icons using SimpleIcons.",
  manifest: "/manifest.json",
  keywords: [
    "social media",
    "cards",
    "bento",
    "card",
    "bento cards",
    "Beautiful",
    "cards playground",
  ],
  twitter: {
    card: "summary_large_image",
    creator: "@juliankominovic",
    description:
      "22 handcrafted social media bento cards thanks to Double Glitch's figma design and +3150 dynamic card icons using SimpleIcons.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bentisca - Beatiful bento cards for your readme",
      },
    ],
  },
  authors: [{ name: "Julian Kominovic" }],
  category: "Social Media",
  openGraph: {
    authors: ["Julian Kominovic"],
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bentisca - Beatiful bento cards for your readme",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-neutral-50")}>
        {children}
        <footer className="px-8 py-16 bg-white">
          <div className="max-w-screen-md mx-auto">
            <p className="mb-4">
              <span className="text-2xl">🍱</span>
              <span className="text-xl font-semibold"> Bentisca</span>
            </p>
            <p>
              Created by{" "}
              <a
                href="https://github.com/JulianKominovic"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                Julian Kominovic
              </a>{" "}
              using{" "}
              <a
                href="https://www.figma.com/community/file/1232620929235403629"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                {"Double Glitch's Figma design"}
              </a>{" "}
              and{" "}
              <a
                href="https://simpleicons.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2"
              >
                SimpleIcons library
              </a>
            </p>
            <div className="flex flex-wrap items-center gap-4"></div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
