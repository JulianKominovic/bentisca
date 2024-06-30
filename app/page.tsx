import {
  BentoLogoProps,
  getBentoCardSizes,
  SIZES,
  supportedSocialMedia,
  supportedSocialMediaIcons,
} from "@/const/bento-cards";
import Image from "next/image";
import { setBentoSettings } from "./actions/bento-try";
import CopyButton from "@/components/Copy";
import BentoCardsApiDocs from "@/fragments/landing/docs/bento-cards-api";
import GenericCardsApi from "@/fragments/landing/docs/generic-cards-api";
import BentoCardsPlayground from "@/fragments/landing/playground/bento-cards-playground";
import GenericCardsPlayground from "@/fragments/landing/playground/dynamic-cards-playground";

export default function Home({ searchParams }: any) {
  return (
    <main className="max-w-screen-lg min-h-screen gap-8 px-4 pt-24 pb-8 mx-auto overflow-x-hidden sm:p-12">
      <section className="mb-8">
        <p className="mb-6 text-center text-8xl">🍱</p>
        <h1 className="text-5xl font-semibold text-center">
          Beatiful bento cards for your readme
        </h1>
        <p className="mt-4 text-center text-black/60">
          22 handcrafted social media bento cards thanks to{" "}
          <a
            href="https://www.figma.com/@double_glitch"
            className="underline underline-offset-2"
            target="_blank"
          >
            {"Double Glitch's"}
          </a>{" "}
          figma design and +3150 dynamic card icons using SimpleIcons.
        </p>
      </section>
      <ul className="flex flex-wrap justify-center gap-4 mb-24">
        {supportedSocialMedia.map((social) => {
          const icon = supportedSocialMediaIcons[social] as any;
          return (
            <li key={social} className="flex items-center gap-2 text-xl">
              {icon && icon.path ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                >
                  <path d={icon.path} />
                </svg>
              ) : (
                icon
              )}
            </li>
          );
        })}
        <li className="px-2 bg-white border rounded-md border-black/10">
          <a
            href="https://simpleicons.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            +3150~ dynamic card icons
          </a>
        </li>
      </ul>
      <BentoCardsPlayground searchParams={searchParams} />
      <GenericCardsPlayground searchParams={searchParams} />
      <section className="flex flex-col justify-center gap-4 mt-32">
        <h2 className="mb-6 text-2xl font-semibold">Docs</h2>
        <BentoCardsApiDocs />
        <GenericCardsApi />
      </section>
    </main>
  );
}
