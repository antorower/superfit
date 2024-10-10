import Image from "next/image";
import Link from "next/link";
import { profile } from "@/library/Translations";
import { email } from "@/library/Translations";

const About = ({ language }) => {
  return (
    <div className="flex flex-col rounded-lg bg-black bg-opacity-90 border border-gray-800 p-3 gap-4">
      <div className="font-medium flex gap-2 items-center">
        <Image src="/icons/team.svg" width={15} height={15} />
        <div className="text-white">{profile.about.title[language]}</div>
      </div>
      <div className="rounded-lg flex flex-col gap-4">
        <div className="text-xs text-gray-300 text-justify">{profile.about.text[language]}</div>
        <hr className="border-none bg-gray-300 w-full h-[1px]" />
        <div className="text-sm flex items-center gap-2">
          <div>
            <Image src="/icons/email.svg" width={15} height={15} />
          </div>
          <div className="text-gray-300">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
