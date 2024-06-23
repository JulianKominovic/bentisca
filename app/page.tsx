import { BentoLogoProps, getBentoCardSizes } from "@/const/bento-cards";
import Image from "next/image";

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
];

export default function Home() {
  return (
    <main className="grid gap-8 min-h-screen max-w-screen-lg mx-auto items-center justify-between p-24">
      <section>
        <h1>GH readme bento</h1>
      </section>
      <aside className="flex flex-col gap-4">
        {sizes.flatMap((size) => {
          const { height, width } = getBentoCardSizes(size);
          return (
            <section>
              <h2>Size: {size}</h2>
              <ul className="flex flex-wrap gap-4">
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
            </section>
          );
        })}
      </aside>
    </main>
  );
}
