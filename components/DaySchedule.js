"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function DaySchedule({ day, language }) {
  const [isCurrentDay, setIsCurrentDay] = useState(false);

  useEffect(() => {
    const getCurrentDay = () => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const today = new Date().getDay();
      return days[today];
    };
    setIsCurrentDay(day.day.en === getCurrentDay());
  }, [day.day.en]);

  return (
    <div className={`flex flex-col items-center border-primary  ${isCurrentDay ? "animate-bounce" : null} border`}>
      <div className="bg-primary w-full text-textDark font-roboto font-semibold px-4 py-2 text-center">{day.day[language]}</div>
      <div className="flex flex-col gap-2 items-center p-4 text-textLight bg-backgroundDark bg-opacity-50 w-full">
        {day.openHours[language].map((hour, index) => (
          <div key={`${day.day.en}-hours-${index}`}>{hour}</div>
        ))}
      </div>
    </div>
  );
}
