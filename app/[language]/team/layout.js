import Image from "next/image";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Vision from "@/components/Vision";

export default function Layout({ children, params }) {
  return (
    <div className="animate-fadeIn p-8">
      <div className="fixed bottom-0 left-0 w-[350px] h-[70dvh] lg:block z-[-30]">
        <Image src="/georgia.webp" sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw" priority quality={25} fill style={{ objectFit: "contain", objectPosition: "bottom center" }} alt="" className="filter -scale-x-100 brightness-50 saturate-50" />
      </div>
      <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-4">
        <div className="flex flex-col max-w-[550px] xl:max-w-[320px] w-full gap-4">
          <Profile language={params.language} />
          <About language={params.language} />
          <Vision language={params.language} />
        </div>
        {children}
      </div>
    </div>
  );
}
