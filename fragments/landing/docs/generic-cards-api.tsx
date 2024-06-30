import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import Image from "next/image";

const examples = [
  "siRust",
  "sisvelte",
  "siTailwindcss",
  "siVim",
  "siWindows",
  "siXcode",
  "siYarn",
  "siZapier",
  "siZorin",
  "siZulip",
];

export default function GenericCardsApi() {
  return (
    <>
      <h3 className="mt-16 text-lg font-semibold" id="docs-generic-cards">
        Dynamic icon brands as bento cards
      </h3>
      <p className="text-black/60">
        Use this endpoint if your social media app is not supported or you want
        a fancy icon card. Icons are from{" "}
        <a
          href="https://simpleicons.org/"
          target="_blank"
          className="underline underline-offset-2"
          rel="noopener noreferrer"
        >
          SimpleIcons
        </a>{" "}
        library. You can use any of the 3150+ icons available.
      </p>
      <div className="flex items-center gap-2 mb-4 rounded-xl w-fit">
        <span className="font-medium px-1 py-0.5 border border-blue-500 rounded-full text-xs bg-blue-200">
          GET
        </span>
        <span>/api/v1/generic-card</span>
      </div>
      <table className="block overflow-x-auto border rounded-lg whitespace-nowrap border-neutral-200">
        <thead className="border-b bg-neutral-100 border-neutral-200">
          <tr className="">
            <th className="sticky top-0 left-0 py-2 pl-4 text-left bg-neutral-100 min-w-10">
              Query
            </th>
            <th className="py-2 pl-4 text-left min-w-52">Value</th>
            <th className="py-2 pl-4 text-left min-w-52">Description</th>
            <th className="py-2 pl-4 text-left min-w-52">Default</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-neutral-200">
            <td className="sticky top-0 left-0 px-4 py-4 bg-neutral-50">
              icon<span className="text-red-600">*</span>
            </td>
            <td className="px-4 py-4">
              <a
                href="https://simpleicons.org/"
                target="_blank"
                className="underline underline-offset-2"
                rel="noopener noreferrer"
              >
                SimpleIcons
              </a>
            </td>
            <td className="px-4 py-4">
              Must begin with {"'si'"} and must be a valid icon name. Tip: you
              can copy the icon name from SimpleIcons website.
            </td>
            <td className="px-4 py-4"></td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="sticky top-0 left-0 px-4 py-4 bg-neutral-50">
              size
            </td>
            <td className="px-4 py-4">square | wide | tall</td>
            <td className="px-4 py-4"></td>
            <td className="px-4 py-4">square</td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="sticky top-0 left-0 px-4 py-4 bg-neutral-50">
              subtitle
            </td>
            <td className="px-4 py-4">string</td>
            <td className="px-4 py-4">Custom card subtitle</td>
            <td className="px-4 py-4"></td>
          </tr>
          <tr className="border-b border-neutral-200">
            <td className="sticky top-0 left-0 px-4 py-4 bg-neutral-50">
              rounded
            </td>
            <td className="px-4 py-4">number</td>
            <td className="px-4 py-4">
              How rounded you want the corners to be.
            </td>
            <td className="px-4 py-4">24</td>
          </tr>
        </tbody>
      </table>
      <p>
        Example:{" "}
        <a
          href="https://bentos.jkominovic.dev/api/v1/generic-card?icon=siwindows&subtitle=testing&size=square&rounded=24&subtitle=testing"
          target="_blank"
          rel="noopener noreferrer"
          className="block underline break-all underline-offset-2"
        >
          https://bentos.jkominovic.dev/api/v1/generic-card?icon=siwindows&subtitle=testing&size=square&rounded=24&subtitle=testing
        </a>
      </p>
      {["square"].flatMap((size: string) => {
        const { height, width } = getBentoCardSizes(size as "square");
        return (
          <ul className="flex flex-wrap justify-center gap-4">
            {examples.map((url) => {
              return (
                <li
                  key={size + url}
                  className="flex flex-col items-center gap-2"
                >
                  <Image
                    className="h-fit"
                    src={
                      "/api/v1/generic-card?icon=" +
                      url +
                      "&size=" +
                      size +
                      "&rounded=24&subtitle=testing"
                    }
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
    </>
  );
}
