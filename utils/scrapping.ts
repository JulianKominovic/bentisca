const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import icoToPng from "ico-to-png";
const virtualConsole = new jsdom.VirtualConsole();
virtualConsole.on("error", () => {
  // No-op to skip console errors.
});
const userAgent =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

function getFaviconUrlFromDom(dom: any, pageUrl: string) {
  const faviconElement =
    dom.window.document.querySelector('link[rel="icon"][sizes="48x48"]') ??
    dom.window.document.querySelector('link[rel="icon"][sizes="72x72"]') ??
    dom.window.document.querySelector('link[rel="icon"][sizes="96x96"]') ??
    dom.window.document.querySelector('link[rel="icon"][sizes="144x144"]') ??
    dom.window.document.querySelector('link[rel="icon"][sizes="192x192"]') ??
    dom.window.document.querySelector(
      'link[rel="apple-touch-icon"][sizes="180x180"]'
    ) ??
    dom.window.document.querySelector(
      'link[rel="apple-touch-icon"][sizes="256x256"]'
    ) ??
    dom.window.document.querySelector('link[rel="icon"]') ??
    dom.window.document.querySelector('link[rel="shortcut icon"]');

  if (faviconElement) {
    const href = faviconElement.href;
    if (href.startsWith("http")) return href;
    const pageUrlOrigin = new URL(pageUrl).origin;
    return new URL(href, pageUrlOrigin).href;
  }
  return null;
}
/**
 *
 * @param url
 * @returns a valid favicon png or jpg or svg buffer
 */
export async function getWebsiteOgInfo(url: string) {
  try {
    const html = await fetch(url, {
      headers: {
        "User-Agent": userAgent,
        Referer: url,
      },
    }).then((res) => res.text());
    const dom = new JSDOM(html, { virtualConsole });
    const faviconUrl = getFaviconUrlFromDom(dom, url);
    console.log({ faviconUrl });

    if (!faviconUrl) throw new Error("No favicon found");

    let fileType = "image/png";
    let faviconArrayBuffer = await fetch(faviconUrl, {
      headers: {
        "User-Agent": userAgent,
        Referer: url,
        accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
    }).then((res) => {
      fileType = res.headers.get("content-type") ?? "image/png";

      console.log({
        fileType,
        faviconUrl,
      });
      return res.arrayBuffer();
    });
    if (fileType.includes("icon")) {
      faviconArrayBuffer = await icoToPng(Buffer.from(faviconArrayBuffer), 48);
      fileType = "image/png";
    }

    return {
      title: dom.window.document.title,
      faviconUrl,
      fileType,
      faviconArrayBuffer,
    };
  } catch (err) {
    console.error(err);
    return {
      title: null,
      faviconUrl: null,
      fileType: null,
      faviconArrayBuffer: null,
    };
  }
}
