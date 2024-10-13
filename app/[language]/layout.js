import Image from "next/image";
import PrimaryMenu from "@/components/PrimaryMenu";
import TopBar from "@/components/TopBar";
import { languages, defaultLanguage } from "@/library/Translations";
import ParticlesComponent from "@/components/ParticlesComponent";
import "../globals.css";

import { Mansalva, Geologica, Roboto } from "next/font/google";

const mansalva = Mansalva({
  weight: "400",
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-mansalva",
});

const geologica = Geologica({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-geologica",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "greek"],
  variable: "--font-roboto",
});

export async function generateStaticParams() {
  return languages.map((language) => ({ language }));
}

export async function generateMetadata({ params }) {
  const { language } = params;

  const metadata = {
    el: {
      title: "SuperFit Gym",
      description: "Το SuperFit Gym στο Ίλιον προσφέρει σύγχρονα προγράμματα fitness, όπως Ελεύθερα Βάρη, Personal Training, και Ομαδική Προπόνηση. Επισκεφθείτε μας στη Δημητσάνας 13, Ίλιον 131 22.",
    },
    en: {
      title: "SuperFit Gym",
      description: "SuperFit Gym in Ilion offers modern fitness programs such as Free Weights, Personal Training, and Group Training. Visit us at Dimitsanas 13, Ilion 131 22, Greece.",
    },
  };

  return {
    title: metadata[language]?.title || metadata.el.title,
    description: metadata[language]?.description || metadata.el.description,
    alternates: {
      languages: {
        el: "/el",
        en: "/en",
      },
    },
  };
}

export default function Layout({ children, params }) {
  return (
    <html lang={params.language} className={`${mansalva.variable} ${geologica.variable} ${roboto.variable}`}>
      <body className="bg-backgroundDark">
        <div className="flex flex-col h-svh">
          <Image src="/gym-background.webp" fill style={{ objectFit: "cover" }} priority quality={25} alt="" className="opacity-50 filter grayscale fixed inset-0 -z-50" />
          <TopBar language={params.language ?? defaultLanguage} />
          <div className="flex-grow overflow-y-auto">{children}</div>
          <PrimaryMenu language={params.language ?? defaultLanguage} />
          <div className="-z-40">
            <ParticlesComponent />
          </div>
        </div>
      </body>
    </html>
  );
}
