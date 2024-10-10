import React from "react";
import { businessHours } from "@/library/Translations";
import DaySchedule from "@/components/DaySchedule";

const Schedule = ({ params }) => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-grow p-8">
      <div className="flex flex-wrap justify-center gap-4">
        {businessHours.map((day) => (
          <DaySchedule key={`businessHours-${day.day.en}`} day={day} language={params.language} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
