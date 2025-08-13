"use client";

import { useState } from "react";
import Script from "next/script";

export default function BookupEmbed({ url }) {
  const [jqReady, setJqReady] = useState(false);

  return (
    <div className="w-full">
      {/* Placeholder που θα γεμίσει το embed.js */}
      <div id="sa-embed" className="direct-load" data-url={url} style={{ minHeight: 400 }} />

      {/* 1) jQuery από bookup.gr */}
      <Script id="bookup-jquery" src="https://www.bookup.gr/includes/vendor/jquery/jquery.min.js?1755005436" strategy="afterInteractive" onLoad={() => setJqReady(true)} />

      {/* 2) embed.js ΜΟΝΟ αφού φορτώσει πρώτα το jQuery */}
      {jqReady && <Script id="bookup-embed" src="https://www.bookup.gr/includes/js/embed.js?1755005436" strategy="afterInteractive" />}
    </div>
  );
}
