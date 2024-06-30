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
  "https://buymeacoffee.com/drumscribe",
  "https://dev.to/juliankominovic",
  "https://discord.gg/example_invite",
  "https://dribbble.com/DKNG",
  "juliankominovic@gmail.com",
  "https://www.facebook.com/example_user",
  "https://www.figma.com/@juliankominovic",
  "https://gitlab.com/katlin7/angularexercise",
  "https://github.com/JulianKominovic/live-feedback",
  "https://www.instagram.com/example_user",
  "https://layers.to/princemirxcle",
  "https://www.linkedin.com/in/jkominovic/",
  "https://medium.com/@andrew.bestbier",
  "https://ar.pinterest.com/berathanusta1/",
  "https://www.reddit.com/r/LocalLLaMA/",
  "https://read.cv/carly",
  "https://www.tiktok.com/@pelao.khe?lang=es",
  "https://www.twitch.tv/nickdaboom",
];

export default function Home({ searchParams }: any) {
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
  const generatedUrl = baseApiUrl + "/api/bento-cards?" + urlObject.toString();

  const markdownToCopy =
    generatedUrl && url
      ? `[![${subtitle ?? ""}](${generatedUrl})](${url})`
      : "";

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
          const icon = supportedSocialMediaIcons[social] as any;
          return (
            <li key={social} className="flex gap-2 items-center text-xl">
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
          <label className="block w-full sm:w-min" htmlFor="rounded">
            Rounded
            <input
              className="w-full p-2 border border-black/10 rounded-lg"
              type="number"
              name="rounded"
              min={0}
              max={9999}
              id="rounded"
              placeholder="24"
            />
          </label>
          <button
            className="sm:w-fit w-full py-2 px-4 bg-black text-white rounded-lg"
            type="submit"
          >
            Generate
          </button>
        </form>
      </section>
      {markdownToCopy && (
        <>
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
            src={generatedUrl}
            alt={url}
            width={width}
            height={height}
            unoptimized
            loading="lazy"
          />
        </>
      )}

      <section className="flex flex-col gap-4 mt-32 justify-center">
        <h2 className="text-2xl mb-6 font-semibold text-center">Docs</h2>
        <h3 className="font-semibold text-lg">Get social media bento card</h3>
        <div className="flex gap-2 items-center mb-4 rounded-xl w-fit">
          <span className="font-medium px-1 py-0.5 border border-blue-500 rounded-full text-xs bg-blue-200">
            GET
          </span>
          <span>/api/bento-cards</span>
        </div>
        <table className="rounded-lg overflow-hidden border border-black/10">
          <thead>
            <tr>
              <th className="text-left">Query</th>
              <th className="text-left">Value</th>
              <th className="text-left">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>url</td>
              <td>string</td>
              <td>https://www.behance.net/example_user</td>
            </tr>
            <tr>
              <td>subtitle</td>
              <td>string</td>
              <td>Example user</td>
            </tr>
            <tr>
              <td>size</td>
              <td>square | wide | tall</td>
              <td>square</td>
            </tr>
            <tr>
              <td>rounded</td>
              <td>number</td>
              <td>24</td>
            </tr>
          </tbody>
        </table>
        <p>
          Example:{" "}
          <a
            href="http://bentos.jkominovic.dev/api/bento-cards?url=https://github.com/JulianKominovic/JulianKominovic&subtitle=testing&size=square&rounded=24"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            http://bentos.jkominovic.dev/api/bento-cards?url=https://github.com/JulianKominovic/JulianKominovic&subtitle=testing&size=square&rounded=24
          </a>
        </p>
      </section>
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
