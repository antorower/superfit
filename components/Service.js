import Image from "next/image";
import Link from "next/link";

const Service = ({ language, icon, title, description, price }) => {
  return (
    <div className="flex flex-col gap-2 bg-black bg-opacity-90 px-6 py-4 border border-gray-900 rounded-xl w-[300px] shadow-black shadow-sm">
      <div className="min-h-[60px] m-auto">
        <Image src={icon} width={60} height={60} alt="" />
      </div>
      <div className="font-bold font-roboto text-xl text-center">{title[language]}</div>
      <div className="flex justify-center text-sm text-gray-500">{price}</div>
      <div className="text-center text-sm text-gray-400">{description[language]}</div>
    </div>
  );
};

export default Service;
