import {
  BentoLogoProps,
  getBentoCardSizes,
  supportedSocialMedia,
  supportedSocialMediaIcons,
} from "@/const/bento-cards";
import Image from "next/image";
import { setBentoSettings } from "./actions/bento-try";
import CopyButton from "@/components/Copy";

const sizes: Exclude<BentoLogoProps["size"], undefined>[] = [
  "square",
  "wide",
  "tall",
];

const urls = [
  "https://www.behance.net/example_user",
  "https://www.buymeacoffee.com/example_user",
  "https://dev.to/example_user",
  "https://discord.gg/example_invite",
  "https://dribbble.com/example_user",
  "juliankominovic@gmail.com",
  "https://www.facebook.com/example_user",
  "https://www.figma.com/@juliankominovic",
  "https://gitlab.com/katlin7/angularexercise",
  "https://github.com/JulianKominovic/live-feedback",
  "https://www.instagram.com/example_user",
];

export default function Home({ searchParams }: any) {
  const { url, subtitle, size } = searchParams;

  const urlObject = new URLSearchParams();
  urlObject.set("url", url);
  urlObject.set("subtitle", subtitle);
  urlObject.set("size", size);
  const { width, height } = getBentoCardSizes(size);
  const generatedUrl =
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    "localhost:3000" + "/api/bento-cards?" + urlObject.toString();

  const markdownToCopy = `[![${subtitle ?? ""}](${generatedUrl})](${url})`;

  return (
    <main className="gap-8 min-h-screen max-w-screen-lg mx-auto px-4 py-8 sm:p-12">
      <section className="mb-8">
        <p className="text-8xl text-center mb-6">🍱</p>
        <h1 className="font-semibold text-5xl text-center">
          Github readme bento
        </h1>
        <p className="text-center text-black/60 mt-2">
          Beatiful bento cards for your readme. Thanks to{" "}
          <a
            href="https://www.figma.com/@double_glitch"
            className="underline underline-offset-2"
            target="_blank"
          >
            Double Glitch
          </a>{" "}
          for the figma design.
        </p>
      </section>
      <ul className="flex flex-wrap gap-4 justify-center mb-16">
        {supportedSocialMedia.map((social) => {
          const icon = supportedSocialMediaIcons[social];
          return (
            <li key={social} className="flex gap-2 items-center text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
              >
                <path d={icon.path} />
              </svg>
            </li>
          );
        })}
      </ul>
      <section className="my-6">
        <form
          action={setBentoSettings}
          className="flex gap-3 sm:flex-row flex-col items-end justify-center"
        >
          <label className="block w-full sm:w-fit flex-grow" htmlFor="url">
            URL
            <input
              defaultValue={url}
              className="w-full p-2 border border-black/10 rounded-lg"
              type="text"
              name="url"
              id="url"
              placeholder="https://www.behance.net/example_user"
            />
          </label>
          <label className="block w-full sm:w-fit" htmlFor="subtitle">
            Subtitle
            <input
              className="w-full p-2 border border-black/10 rounded-lg"
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
              className="w-full p-2 border border-black/10 rounded-lg"
              name="size"
              id="size"
              defaultValue={size}
            >
              {sizes.map((size) => {
                return (
                  <option key={size} value={size}>
                    {size}
                  </option>
                );
              })}
            </select>
          </label>
          <button
            className="sm:w-fit w-full py-2 px-4 bg-black text-white rounded-lg"
            type="submit"
          >
            Generate
          </button>
        </form>
      </section>
      <h3 className="font-semibold mb-2">
        Markdown
        <span className="text-black/60 font-normal text-sm ml-2">
          (paste it in your readme)
        </span>
      </h3>
      <code className="rounded-lg border gap-4 border-black/10 bg-white flex justify-between p-2 items-center mb-4 text-sm">
        <pre className="overflow-hidden whitespace-normal">
          {markdownToCopy}
        </pre>
        <CopyButton textToCopy={markdownToCopy} />
      </code>
      <Image
        className="h-fit mx-auto"
        src={"/api/bento-cards?" + urlObject.toString()}
        alt={url}
        width={width}
        height={height}
        unoptimized
        loading="lazy"
      />

      <section className="flex flex-col gap-4 mt-32 justify-center">
        <h2 className="text-2xl mb-6 font-semibold text-center">Showcase</h2>
        {sizes.flatMap((size) => {
          const { height, width } = getBentoCardSizes(size);
          return (
            <ul className="flex flex-wrap gap-4 justify-center">
              {urls.map((url) => {
                return (
                  <li
                    key={size + url}
                    className="flex flex-col gap-2 items-center"
                  >
                    <Image
                      className="h-fit"
                      src={"/api/bento-cards?url=" + url + "&size=" + size}
                      alt={url}
                      width={width}
                      height={height}
                      unoptimized
                      loading="lazy"
                    />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </section>
    </main>
  );
}
