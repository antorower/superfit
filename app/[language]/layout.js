import Image from "next/image";
import PrimaryMenu from "@/components/PrimaryMenu";
import TopBar from "@/components/TopBar";
import { languages, defaultLanguage } from "@/library/Translations";
import ParticlesComponent from "@/components/ParticlesComponent";
import { Mansalva, Geologica, Roboto } from "next/font/google";
import Script from "next/script";
import "../globals.css";

const mansalva = Mansalva({
  weight: "400",
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-mansalva",
});

const geologica = Geologica({
  subsets: ["latin", "greek"],
  display: "swap",
  variable: "--font-geologica",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin", "greek"],
  variable: "--font-roboto",
});

export async function generateStaticParams() {
  return languages.map((language) => ({ language: language }));
}

export async function generateMetadata({ params }) {
  const { language } = params;

  const metadata = {
    el: {
      title: "Superfit Gym | Γυμναστήριο στο Ίλιον",
      description: "Το Superfit Gym στο Ίλιον προσφέρει σύγχρονα προγράμματα fitness, όπως Ελεύθερα Βάρη, Personal Training, και Ομαδική Προπόνηση. Επισκεφθείτε μας στη Δημητσάνας 13, Ίλιον 131 22.",
    },
    en: {
      title: "Superfit Gym | Fitness Studio in Ilion",
      description: "Superfit Gym in Ilion offers modern fitness programs such as Free Weights, Personal Training, and Group Training. Visit us at Dimitsanas 13, Ilion 131 22, Greece.",
    },
  };

  const siteUrl = "https://www.superfitgym.gr";

  return {
    metadataBase: new URL(siteUrl),
    title: metadata[language]?.title,
    description: metadata[language]?.description,
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: `${siteUrl}/${language}`,
      languages: {
        el: `${siteUrl}/el`,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: metadata[language]?.title,
      description: metadata[language]?.description,
      url: `${siteUrl}/${language}`,
      siteName: "Superfit Gym",
      images: [
        {
          url: `${siteUrl}/gym-image.jpg`,
          width: 1200,
          height: 630,
          alt: language === "el" ? "Superfit Gym Εικόνα" : "Superfit Gym Image",
        },
      ],
      locale: language === "el" ? "el_GR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata[language]?.title,
      description: metadata[language]?.description,
      images: [`${siteUrl}/gym-image-twitter.jpg`],
      creator: "@superfitgym",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "bJyc8L9T3LmYAJLgJReISuxKWEBqklCs_rDBqMZe4o4",
    },
  };
}

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 10,
};

export default function RootLayout({ children, params }) {
  const { language } = params;

  return (
    <html lang={language} className={`${mansalva.variable} ${geologica.variable} ${roboto.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta charSet="utf-8" />
      </head>
      <body className="bg-backgroundDark">
        <noscript>
          <div className="p-4 bg-red-500 text-white text-center">Για την καλύτερη εμπειρία στο Superfit Gym, παρακαλούμε ενεργοποιήστε τη JavaScript στον browser σας.</div>
        </noscript>
        <div className="grid grid-rows-[auto_1fr_auto] h-dvh font-geologica">
          <div>
            <TopBar language={language ?? defaultLanguage} />
          </div>
          <main className="overflow-y-auto">{children}</main>
          <div>
            <PrimaryMenu language={language ?? defaultLanguage} />
          </div>
          <div className="-z-40" aria-hidden="true">
            <ParticlesComponent />
          </div>
          <Image src="/gym-background.webp" fill style={{ objectFit: "cover" }} priority quality={25} alt="" className="opacity-50 filter grayscale fixed inset-0 -z-50" aria-hidden="true" />
        </div>
        <Script
          id="schema-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GymOrFitnessCenter",
              name: "Superfit Gym",
              image: "https://www.superfitgym.gr/gym-image.jpg",
              logo: "https://www.superfitgym.gr/icons/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dimitsanas 13",
                addressLocality: "Ilion",
                postalCode: "131 22",
                addressCountry: "GR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.025054,
                longitude: 23.629332,
              },
              url: "https://www.superfitgym.gr",
              telephone: "+306974008881",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+306974008881",
                contactType: "Customer Service",
                areaServed: "GR",
                availableLanguage: ["Greek", "English"],
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "Closed",
                  closes: "Closed",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Monday",
                  opens: "17:30",
                  closes: "22:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Tuesday",
                  opens: "09:00",
                  closes: "11:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Tuesday",
                  opens: "17:30",
                  closes: "22:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "09:00",
                  closes: "11:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Wednesday",
                  opens: "17:30",
                  closes: "22:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Thursday",
                  opens: "09:00",
                  closes: "11:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Thursday",
                  opens: "17:30",
                  closes: "22:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "09:00",
                  closes: "11:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "17:30",
                  closes: "22:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "11:00",
                  closes: "13:00",
                },
              ],
              sameAs: ["https://www.facebook.com/superfit.training.studio", "https://www.instagram.com/superfit_training_studio", "https://www.tiktok.com/@be_superfit"],
            }),
          }}
          lang={language}
        />
      </body>
    </html>
  );
}

/*
      yandex: "",
      bing: "",
      */
