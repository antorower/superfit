import Image from "next/image";
import Link from "next/link";
import SecondaryMenu from "./SecondaryMenu";
import MobileMenuButton from "./MobileMenuButton";
import { companyName } from "@/library/Translations";
import LanguageSwitcher from "./LanguagesMenu";

const TopBar = ({ language }) => {
  return (
    <div className="flex w-full justify-between items-center py-4 px-8 text-gray-300 ">
      <Link href="/">
        <Image src="/icon-192x192.png" priority width={35} height={35} alt={`${companyName} logo`} />
      </Link>
      <SecondaryMenu language={language} />
      <LanguageSwitcher />
    </div>
  );
};

export default TopBar;
