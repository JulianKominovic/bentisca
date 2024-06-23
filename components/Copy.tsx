"use client";
import { Copy } from "@phosphor-icons/react/dist/ssr";
import { useRef, useState } from "react";
export default function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copied, setCopied] = useState(false);
  const timeoutId = useRef<number | null>(null);

  const copyText = async () => {
    if (copied) return;
    await navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    timeoutId.current = setTimeout(() => setCopied(false), 1000) as any;
  };

  return (
    <button
      className="font-sans rounded-lg h-8 flex-shrink-0 items-center justify-center flex px-2 border border-black/10"
      onClick={copyText}
    >
      {copied ? "Copied!" : <Copy />}
    </button>
  );
}
