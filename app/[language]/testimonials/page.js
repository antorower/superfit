import Image from "next/image";
import { testimonials } from "@/library/Translations";

export async function generateMetadata({ params }) {
  const { language } = params;

  const metadata = {
    el: {
      title: "Σχόλια Πελατών | SuperFit Gym",
      description: "Διαβάστε τι λένε οι πελάτες μας για τις υπηρεσίες και τα προγράμματα fitness του SuperFit Gym στο Ίλιον.",
    },
    en: {
      title: "Testimonials | SuperFit Gym",
      description: "Read what our clients say about the fitness services and programs at SuperFit Gym in Ilion.",
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

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full max-w-[700px] m-auto p-4 animate-fadeIn">
      <a href="https://www.google.com/maps/dir//Superfit+Training+Studio,+Dimitsanas+13,+Ilion+131+22,+Greece/@38.025054,23.629332,11z/data=!4m9!4m8!1m0!1m5!1m1!1s0x14a1a3e381db9437:0x9e35f4460a2b8e44!2m2!1d23.7117334!2d38.0250824!3e0?hl=en&entry=ttu&g_ep=EgoyMDI0MTAwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-white bg-black w-full sticky top-0 flex justify-between p-6 gap-4 border border-gray-900">
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-red-500 w-10 h-10 flex justify-center items-center text-lg">S</div>
          <div>
            <div className="font-semibold">Superfit Fitness Studio</div>
            <div className="text-sm text-gray-500">Δημητσάνας 13</div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="font-semibold text-xl">4.9</div>
          <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
          <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
          <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
          <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
          <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
        </div>
      </a>
      {testimonials.map((review) => (
        <a href={review.link} target="_blank" key={review.name} className="text-white bg-black w-full flex flex-col p-6 rounded-xl gap-4 bg-opacity-85 border border-gray-900">
          <div className="flex gap-4 items-center">
            <div className="rounded-full font-bold bg-red-500 w-10 h-10 flex justify-center items-center text-lg">{review.name.slice(0, 1)}</div>
            <div>
              <div className="font-semibold">{review.name}</div>
              <div className="text-sm text-gray-500">Google Review</div>
            </div>
          </div>
          <div className="flex gap-2">
            <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
            <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
            <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
            <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
            <Image src="/icons/star.svg" width={15} height={15} alt="review star" />
          </div>
          <div>{review.text}</div>
        </a>
      ))}
    </div>
  );
};

export default Testimonials;
