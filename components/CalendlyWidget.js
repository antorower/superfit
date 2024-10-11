"use client";

import { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";
import Enlarger from "./Enlarger";

export default function CalendlyWidget({ language }) {
  useEffect(() => {
    const loadCalendly = () => {
      if (window.Calendly) {
        // Αρχικοποίηση του Calendly αν έχει ήδη φορτωθεί το script
        return true;
      }
      return false;
    };

    if (!loadCalendly()) {
      // Έλεγχος κάθε 500ms αν το Calendly έχει φορτωθεί
      const intervalId = setInterval(() => {
        if (loadCalendly()) {
          clearInterval(intervalId);
        }
      }, 500);

      // Καθαρισμός του interval όταν αποσυνδεθεί το component
      return () => clearInterval(intervalId);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      // Ανοίγει το popup widget με τις παραμέτρους που έχεις ορίσει
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/georkera/personal-training?background_color=181818&text_color=ffffff&primary_color=f2f20c",
      });
    }
  };

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive" />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <div className="flex gap-6">
        <Enlarger>
          <a href="#" onClick={handleClick} className="px-6 py-3 border-4 border-primary group bg-primary text-textDark font-bold rounded flex items-center gap-2">
            <Image src="/icons/calendar-black.svg" width={26} height={26} alt="" />
          </a>
        </Enlarger>
        <a href="#" onClick={handleClick} className="hidden  px-6 py-3 border-4 border-primary group bg-primary text-textDark font-bold rounded lg:flex items-center gap-2">
          {language === "el" ? "Κλείσε Personal Training Τώρα" : "Book Personal Training Now"}
        </a>
      </div>
    </>
  );
}
