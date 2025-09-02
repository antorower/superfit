"use client";

import { motion } from "framer-motion";
import HoursLabel from "@/components/HoursLabel";

const WorkingHours = ({ params }) => {
  const isGreek = params?.language === "el";

  const t = {
    mw: isGreek ? "ΔΕΥΤΕΡΑ & ΤΕΤΑΡΤΗ" : "MONDAY & WEDNESDAY",
    ttf: isGreek ? "ΤΡΙΤΗ & ΠΕΜΠΤΗ & ΠΑΡΑΣΚΕΥΗ" : "TUESDAY & THURSDAY & FRIDAY",
    sat: isGreek ? "ΣΑΒΒΑΤΟ" : "SATURDAY",
    sun: isGreek ? "ΚΥΡΙΑΚΗ" : "SUNDAY",
    closed: isGreek ? "ΚΛΕΙΣΤΑ" : "CLOSED",
  };

  const items = [
    { key: "mw", days: t.mw, hours: "17:00 - 23:00", closed: false },
    { key: "ttf", days: t.ttf, hours: "9:00 - 11:00  &  17:00 - 23:00", closed: false },
    { key: "sat", days: t.sat, hours: t.closed, closed: true },
    { key: "sun", days: t.sun, hours: t.closed, closed: true },
  ];

  const Card = ({ days, hours, closed, idx }) => (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 * idx }} whileHover={{ y: -3, scale: 1.01 }} className={["relative overflow-hidden rounded-2xl border p-4 md:p-5", "bg-black/80 backdrop-blur", closed ? "border-white/30" : "border-primary"].join(" ")}>
      {/* subtle glow edge */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(600px 200px at 100% 0%, rgba(255,255,255,0.35), transparent 50%)",
        }}
      />
      <div className="flex items-center justify-between gap-3">
        <div className={["text-sm font-bold tracking-wide text-left", closed ? "text-white" : "text-primary"].join(" ")}>{days}</div>

        {/* status pill */}
        <div className={["select-none rounded-full border px-2.5 py-0.5 text-xs font-semibold", closed ? "border-white/40 text-white/90" : "border-primary text-primary"].join(" ")}>{closed ? (isGreek ? "Κλειστά" : "Closed") : isGreek ? "Ανοιχτά" : "Open"}</div>
      </div>

      <div className={["mt-3 text-center text-sm md:text-base", closed ? "text-white/80" : "text-primary"].join(" ")}>{hours}</div>
    </motion.div>
  );

  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-8 p-8">
      <HoursLabel />

      {/* Responsive modern grid: 1 col on mobile, 2 on md+ */}
      <div className="w-full max-w-[820px] bg-black border border-opacity-20 border-primary p-4 md:p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((it, i) => (
            <Card key={it.key} days={it.days} hours={it.hours} closed={it.closed} idx={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
