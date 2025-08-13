import BookupEmbed from "@/components/Bookup";

const Bookup = () => {
  return (
    <main className="container mx-auto px-4 py-8">
      <BookupEmbed url="https://www.bookup.gr/superfit" />
      {/* Προαιρετικό fallback link αν κάτι μπλοκάρει τα scripts */}
      <noscript>
        <a href="https://www.bookup.gr/superfit" target="_blank" rel="noreferrer">
          Άνοιξε το Superfit στο bookup.gr
        </a>
      </noscript>
    </main>
  );
};

export default Bookup;
