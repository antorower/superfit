import Image from "next/image";
import Link from "next/link";
import Service from "@/components/Service";

export async function generateMetadata({ params }) {
  const { language } = params;

  const metadata = {
    el: {
      title: "Υπηρεσίες | Superfit Gym",
      description: "Ανακαλύψτε τις υπηρεσίες μας: Ελεύθερα Βάρη, Personal Training, Χειροπρακτική, Διατροφή/Λιπομέτρηση, Spinning, και Ομαδική Προπόνηση στο Superfit Gym στο Ίλιον.",
    },
    en: {
      title: "Services | Superfit Gym",
      description: "Discover our services: Free Weights, Personal Training, Chiropractic, Nutrition/Body Fat Measurement, Spinning, and Group Training at Superfit Gym in Ilion.",
    },
  };

  return {
    title: metadata[language]?.title || metadata.el.title,
    description: metadata[language]?.description || metadata.el.description,
    alternates: {
      languages: {
        el: "/el",
        en: "/en",
      },
    },
  };
}

const Services = ({ params }) => {
  return (
    <div className="animate-fadeIn overflow-y-auto h-full text-white gap-8 grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center m-auto max-w-5xl">
      <Service
        language={params.language}
        icon="/icons/weight-gym.svg"
        title={{ el: "Ελεύθερα Βάρη", en: "Free Weights" }}
        description={{
          el: "Ενίσχυσε τη δύναμή σου και βελτίωσε τη φυσική σου κατάσταση με τα ελεύθερα βάρη του SuperFit. Πρόσβαση σε πλήρως εξοπλισμένο χώρο με σύγχρονα μηχανήματα.",
          en: "Boost your strength and improve your fitness with SuperFit's free weights. Access a fully equipped space with modern machines.",
        }}
      />

      <Service
        language={params.language}
        icon="/icons/strong.svg"
        title={{ el: "Personal Training", en: "Personal Training" }}
        description={{
          el: "Εξατομικευμένες προπονήσεις για γρήγορα αποτελέσματα. Οι έμπειροι προπονητές μας σε καθοδηγούν για να πετύχεις τους στόχους σου, στον άνετο χώρο του γυμναστηρίου.",
          en: "Personalized workouts for quick results. Our skilled trainers guide you to achieve your goals in the comfort of our gym space.",
        }}
      />

      <Service
        language={params.language}
        icon="/icons/doctor-bag.svg"
        title={{ el: "Χειροπρακτική", en: "Chiropractic" }}
        description={{
          el: "Ανακούφισε τους πόνους και αποκατάστησε την ισορροπία του σώματός σου με επαγγελματικές συνεδρίες χειροπρακτικής. Βελτίωσε την κίνηση και την ευεξία σου.",
          en: "Relieve pain and restore your body's balance with professional chiropractic sessions. Enhance your movement and overall wellness.",
        }}
      />

      <Service
        language={params.language}
        icon="/icons/food.svg"
        title={{ el: "Διατροφή / Λιπομέτρηση", en: "Nutrition / Body Fat" }}
        description={{
          el: "Αξιολόγησε το σωματικό σου λίπος και λάβε εξατομικευμένες διατροφικές συμβουλές για άμεσα αποτελέσματα. Επιστημονική προσέγγιση για τη βελτίωση της φυσικής σου κατάστασης.",
          en: "Assess your body fat and receive personalized nutrition advice for quick results. A scientific approach to improving your fitness.",
        }}
      />

      <Service
        language={params.language}
        icon="/icons/spinning.svg"
        title={{ el: "Spinning", en: "Spinning" }}
        description={{
          el: "Ανεβασμένα vibes και ενέργεια! Απόλαυσε δυναμικά μαθήματα spinning με καθοδήγηση από έμπειρους εκπαιδευτές, για καύση λίπους και ενδυνάμωση.",
          en: "High vibes and energy! Enjoy dynamic spinning classes with guidance from skilled instructors, for fat burning and strength building.",
        }}
      />

      <Service
        language={params.language}
        icon="/icons/group.svg"
        title={{ el: "Ομαδική Προπόνηση", en: "Group Training" }}
        description={{
          el: "Γυμνάσου σε ομάδα και απόλαυσε την ενέργεια της παρέας! Οι προπονήσεις μας συνδυάζουν ένταση και διασκέδαση, με στόχο τη βελτίωση της φυσικής κατάστασης.",
          en: "Train in a group and enjoy the energy of teamwork! Our sessions combine intensity and fun, aiming to improve your physical condition.",
        }}
      />
    </div>
  );
};

export default Services;
