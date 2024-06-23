"use server";
import { redirect } from "next/navigation";

export async function setBentoSettings(formData: FormData) {
  "use server";
  const urlObject = new URLSearchParams();
  urlObject.set("url", formData.get("url") as string);
  urlObject.set("subtitle", formData.get("subtitle") as string);
  urlObject.set("size", formData.get("size") as string);
  redirect("/?" + urlObject.toString());
}
