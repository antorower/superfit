"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { languages } from "@/library/Translations";

const LanguageSwitcher = () => {
  const pathname = usePathname();

  const getLanguagePath = (lang) => {
    const pathParts = pathname.split("/").filter(Boolean);
    pathParts[0] = lang;
    return `/${pathParts.join("/")}`;
  };

  return (
    <div>
      {languages.map((lang, index) => (
        <span key={lang}>
          <Link className="hover:text-primary" href={getLanguagePath(lang)}>
            {lang.toUpperCase()}
          </Link>
          {index < languages.length - 1 && <span className="mx-2">|</span>}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
