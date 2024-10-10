import Image from "next/image";
import PrimaryMenu from "@/components/PrimaryMenu";
import TopBar from "@/components/TopBar";
import { languages, defaultLanguage } from "@/library/Translations";
import ChatBot from "@/components/ChatBot";
import ParticlesComponent from "@/components/ParticlesComponent";

export async function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export default function Layout({ children, params }) {
  return (
    <div className="flex flex-col h-svh">
      <Image src="/gym-background.webp" fill style={{ objectFit: "cover" }} priority quality={25} alt="" className="opacity-50 filter grayscale fixed inset-0 -z-50" />
      <TopBar language={params.language ?? defaultLanguage} />
      <div className="flex-grow overflow-y-auto">{children}</div>
      <PrimaryMenu language={params.language ?? defaultLanguage} />
      <div className="-z-40">
        <ParticlesComponent />
      </div>
    </div>
  );
}
/*
<div className="fixed right-6 bottom-24 z-10">
        <ChatBot lang={params.language} />
      </div>
      */
