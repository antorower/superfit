import Image from "next/image";
import { ownerName } from "@/library/Translations";
import { title } from "@/library/Translations";
import { profile } from "@/library/Translations";

const Profile = ({ language }) => {
  return (
    <div className="flex flex-col rounded-lg bg-black border border-gray-800 bg-opacity-90 p-3">
      <div className="relative w-full h-[200px]">
        <Image src="/gym-profile.webp" fill style={{ objectFit: "cover" }} priority className="rounded-t-lg" />
      </div>
      <div className="flex flex-col mt-2">
        <div className="font-medium text-white">{ownerName[language]}</div>
        <div className="font-light text-sm text-gray-300">{title[language]}</div>
      </div>
      <div className="text-xs text-gray-300 text-justify my-4">{profile.subtitle[language]}</div>
      <div className="flex flex-wrap gap-2 text-gray-600">
        {profile.tags[language].map((tag, index) => (
          <div key={tag} className="text-xs bg-gray-100 rounded px-2 py-1 font-medium">
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
