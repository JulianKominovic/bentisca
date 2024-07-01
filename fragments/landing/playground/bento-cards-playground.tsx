import { setBentoSettings } from "@/app/actions/bento-try";
import CopyButton from "@/components/Copy";
import { getBentoCardSizes, SIZES } from "@/const/bento-cards";
import Image from "next/image";
import React from "react";
import GiveCredits from "./give-credits";

type Props = {
  searchParams: any;
};

const BentoCardsPlayground = ({ searchParams }: Props) => {
  const { url, subtitle, size, rounded } = searchParams;

  const urlObject = new URLSearchParams();
  if (url) urlObject.set("url", url);
  if (subtitle) urlObject.set("subtitle", subtitle);
  if (size) urlObject.set("size", size);
  if (rounded) urlObject.set("rounded", rounded);
  const { width, height } = getBentoCardSizes(size);
  const baseApiUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://bentos.jkominovic.dev";
  const generatedUrl =
    baseApiUrl + "/api/v1/bento-cards?" + urlObject.toString();

  const markdownToCopy =
    generatedUrl && url
      ? `[![${subtitle ?? ""}](${generatedUrl})](${url})`
      : "";

  return (
    <section className="my-6">
      <h2 className="mb-6 text-2xl font-semibold underline underline-offset-2">
        <a href="#docs-handcrafted-bentos">Bento social cards playground</a>
      </h2>
      <form
        action={setBentoSettings}
        className="flex flex-col flex-wrap items-end justify-center gap-3 sm:flex-row"
      >
        <label className="flex-grow block w-full sm:w-fit" htmlFor="url">
          URL
          <input
            required
            defaultValue={url}
            className="w-full p-2 border rounded-lg border-black/10"
            type="text"
            name="url"
            id="url"
            placeholder="https://www.behance.net/example_user"
          />
        </label>
        <label className="block w-full sm:w-fit" htmlFor="subtitle">
          Subtitle
          <input
            className="w-full p-2 border rounded-lg border-black/10"
            type="text"
            name="subtitle"
            id="subtitle"
            placeholder="Example user"
            defaultValue={subtitle}
          />
        </label>
        <label className="block w-full sm:w-fit" htmlFor="size">
          Size
          <select
            className="w-full p-2 border rounded-lg border-black/10"
            name="size"
            id="size"
            defaultValue={size}
          >
            {SIZES.map((size) => {
              return (
                <option key={size} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </label>
        <label className="block w-full sm:w-min" htmlFor="rounded">
          Rounded
          <input
            className="w-full p-2 border rounded-lg border-black/10"
            type="number"
            name="rounded"
            min={0}
            max={9999}
            id="rounded"
            placeholder="24"
          />
        </label>
        <button
          className="w-full px-4 py-2 text-white bg-black rounded-lg sm:w-fit"
          type="submit"
        >
          Generate
        </button>
      </form>
      {markdownToCopy && (
        <>
          <h3 className="mt-6 mb-2 font-semibold">
            Markdown
            <span className="ml-2 text-sm font-normal text-black/60">
              (paste it in your readme)
            </span>
          </h3>
          <code className="flex items-center justify-between gap-4 p-2 mb-4 text-sm bg-white border rounded-lg border-black/10">
            <pre className="overflow-hidden whitespace-normal">
              {markdownToCopy}
            </pre>
            <CopyButton textToCopy={markdownToCopy} />
          </code>
          <Image
            className="mx-auto h-fit"
            src={generatedUrl}
            alt={url}
            width={width}
            height={height}
            unoptimized
            loading="lazy"
          />
          <GiveCredits />
        </>
      )}
    </section>
  );
};

export default BentoCardsPlayground;
