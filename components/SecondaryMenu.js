import Link from "next/link";
import { secondaryMenu } from "@/library/Translations";

const SecondaryMenu = ({ language }) => {
  return (
    <div className="flex gap-8 items-center px-8 font-mansalva">
      {secondaryMenu.map((item) => (
        <Link key={`${item.href}-secondary-menu`} href={`/${language}${item.href}`} className="hover:text-primary text-foregroundDark text-nowrap">
          {item.name[language]}
        </Link>
      ))}
    </div>
  );
};

export default SecondaryMenu;
