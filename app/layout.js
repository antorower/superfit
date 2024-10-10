import { Mansalva, Geologica, Roboto } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Superfit Gym",
  description: "Your dream gym",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mansalva.variable} ${geologica.variable} ${roboto.variable}`}>
      <body className="bg-backgroundDark">{children}</body>
    </html>
  );
}
