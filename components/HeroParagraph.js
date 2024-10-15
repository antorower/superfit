import Link from "next/link";
import { homePageText } from "@/library/Translations";
import { defaultLanguage } from "@/library/Translations";
import { telephone } from "@/library/Translations";
import ShareButtonsHorizontal from "./ShareButtonsHorizontal";
import Image from "next/image";
import Enlarger from "./Enlarger";

const HeroParagraph = ({ language }) => {
  const { titleLeft, titleMiddle, titleRight, firstButton, secondButton } = homePageText[language] || homePageText[defaultLanguage];

  return (
    <div className="lg:max-w-[65%] xl:max-w-[50%] p-20 lg:p-0 lg:ml-[8vw] justify-self-start text-white w-full flex flex-col gap-6">
      <ShareButtonsHorizontal />
      <blockquote className="text-center lg:text-left text-4xl sm:text-7xl font-extrabold leading-tight select-none">
        {titleLeft} <span className="text-primary animate-pulse">{titleMiddle}</span> {titleRight}
      </blockquote>
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xl">
        <Enlarger>
          <a aria-label={language === "el" ? "Κάλεσέ μας" : "Call us"} href={`tel:${telephone}`} className="px-6 py-3 border-4 h-full border-primary group bg-primary text-textDark font-bold rounded flex items-center gap-2">
            <div>
              <Image src="/icons/call.svg" width={22} height={22} alt="" />
            </div>
          </a>
        </Enlarger>
        <div className="flex gap-6">
          <Enlarger>
            <Link href={`/${language}/booking`} aria-label={language === "el" ? "Προγραμμάτισε personal training" : "Book personal training"} className="px-6 py-3 border-4 h-full border-primary group bg-primary text-textDark font-bold rounded flex items-center gap-2">
              <Image src="/icons/calendar-black.svg" width={26} height={26} alt="" />
            </Link>
          </Enlarger>
          <Link href={`/${language}/booking`} aria-label={language === "el" ? "Προγραμμάτισε personal training" : "Book personal training"} className="hidden  px-6 py-3 border-4 border-primary group bg-primary text-textDark font-bold rounded lg:flex items-center gap-2">
            {language === "el" ? "Κλείσε Personal Training Τώρα" : "Book Personal Training Now"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroParagraph;
/*
<Enlarger>
          <Link href="/" className="px-6 py-3 border-4 h-full border-primary group bg-primary text-textDark font-bold rounded flex items-center gap-2">
            <div>
              <Image src="/icons/eshop.svg" width={25} height={25} alt="" />
            </div>
          </Link>
        </Enlarger>
       <Enlarger>
          <Link href="/" className="px-6 py-3 border-4 h-full border-primary group bg-primary text-textDark font-bold rounded flex items-center gap-2">
            <div>
              <Image src="/icons/dashboard.svg" width={22} height={22} alt="" />
            </div>
            <div className="font-semibold text-base">{secondButton}</div>
          </Link>
        </Enlarger>
        */
