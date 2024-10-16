import Image from "next/image";
import Link from "next/link";
import SecondaryMenu from "./SecondaryMenu";
import MobileMenuButton from "./MobileMenuButton";
import { companyName } from "@/library/Translations";
import LanguageSwitcher from "./LanguagesMenu";

const TopBar = ({ language }) => {
  return (
    <nav className="flex w-full justify-between items-center py-4 px-8 text-gray-300 ">
      <Link href="/">
        <Image src="/icons/logo.png" priority width={35} height={35} alt={`${companyName} logo`} />
      </Link>
      <div className="hidden md:flex">
        <SecondaryMenu language={language} />
      </div>
      <LanguageSwitcher />
    </nav>
  );
};

export default TopBar;
