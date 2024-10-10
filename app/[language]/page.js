import Image from "next/image";
import HeroParagraph from "@/components/HeroParagraph";
import ShareButtonsVertical from "@/components/ShareButtonsVertical";
import ShareButtonsHorizontal from "@/components/ShareButtonsHorizontal";

export default function Home({ params }) {
  return (
    <main className="flex justify-center items-center h-full text-white overflow-y-auto animate-fadeIn">
      <div className="fixed bottom-0 right-0 w-[100vw] h-[90dvh] lg:block z-[-30]">
        <Image src="/muscular-man-home.webp" sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" priority quality={25} fill style={{ objectFit: "contain", objectPosition: "bottom right" }} alt="" className="filter hidden lg:block brightness-50 saturate-50" />
      </div>

      <div className="w-full lg:max-w-[80%] xl:max-w-[65%] 2xl:max-w-[50%] p-10">
        <HeroParagraph language={params.language} />
      </div>

      <div className="md:hidden w-full fixed top-24">
        <ShareButtonsHorizontal />
      </div>
      <ShareButtonsVertical />
    </main>
  );
}
