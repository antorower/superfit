import { redirect } from "next/navigation";
import { defaultLanguage } from "@/library/Translations";

export default function RootPage() {
  redirect(`/${defaultLanguage}`);
}
