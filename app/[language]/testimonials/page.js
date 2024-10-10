import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/library/Translations";

const Testimonials = () => {
  return (
    <div className="flex flex-col gap-4 items-center w-full max-w-[700px] m-auto p-4 animate-fadeIn">
      <a href="" target="_blank" className="text-white bg-black w-full sticky top-0 flex justify-between p-6 gap-4 border border-gray-900">
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-red-500 w-10 h-10 flex justify-center items-center text-lg">S</div>
          <div>
            <div className="font-semibold">Superfit Fitness Studio</div>
            <div className="text-sm text-gray-500">Δημητσάνας 13</div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="font-semibold text-xl">4.8</div>
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
