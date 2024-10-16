const HoursLabel = () => {
  return (
    <div className="relative">
      <div className="w-[60%] h-[60%] bg-primary absolute top-7 left-7 rounded-full -z-20 animate-ping"></div>
      <div className="rounded-full bg-black border-[2px] border-primary w-[140px] h-[140px] flex flex-col gap-1 justify-center items-center">
        <div className="text-center text-xl font-bold text-gray-300">OPENING</div>
        <div className="text-center text-xl font-bold text-gray-300">HOURS</div>
      </div>
    </div>
  );
};

export default HoursLabel;
