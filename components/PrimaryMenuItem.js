import Image from "next/image";
import Link from "next/link";
import MenuTooltip from "./MenuTooltip";

const PrimaryMenuItem = ({ name, href, icon, iconHover, size, phone, tablet, pc, language, alt }) => {
  let responsiveClasses = "";
  if (phone) {
    responsiveClasses += "flex ";
  } else {
    responsiveClasses += "hidden ";
  }

  if (tablet) {
    responsiveClasses += "md:flex ";
  } else {
    responsiveClasses += "md:hidden ";
  }

  if (pc) {
    responsiveClasses += "lg:flex ";
  } else {
    responsiveClasses += "lg:hidden ";
  }

  return (
    <div className={`group border-r border-gray-800 w-full ${responsiveClasses} flex-col items-center justify-center relative`}>
      <div className="absolute top-[-50px] px-2 py-1 font-medium text-sm animate-slideDown hidden group-hover:block">
        <MenuTooltip>{name[language]}</MenuTooltip>
      </div>
      <Link href={`${language ? `/${language}${href}` : href}`} className="w-full">
        <div className="p-4 flex flex-col items-center">
          <Image className="group-hover:hidden" src={icon} width={size} height={size} alt={alt[language]} />
          <Image className="hidden group-hover:block" src={iconHover} width={size} height={size} alt={alt[language]} />
        </div>
      </Link>
    </div>
  );
};

export default PrimaryMenuItem;
//<span className="mt-2 text-sm text-white font-geologica hidden md:block">{menuText[language]}</span>
