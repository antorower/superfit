import PrimaryMenuItem from "./PrimaryMenuItem";
import { primaryMenu } from "@/library/Translations";

const PrimaryMenu = ({ language }) => {
  return (
    <nav className="flex bg-black bg-opacity-90 border-t border-gray-800 relative">
      {primaryMenu.map((item, index) => (
        <PrimaryMenuItem key={`${index}-primary-menu`} name={item.name} href={item.href} icon={item.icon} iconHover={item.iconHover} size={item.size} phone={item.phone} tablet={item.tablet} pc={item.pc} language={language} alt={item.alt} />
      ))}
    </nav>
  );
};

export default PrimaryMenu;
