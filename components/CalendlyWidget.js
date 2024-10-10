"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function CalendlyBadge() {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const checkCalendlyAndInit = () => {
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: "https://calendly.com/antonis-mastorakis/proponisi",
          text: "Schedule",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: undefined,
        });
        setIsCalendlyLoaded(true);
        return true;
      }
      return false;
    };

    if (!checkCalendlyAndInit()) {
      const intervalId = setInterval(() => {
        if (checkCalendlyAndInit()) {
          clearInterval(intervalId);
        }
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="beforeInteractive" />
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
    </>
  );
}
