import { getBentoCardSizes, SIZES } from "@/const/bento-cards";
import Image from "next/image";

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
export default function BentoCardsApiDocs() {
  return (
    <>
      <h3 className="text-lg font-semibold" id="docs-handcrafted-bentos">
        Get a handcrafted social media bento card
      </h3>
      <p className="text-black/60">
        Use this endpoint if your social media app is supported (check if your
        social media logo is in the examples below).
      </p>
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
            <th className="w-full py-2 pl-4 text-left min-w-52">Default</th>
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
      {["square"].flatMap((size: string) => {
        const { height, width } = getBentoCardSizes(size as "square");
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
    </>
  );
}
