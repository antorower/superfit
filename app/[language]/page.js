import Image from "next/image";
import HeroParagraph from "@/components/HeroParagraph";

export default function Home({ params }) {
  return (
    <div className="flex justify-center lg:justify-start h-full items-center text-white animate-fadeIn">
      <div className="fixed bottom-0 right-6 w-[90vw] h-[90dvh] lg:block z-[-30] hidden">
        <Image src="/muscular-man-home.webp" sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" quality={25} fill style={{ objectFit: "contain", objectPosition: "bottom right" }} alt="" className="filter brightness-50 saturate-50" />
      </div>
      <HeroParagraph language={params.language} />
    </div>
  );
}
