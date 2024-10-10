"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryMenu } from "@/library/Translations";
import { secondaryMenu } from "@/library/Translations";
import ShareButtonsHorizontal from "./ShareButtonsHorizontal";
import { companyName } from "@/library/Translations";

const MobileMenuButton = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-mansalva">
      {/* Mobile menu button */}
      <button onClick={toggleMenu} className="" aria-label="Toggle mobile menu">
        <Image src="/icons/menu.svg" width={32} height={32} alt="Κουμπί menu - Άνοιγμα menu" />
      </button>

      {/* Mobile menu */}
      <div className={`fixed flex flex-col items-center justify-between overflow-y-auto top-0 left-0 bottom-0 w-[100vw] bg-black bg-opacity-90 z-50 transform transition-transform duration-1000 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-center sticky top-0 w-full px-4 py-4 bg-black z-50 border-b border-gray-700">
          <Image src="/icons/logo-letters-only.svg" width={180} height={180} alt={`${companyName} logo only letters`} />
        </div>

        <div className="flex flex-col gap-8 text-2xl items-center justify-center">
          <Image src="/icons/logo.svg" width={60} height={60} alt={`${companyName} logo`} />         
          <div className="flex flex-col gap-3 text-center">
          {secondaryMenu.map((item) => (
            <Link aria-label={item.alt[language]} onClick={() => setIsMenuOpen(false)} href={`/${language}${item.href}`} key={item.name.en} className="hover:text-primary">
              {item.name[language]}
            </Link>
          ))}
          </div>
          <div className="">
            <ShareButtonsHorizontal />
          </div>
        </div>

        <button onClick={toggleMenu} aria-label="Close menu" className="sticky p-4 flex w-full text-xl font-bold font-geologica justify-center bottom-0 z-50 bg-black border-t border-gray-700">
          <Image src="/icons/close.svg" width={35} height={35} />
        </button>
      </div>
    </div>
  );
};

export default MobileMenuButton;
