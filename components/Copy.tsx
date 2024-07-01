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
      className="flex items-center justify-center flex-shrink-0 h-8 px-2 font-sans border rounded-lg select-none border-black/10"
      onClick={copyText}
    >
      {copied ? "Copied!" : <Copy />}
    </button>
  );
}
