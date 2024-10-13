import Image from "next/image";
import Link from "next/link";
import { profile } from "@/library/Translations";
import { telephone } from "@/library/Translations";

const Vision = ({ language }) => {
  return (
    <div className="flex flex-col rounded-lg bg-black bg-opacity-90 p-3 border border-gray-800 gap-4 font-roboto">
      <div className="font-medium flex gap-2 items-center">
        <Image src="/icons/eye.svg" width={15} height={15} alt="" />
        <div className="text-white">{profile.vision.title[language]}</div>
      </div>
      <div className="rounded-lg flex flex-col gap-4">
        <div className="text-xs text-gray-300 text-justify">{profile.vision.text[language]}</div>
      </div>
      <div className="text-gray-300 font-bold text-justify">{profile.vision.question[language]}</div>
      <div className="flex gap-2 items-center">
        <a href={`tel:${telephone}`} className="w-full text-center rounded bg-primary hover:bg-primaryHover text-sm text-textDark hover:text-textLight font-semibold py-2">
          {profile.vision.callToAction[language]}
        </a>
      </div>
    </div>
  );
};

export default Vision;
