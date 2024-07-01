import CopyButton from "@/components/Copy";
import { getBentoCardSizes, SIZES } from "@/const/bento-cards";
import Image from "next/image";
import React from "react";

const GiveCredits = () => {
  const markdownToCopy = `[![Bento cards using Bentisca](https://bentos.jkominovic.dev/api/v1/credits?size=square)](https://bentos.jkominovic.dev)`;
  return (
    <article className="p-4 my-8 text-center bg-blue-100 border border-blue-200 rounded-xl">
      Hey there! Are you enjoying this playground? Please consider giving me
      some credits by following me on{" "}
      <a
        href="https://twitter.com/juliankominovic"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        Twitter
      </a>{" "}
      and{" "}
      <a
        href="https://github.com/JulianKominovic"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-2"
      >
        Github
      </a>{" "}
      or adding the thanks giving bento card. I would really appreciate it! 🙏
      <br />
      <code className="flex items-center justify-between gap-4 p-2 my-4 text-sm bg-white border rounded-lg border-black/10">
        <pre className="overflow-hidden whitespace-normal">
          {markdownToCopy}
        </pre>
        <CopyButton textToCopy={markdownToCopy} />
      </code>
      <span className="text-sm text-black/60">
        Or paste this markdown into your README.md to show your appreciation!
        Thanks!
      </span>
      {/* <ul className="flex flex-wrap justify-around gap-4">
        {SIZES.map((size) => {
          const { height, width } = getBentoCardSizes(size);
          return (
            <li key={size + "credits"}>
              <Image
                className="mx-auto my-4"
                unoptimized
                src={"/api/v1/credits?size=" + size}
                alt="Thanks for giving credits!"
                width={width}
                height={height}
              />
            </li>
          );
        })}
      </ul> */}
    </article>
  );
};

export default GiveCredits;
