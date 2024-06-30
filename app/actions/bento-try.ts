"use server";
import { redirect } from "next/navigation";

export async function setBentoSettings(formData: FormData) {
  "use server";
  const urlObject = new URLSearchParams();

  urlObject.set("icon", formData.get("icon") as string);
  urlObject.set("url", formData.get("url") as string);
  urlObject.set("subtitle", formData.get("subtitle") as string);
  urlObject.set("size", formData.get("size") as string);
  urlObject.set("rounded", formData.get("rounded") as string);
  if (formData.get("url") === null) urlObject.delete("url");
  if (formData.get("icon") === null) urlObject.delete("icon");
  if (formData.get("subtitle") === null) urlObject.delete("subtitle");
  if (formData.get("size") === null) urlObject.delete("size");
  if (formData.get("rounded") === null) urlObject.delete("rounded");
  redirect("/?" + urlObject.toString());
}
