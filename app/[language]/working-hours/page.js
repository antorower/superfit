import HoursLabel from "@/components/HoursLabel";

const WorkingHours = ({ params }) => {
  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-center p-8">
      <HoursLabel />
      <div className="grid grid-cols-1 grid-rows-4 md:hidden gap-4 w-full min-w-[300px] max-w-[650px] bg-black p-4 border border-opacity-20 border-primary">
        <div className="flex flex-col gap-1 border border-primary p-2">
          <div className="text-primary font-bold text-base text-center">{params.language === "el" ? "ΔΕΥΤΕΡΑ" : "MONDAY"}</div>
          <div className="text-sm text-center text-primary">17:00 - 23:00</div>
        </div>
        <div className="flex flex-col gap-1 border border-primary p-2">
          <div className="text-primary font-bold text-base text-center">{params.language === "el" ? "ΤΡΙΤΗ - ΠΑΡΑΣΚΕΥΗ" : "TUESDAY - FRIDAY"}</div>
          <div className="text-sm text-center text-primary">9:00 - 11:00 & 17:00 - 23:00</div>
        </div>
        <div className="flex flex-col gap-1 border border-primary p-2">
          <div className="text-primary font-bold text-base text-center">{params.language === "el" ? "ΣΑΒΒΑΤΟ" : "SATURDAY"}</div>
          <div className="text-sm text-center text-primary">11:00 - 13:00</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 border border-white p-2 opacity-25">
          <div className="text-white font-bold text-base text-center">{params.language === "el" ? "ΚΥΡΙΑΚΗ" : "SUNDAY"}</div>
          <div className="text-sm text-center text-white">CLOSED</div>
        </div>
      </div>
      <div className="hidden md:grid grid-cols-5 grid-rows-2 gap-4 w-full min-w-[300px] max-w-[650px] bg-black p-4 border border-opacity-20 border-primary">
        <div className="col-span-2 row-start-1 flex flex-col gap-1 border border-primary p-2">
          <div className="text-primary font-bold text-base text-center">{params.language === "el" ? "ΔΕΥΤΕΡΑ" : "MONDAY"}</div>
          <div className="text-sm text-center text-primary">17:00 - 23:00</div>
        </div>
        <div className="col-span-4 row-start-2 flex flex-col gap-1 border border-primary p-2">
          <div className="text-primary font-bold text-base text-center">{params.language === "el" ? "ΤΡΙΤΗ - ΠΑΡΑΣΚΕΥΗ" : "TUESDAY - FRIDAY"}</div>
          <div className="text-sm text-center text-primary">9:00 - 11:00 & 17:00 - 23:00</div>
        </div>
        <div className="col-span-2 row-start-1 flex flex-col gap-1 border border-primary p-2">
          <div className="text-primary font-bold text-base text-center">{params.language === "el" ? "ΣΑΒΒΑΤΟ" : "SATURDAY"}</div>
          <div className="text-sm text-center text-primary">11:00 - 13:00</div>
        </div>
        <div className="col-span-1 row-span-2 flex flex-col items-center justify-center gap-1 border border-white p-2 opacity-25">
          <div className="text-white font-bold text-base text-center">{params.language === "el" ? "ΚΥΡΙΑΚΗ" : "SUNDAY"}</div>
          <div className="text-sm text-center text-white">CLOSED</div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
