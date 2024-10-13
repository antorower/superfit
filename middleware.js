import { NextResponse } from "next/server";
import { languages, defaultLanguage } from "./library/Translations";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  if (pathname === "/manifest.json") return;

  // Έλεγχος αν το path ξεκινάει με μια υποστηριζόμενη γλώσσα
  const pathnameHasLanguage = languages.some((lang) => pathname.startsWith(`/${lang}`) || pathname === `/${lang}`);

  let response;

  if (!pathnameHasLanguage) {
    // Αν το path είναι το root ("/"), ανακατεύθυνση στην προεπιλεγμένη γλώσσα
    if (pathname === "/") {
      response = NextResponse.redirect(new URL(`/${defaultLanguage}`, request.url));
    } else {
      // Αλλιώς, προσθήκη της προεπιλεγμένης γλώσσας στο path
      response = NextResponse.redirect(new URL(`/${defaultLanguage}${pathname}`, request.url));
    }
  } else {
    // Αν το path έχει ήδη γλώσσα, συνεχίζουμε κανονικά
    response = NextResponse.next();
  }

  // Προσθήκη της κεφαλίδας Cache-Control
  response.headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=604800");

  return response;
}

export const config = {
  matcher: [
    // Εξαίρεση των αρχείων με επέκταση (.ico, .jpg, κλπ.) και των στατικών αρχείων
    "/((?!api|_next/static|_next/image|favicon.ico|manifest.json|sitemap.xml|robots.txt|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|mp3|json)$).*)",
  ],
};
