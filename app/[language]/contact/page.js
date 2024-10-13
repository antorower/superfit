import Image from "next/image";
import Link from "next/link";
import Map from "@/components/Map";
import { telephone } from "@/library/Translations";

export async function generateMetadata({ params }) {
  const { language } = params;

  const metadata = {
    el: {
      title: "Επικοινωνία | SuperFit Gym",
      description: "Επικοινωνήστε μαζί μας για να μάθετε περισσότερα σχετικά με τις υπηρεσίες μας ή να κλείσετε ραντεβού στο SuperFit Gym στο Ίλιον.",
    },
    en: {
      title: "Contact | SuperFit Gym",
      description: "Get in touch with us to learn more about our services or book an appointment at SuperFit Gym in Ilion.",
    },
  };

  return {
    title: metadata[language]?.title || metadata.el.title,
    description: metadata[language]?.description || metadata.el.description,
    alternates: {
      languages: {
        el: "/el",
        en: "/en",
      },
    },
  };
}

const Contact = ({ params }) => {
  return (
    <div className="w-full grid grid-cols-12 text-white">
      <div className="p-8 col-span-12 lg:col-span-6 xl:col-span-8">
        <Map />
      </div>
      <div className="p-8 flex flex-col gap-4 col-span-12 lg:col-span-6 xl:col-span-4">
        <div className="flex gap-4">
          <div className="border border-gray-900 bg-black bg-opacity-70 p-3 rounded-lg">
            <Image src="/logo.png" width={25} height={25} alt="" />
          </div>
          <div className="border border-gray-900 flex-grow text-center bg-black bg-opacity-70 p-3 rounded-lg font-geologica text-lg font-bold">Superfit Training Studio</div>
        </div>
        <div className="flex gap-4">
          <a href={`tel:${telephone}`} className="border border-gray-900 bg-black bg-opacity-70 p-3 rounded-lg">
            <Image src="/icons/call-white.svg" width={25} height={25} alt="" />
          </a>
          <a href={`tel:${telephone}`} className="border border-gray-900 flex-grow text-center bg-black bg-opacity-70 p-3 rounded-lg font-geologica">
            +30 697 400 8881
          </a>
          <div className="border border-gray-900 flex-grow text-center bg-black bg-opacity-70 p-3 rounded-lg font-geologica">Offers online classes</div>
        </div>
        <div className="flex gap-4">
          <a target="_blank" href="https://www.google.com/maps?ll=38.025054,23.629332&z=11&t=m&hl=en&gl=US&mapclient=embed&saddr&daddr=Superfit+Training+Studio,+Dimitsanas+13,+Ilion+131+22,+Greece&dirflg=d" className="border border-gray-900 bg-black bg-opacity-70 p-3 rounded-lg">
            <Image src="/icons/address.svg" width={25} height={25} alt="" />
          </a>
          <a target="_blank" href="https://www.google.com/maps?ll=38.025054,23.629332&z=11&t=m&hl=en&gl=US&mapclient=embed&saddr&daddr=Superfit+Training+Studio,+Dimitsanas+13,+Ilion+131+22,+Greece&dirflg=d" className="border border-gray-900 flex-grow text-center bg-black bg-opacity-70 p-3 rounded-lg font-geologica">
            {params.language === "el" ? "Δημητσάνας 13, Ίλιον 131 22" : "Dimitsanas 13, Ilion 131 22"}
          </a>
        </div>
        <div className="h-full border border-gray-900 flex-grow text-justify bg-black bg-opacity-70 px-4 py-2 rounded-lg font-geologica text-gray-300">
          {params.language === "el"
            ? "Το SuperFit Training Studio είναι ο απόλυτος προορισμός για όσους αναζητούν να πετύχουν τη μέγιστη φυσική κατάσταση και ευεξία. Σε ένα σύγχρονο και καλαίσθητο περιβάλλον, προσφέρουμε εξατομικευμένα προγράμματα προπόνησης, προσωπική καθοδήγηση από ειδικούς προπονητές και ποικιλία ομαδικών μαθημάτων για όλες τις ανάγκες. Στο SuperFit, η βελτίωση της δύναμης, της αντοχής και της ευλυγισίας δεν είναι απλά στόχος, αλλά τρόπος ζωής."
            : "The SuperFit Training Studio is the ultimate destination for those seeking to achieve peak physical fitness and wellness. In a modern and stylish environment, we offer personalized training programs, expert guidance from professional trainers, and a variety of group classes to suit every need. At SuperFit, improving strength, endurance, and flexibility is not just a goal—it's a way of life."}
        </div>
      </div>
    </div>
  );
};

export default Contact;
