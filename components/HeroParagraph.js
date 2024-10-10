import Link from "next/link";
import { homePageText } from "@/library/Translations";
import { defaultLanguage } from "@/library/Translations";
import { telephone } from "@/library/Translations";

const HeroParagraph = ({ language }) => {
  const { titleLeft, titleMiddle, titleRight, subtitle, callToAction1, callToAction2 } = homePageText[language] || homePageText[defaultLanguage];

  return (
    <div className="text-foreground w-full flex flex-col lg:gap-3">
      <blockquote className="text-center text-4xl sm:text-7xl font-extrabold leading-tight select-none">
        {titleLeft} <span className="text-primary animate-pulse">{titleMiddle}</span> {titleRight}
      </blockquote>
      <p className="text-center m-auto text-xl w-full sm:w-[90%] lg:text-2xl text-foregroundDark select-none">{subtitle}</p>
      <div className="flex flex-wrap justify-center gap-4 mt-4 text-xl">
        <a href={`tel:${telephone}`} className="px-6 py-3 border border-primary bg-primary text-textDark font-bold rounded hover:bg-backgroundDark hover:text-primary  hover:border-primary flex items-center gap-2">
          <div>{callToAction1}</div>
        </a>
        <Link href="/" className="px-6 py-3 border text-primary border-primary font-bold rounded bg-backgroundDark">
          {callToAction2}
        </Link>
      </div>
    </div>
  );
};

export default HeroParagraph;
