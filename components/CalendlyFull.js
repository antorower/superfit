"use client";
import { useEffect } from "react";

const CalendlyFull = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Καθαρισμός του script όταν αποσυνδέεται το component
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div className="calendly-inline-widget" data-url="https://calendly.com/georkera/personal-training?hide_gdpr_banner=1&background_color=181818&text_color=ffffff&primary_color=f2f20c" style={{ minWidth: "320px", height: "700px" }}></div>
    </div>
  );
};

export default CalendlyFull;
