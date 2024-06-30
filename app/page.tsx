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
  "https://www.x.com/DamianCatanzaro/status/1803185953252507827",
  "https://twitter.com/juliankominovic",
  "https://www.youtube.com/@Fireship",
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
  const generatedUrl =
    baseApiUrl + "/api/v1/bento-cards?" + urlObject.toString();

  const markdownToCopy =
    generatedUrl && url
      ? `[![${subtitle ?? ""}](${generatedUrl})](${url})`
      : "";

  return (
    <main className="max-w-screen-lg min-h-screen gap-8 px-4 pt-24 pb-8 mx-auto overflow-x-hidden sm:p-12">
      <section className="mb-8">
        <p className="mb-6 text-center text-8xl">🍱</p>
        <h1 className="text-5xl font-semibold text-center">
          Github readme bento
        </h1>
        <p className="mt-2 text-center text-black/60">
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
      <ul className="flex flex-wrap justify-center gap-4 mb-16">
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
      </ul>
      <section className="my-6">
        <form
          action={setBentoSettings}
          className="flex flex-col items-end justify-center gap-3 sm:flex-row"
        >
          <label className="flex-grow block w-full sm:w-fit" htmlFor="url">
            URL
            <input
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
      </section>
      {markdownToCopy && (
        <>
          <h3 className="mb-2 font-semibold">
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
        </>
      )}

      <section className="flex flex-col justify-center gap-4 mt-32">
        <h2 className="mb-6 text-2xl font-semibold text-center">Docs</h2>
        <h3 className="text-lg font-semibold">Get social media bento card</h3>
        <div className="flex items-center gap-2 mb-4 rounded-xl w-fit">
          <span className="font-medium px-1 py-0.5 border border-blue-500 rounded-full text-xs bg-blue-200">
            GET
          </span>
          <span>/api/v1/bento-cards</span>
        </div>
        <table className="block overflow-x-auto border rounded-lg whitespace-nowrap border-black/10">
          <thead className="border-b bg-black/[0.03] border-black/10">
            <tr className="">
              <th className="py-2 pl-4 text-left min-w-52">Query</th>
              <th className="py-2 pl-4 text-left min-w-52">Value</th>
              <th className="py-2 pl-4 text-left min-w-52">Default</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-black/10">
              <td className="px-4 py-4">
                url<span className="text-red-600">*</span>
              </td>
              <td className="px-4 py-4">string</td>
              <td className="px-4 py-4"></td>
            </tr>
            <tr className="border-b border-black/10">
              <td className="px-4 py-4">size</td>
              <td className="px-4 py-4">square | wide | tall</td>
              <td className="px-4 py-4">square</td>
            </tr>
            <tr className="border-b border-black/10">
              <td className="px-4 py-4">subtitle</td>
              <td className="px-4 py-4">string</td>
              <td className="px-4 py-4">Detected username</td>
            </tr>
            <tr className="border-b border-black/10">
              <td className="px-4 py-4">rounded</td>
              <td className="px-4 py-4">number</td>
              <td className="px-4 py-4">24</td>
            </tr>
          </tbody>
        </table>
        <p>
          Example:{" "}
          <a
            href="http://bentos.jkominovic.dev/api/v1/bento-cards?url=https://github.com/JulianKominovic/JulianKominovic&subtitle=testing&size=square&rounded=24"
            target="_blank"
            rel="noopener noreferrer"
            className="block underline break-all underline-offset-2"
          >
            http://bentos.jkominovic.dev/api/v1/bento-cards?url=https://github.com/JulianKominovic/JulianKominovic&subtitle=testing&size=square&rounded=24
          </a>
        </p>
      </section>
      <section className="flex flex-col justify-center gap-4 mt-32">
        <h2 className="mb-6 text-2xl font-semibold text-center">Showcase</h2>
        {sizes.flatMap((size) => {
          const { height, width } = getBentoCardSizes(size);
          return (
            <ul className="flex flex-wrap justify-center gap-4">
              {urls.map((url) => {
                return (
                  <li
                    key={size + url}
                    className="flex flex-col items-center gap-2"
                  >
                    <Image
                      className="h-fit"
                      src={"/api/v1/bento-cards?url=" + url + "&size=" + size}
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
