import Image from "next/image";
import Link from "next/link";
import SecondaryMenu from "./SecondaryMenu";
import MobileMenuButton from "./MobileMenuButton";
import { companyName } from "@/library/Translations";
import LanguageSwitcher from "./LanguagesMenu";

const TopBar = ({ language }) => {
  return (
    <div className="flex w-full justify-between items-center py-4 px-8 text-gray-300">
      <div className="md:hidden">
        <MobileMenuButton language={language} />
      </div>
      <Link href="/">
        <Image src="/icons/logo-with-letters.svg" priority width={120} height={40} alt={`${companyName} logo`} />
      </Link>
      <SecondaryMenu language={language} />
      <LanguageSwitcher />
    </div>
  );
};

export default TopBar;
