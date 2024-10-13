export const companyName = "Superfit Gym";
export const websiteLink = "https://www.superfitgym.gr";
export const ownerName = {
  el: "Γεωργία Αναγνώστου",
  en: "Georgia Anagnostou",
};
export const title = {
  el: "Προπονήτρια",
  en: "Fitness Coach",
};
export const email = "placeholder@gmail.com";
export const telephone = "+309984745214";

export const languages = ["el", "en"];
export const defaultLanguage = "el";

export const homePageText = {
  el: {
    titleLeft: "ΓΙΝΕ Η",
    titleMiddle: "ΚΑΛΥΤΕΡΗ",
    titleRight: "ΕΚΔΟΧΗ ΤΟΥ ΕΑΥΤΟΥ ΣΟΥ",
    subtitle: "Νιώσε την αδρεναλίνη να σε οδηγεί κάθε μέρα πιο κοντά στους στόχους σου!",
    callToAction1: "Κάλεσε μας",
    callToAction2: "Υπηρεσίες",
    altLogo: `λογότυπο ${companyName}`,
  },
  en: {
    titleLeft: "GETTING",
    titleMiddle: "STRONGER",
    titleRight: "EVERY SINGLE DAY",
    subtitle: "Commit to the journey, stay dedicated, and watch your body transform and your confidence soar!",
    callToAction1: "Call Now",
    callToAction2: "Offers",
    altLogo: `${companyName} logo`,
  },
};

export const primaryMenu = [
  {
    name: {
      el: "Αρχική",
      en: "Home",
    },
    alt: {
      el: `Αρχική Σελίδα - ${companyName}`,
      en: `Home - ${companyName}`,
    },
    href: "/",
    icon: "/icons/home.svg",
    image: "/gym-background-small.webp",
    iconHover: "/icons/home-yellow.svg",
    size: 34,
    phone: true,
    tablet: true,
    pc: true,
  },
  {
    name: {
      el: "Υπηρεσίες",
      en: "Services",
    },
    alt: {
      el: `Υπηρεσίες - ${companyName}`,
      en: `Services - ${companyName}`,
    },
    href: "/services",
    icon: "/icons/weight.svg",
    image: "/.webp",
    iconHover: "/icons/weight-yellow.svg",
    size: 34,
    phone: true,
    tablet: true,
    pc: true,
  },
  {
    name: {
      el: "Επικοινωνία",
      en: "Contact",
    },
    alt: {
      el: `Επικοινωνία - ${companyName}`,
      en: `Contact - ${companyName}`,
    },
    href: "/contact",
    icon: "/icons/map.svg",
    image: "/.webp",
    iconHover: "/icons/map-yellow.svg",
    size: 34,
    phone: true,
    tablet: true,
    pc: true,
  },
];

export const secondaryMenu = [
  {
    name: {
      el: "Ποιοί είμαστε",
      en: "Your coach",
    },
    href: "/team",
    image: "/gym-background.webp",
    alt: {
      el: `Ποιοί είμαστε - ${companyName}`,
      en: `Your coach - ${companyName}`,
    },
  },
  {
    name: {
      el: "Αξιολογήσεις",
      en: "Testimonials",
    },
    href: "/testimonials",
    image: "/gym-background.webp",
    alt: {
      el: `Αξιολογήσεις - ${companyName}`,
      en: `Testimonials - ${companyName}`,
    },
  },
];

export const chatbotData = {
  name: "FitBot",
  sendButton: {
    el: "Αποστολή",
    en: "Send",
  },
  startingMessage: {
    el: "Γεια σου! Πώς μπορώ να σε εξυπηρετήσω;",
    en: "Hey there! How can i help you today?",
  },
  initialMessage: {
    el: "Καλωσόρισες στην οικογένεια του Superfit. Πώς μπορώ να σε βοηθήσω;",
    en: "",
  },
  options: {
    el: [
      { id: 10, text: "Υπηρεσίες", options: [11, 12, 13, 14, 15, 16], answer: "Στην SuperFit, προσφέρουμε μια μεγάλη γκάμα υπηρεσιών που θα καλύψουν κάθε ανάγκη σου για άσκηση και ευεξία. Ρίξε μια ματιά στις επιλογές μας!" },
      { id: 11, text: "Γυμναστήριο", options: [], answer: "Το SuperFit διαθέτει έναν πλήρως εξοπλισμένο και σύγχρονο χώρο γυμναστικής. Κόστος συμμετοχής: 30€/μήνα. Ελάτε να ζήσετε την εμπειρία μας!" },
      { id: 12, text: "Personal Training", options: [121, 122, 123], answer: "Προσαρμοσμένο στα μέτρα σου, το personal training σου δίνει το κάτι παραπάνω για να πετύχεις τους στόχους σου." },
      { id: 16, text: "Group Training", options: [], answer: "Το Group Training είναι ένας διασκεδαστικός και αποδοτικός τρόπος άσκησης σε μικρές ομάδες, υπό την καθοδήγηση προπονητή. Το κόστος είναι 8€/άτομο για 4 άτομα, 7€/άτομο για 5 άτομα, και 5€/άτομο για ομάδες άνω των 5 ατόμων." },
      { id: 121, text: "Στο Γυμναστήριο", options: [], answer: "Personal training μέσα στο γυμναστήριο μας με τιμή 15€/συνεδρία. Πακέτα: 8 προπονήσεις/μήνα στα 20€. Κάθε 4 επιπλέον προπονήσεις/μήνα κοστίζουν μόνο 5€ παραπάνω." },
      { id: 122, text: "Outdoor", options: [], answer: "Personal training στον δικό σου χώρο με τιμή 30€/συνεδρία. Πακέτα: 8 προπονήσεις/μήνα στα 40€/εβδομάδα. Για κάθε 4 επιπλέον προπονήσεις/μήνα, η επιπλέον χρέωση είναι 10€." },
      { id: 123, text: "Online", options: [], answer: "Online personal training με τιμή 30€/συνεδρία. Πακέτα: 8 προπονήσεις/μήνα στα 40€/εβδομάδα. Κάθε 4 επιπλέον προπονήσεις/μήνα χρεώνονται 10€ παραπάνω." },
      { id: 13, text: "Χειροπρακτική", options: [], answer: "Η χειροπρακτική εστιάζει στην υγεία της σπονδυλικής στήλης και του νευρικού συστήματος. Κόστος: 60€/συνεδρία. Κάλεσέ μας στο 6974008881 για να κλείσεις το ραντεβού σου." },
      { id: 14, text: "Λιπομέτρηση", options: [], answer: "Η λιπομέτρηση προσφέρει αναλυτική εικόνα του ποσοστού λίπους στο σώμα σου. Κόστος: 30€/συνεδρία. Κάλεσέ μας στο 6974008881 για ραντεβού." },
      { id: 15, text: "Spinning", options: [], answer: "Το spinning είναι έντονη αερόβια άσκηση υπό τις οδηγίες του γυμναστή μας. Κόστος: 7€/30 λεπτά. Κλείσε το ραντεβού σου στο 6974008881." },

      { id: 20, text: "Επικοινωνία", options: [], answer: "Μπορείς να μας καλέσεις στο 6974008881 για ό,τι χρειαστείς!" },

      { id: 30, text: "Χάρτης", options: [], answer: "Επισκέψου μας εύκολα μέσω Google Maps!" },

      { id: 40, text: "Κόστος", options: [11, 12, 13, 14, 15], answer: "Για ποια υπηρεσία θα ήθελες να μάθεις το κόστος; Διάλεξε από τις επιλογές μας!" },

      { id: 50, text: "Χώρος", options: [], answer: "Ο χώρος μας είναι σύγχρονος, άνετος και ιδανικός για να πετύχεις τους στόχους σου." },

      { id: 60, text: "Ωράριο", options: [], answer: "Δευτέρα: 17:30 - 22:30 | Τρίτη-Παρασκευή: 9:00 - 11:00 και 17:30 - 22:30 | Σάββατο: 11:00 - 13:00 | Κυριακή: Κλειστά" },

      { id: 70, text: "Προπονητής", options: [], answer: "Η Γεωργία Αναγνώστου, γεννημένη το 1985, είναι έμπειρη προπονήτρια με 12 χρόνια αγωνιστικής κολύμβησης και εξειδίκευση στη λειτουργική και core προπόνηση." },

      { id: 80, text: "Δωρεάν Προπόνηση", options: [], answer: "Νέος πελάτης; Κάλεσέ μας στο 6974008881 για μία εντελώς δωρεάν δοκιμαστική προπόνηση!" },

      { id: 90, text: "Προϊόντα", options: [], answer: "Δες τα προϊόντα μας στον παρακάτω σύνδεσμο και ανακάλυψε τα καλύτερα εργαλεία για την προπόνησή σου." },

      { id: 100, text: "Αξιολογήσεις", options: [], answer: "Το SuperFit έχει εκατοντάδες ευχαριστημένους πελάτες. Δες τι λένε για εμάς και έλα να γίνεις κι εσύ μέλος της ομάδας μας!" },
    ],
    en: [
      { id: 10, text: "Services", options: [11, 12, 13, 14, 15, 16], answer: "At SuperFit, we offer a wide range of services tailored to meet all your fitness and wellness needs. Check out our options below!" },
      { id: 11, text: "Gym", options: [], answer: "SuperFit features a fully equipped, modern gym. Membership costs: €30/month. Come and experience our facility!" },
      { id: 12, text: "Personal Training", options: [121, 122, 123], answer: "Personal training is tailored to you, offering the extra push you need to achieve your goals." },
      { id: 16, text: "Group Training", options: [], answer: "Group Training is a fun and effective way to work out in small groups, guided by a trainer. The cost is €8 per person for 4 people, €7 per person for 5 people, and €5 per person for groups larger than 5." },
      { id: 121, text: "At the Gym", options: [], answer: "We offer personal training at our gym for €15 per session. Packages: 8 sessions/month for €20. Each additional 4 sessions/month costs just €5 extra." },
      { id: 122, text: "Outdoor", options: [], answer: "We offer personal training at your location for €30 per session. Packages: 8 sessions/month for €40/week. Each additional 4 sessions/month is just €10 extra." },
      { id: 123, text: "Online", options: [], answer: "We offer online personal training for €30 per session. Packages: 8 sessions/month for €40/week. Each additional 4 sessions/month is just €10 extra." },
      { id: 13, text: "Chiropractic", options: [], answer: "Chiropractic care focuses on spinal and nervous system health. Cost: €60/session. Call us at 6974008881 to book your appointment." },
      { id: 14, text: "Body Fat Measurement", options: [], answer: "Body fat measurement provides a detailed look at your body fat percentage. Cost: €30/session. Call us at 6974008881 to schedule your appointment." },
      { id: 15, text: "Spinning", options: [], answer: "Spinning is an intense aerobic workout guided by our trainers. Cost: €7 for 30 minutes. Call 6974008881 to book your spot." },

      { id: 20, text: "Contact", options: [], answer: "You can reach us at 6974008881 for any inquiries!" },

      { id: 30, text: "Map", options: [], answer: "Visit us easily using Google Maps!" },

      { id: 40, text: "Cost", options: [11, 12, 13, 14, 15], answer: "Which service would you like to know the cost for? Choose from our options!" },

      { id: 50, text: "Facilities", options: [], answer: "Our space is modern, comfortable, and the perfect place to achieve your fitness goals." },

      { id: 60, text: "Schedule", options: [], answer: "Monday: 17:30 - 22:30 | Tuesday-Friday: 9:00 - 11:00 and 17:30 - 22:30 | Saturday: 11:00 - 13:00 | Sunday: Closed" },

      { id: 70, text: "Trainer", options: [], answer: "Georgia Anagnostou, born in 1985, is an experienced coach with 12 years of competitive swimming and specialization in functional and core training." },

      { id: 80, text: "Free Training", options: [], answer: "New to SuperFit? Call us at 6974008881 for a completely free trial session!" },

      { id: 90, text: "Products", options: [], answer: "Check out our products via the link below and discover the best tools for your workout." },

      { id: 100, text: "Reviews", options: [], answer: "SuperFit has hundreds of satisfied clients. Want to see what they have to say? Join us and become part of our community!" },
    ],
  },
};

export const businessHours = [
  {
    day: {
      el: "Δευτέρα",
      en: "Monday",
    },
    openHours: {
      el: ["-", "17:30 - 22:30"],
      en: ["-", "17:30 - 22:30"],
    },
  },
  {
    day: {
      el: "Τρίτη",
      en: "Tuesday",
    },
    openHours: {
      el: ["9:00 - 11:00", "17:30 - 22:30"],
      en: ["9:00 - 11:00", "17:30 - 22:30"],
    },
  },
  {
    day: {
      el: "Τετάρτη",
      en: "Wednesday",
    },
    openHours: {
      el: ["9:00 - 11:00", "17:30 - 22:30"],
      en: ["9:00 - 11:00", "17:30 - 22:30"],
    },
  },
  {
    day: {
      el: "Πέμπτη",
      en: "Thursday",
    },
    openHours: {
      el: ["9:00 - 11:00", "17:30 - 22:30"],
      en: ["9:00 - 11:00", "17:30 - 22:30"],
    },
  },
  {
    day: {
      el: "Παρασκευή",
      en: "Friday",
    },
    openHours: {
      el: ["9:00 - 11:00", "17:30 - 22:30"],
      en: ["9:00 - 11:00", "17:30 - 22:30"],
    },
  },
  {
    day: {
      el: "Σάββατο",
      en: "Saturday",
    },
    openHours: {
      el: ["11:00 - 13:00", "-"],
      en: ["11:00 - 13:00", "-"],
    },
  },
  {
    day: {
      el: "Κυριακή",
      en: "Sunday",
    },
    openHours: {
      el: ["-", "-"],
      en: ["-", "-"],
    },
  },
];

export const profile = {
  subtitle: {
    el: "Ο στόχος μας είναι να βοηθήσουμε τα μέλη μας να βελτιώσουν τη φυσική τους κατάσταση και να πετύχουν τους στόχους τους μέσα από εξατομικευμένη και ομαδική προπόνηση.",
    en: "Our goal is to help our members improve their fitness and achieve their goals through personalized and group training.",
  },
  tags: {
    el: ["γυμναστήριο", "personal training", "χειροπκρατική", "λιπομέτρηση", "spinning", "group training"],
    en: ["gym", "personal training", "chiropractic", "fat measurement", "spinning", "group training"],
  },
  about: {
    title: {
      el: "Για εμάς",
      en: "About",
    },
    text: {
      el: "Γεννήθηκε το 1985 και πέρασε 12 χρόνια ως αθλήτρια κολύμβησης σε αγωνίσματα ελεύθερου και ύπτιου, κατακτώντας πολυάριθμες διακρίσεις.",
      en: "Was born in 1985 and spent 12 years as a competitive swimmer in freestyle and backstroke categories, achieving numerous distinctions.",
    },
  },
  vision: {
    title: {
      el: "Το όραμά μας",
      en: "Our Vision",
    },
    text: {
      el: "Το όραμά μας είναι να δημιουργήσουμε έναν χώρο όπου κάθε άτομο, ανεξάρτητα από το επίπεδο φυσικής κατάστασης, θα μπορεί να επιτύχει τους στόχους του με καθοδήγηση και υποστήριξη. Δεσμευόμαστε να προσφέρουμε ένα περιβάλλον που ενθαρρύνει την προσωπική ανάπτυξη και την υγεία.",
      en: "Our vision is to create a space where every individual, regardless of fitness level, can achieve their goals with guidance and support. We are committed to providing an environment that fosters personal growth and well-being.",
    },
    question: {
      el: "Γίνε μέλος της ομάδας μας σήμερα!",
      en: "Would you like to become a member of the family?",
    },
    callToAction: {
      el: "Κάλεσέ μας",
      en: "Call Now",
    },
  },
};

export const testimonials = [
  {
    name: "Μαρια Κουτρα",
    link: "https://g.co/kgs/w9bQPXA",
    text: "Πολύ περιποιημένος και σύγχρονος χώρος, το πρόγραμμα προσαρμόζεται καθαρά στις ανάγκες του κάθε σώματος, δυνατότητα για εξατομικευμένο πρόγραμμα διατροφής!! Η Γεωργία πολύ φιλική και με χιούμορ αλλά κυρίως γνώστης του αντικειμένου!",
  },
  {
    name: "Eugenia Aggelopoulou",
    link: "https://g.co/kgs/vtnxya7",
    text: "Το καλύτερο γυμναστήριο με τους καλύτερους και πιο κατάλληλους γυμναστές! Καθοδηγούν και σχεδιάζουν κατάλληλο πρόγραμμα προσαρμοσμένο στις ανάγκες του καθενός με τα καλύτερα αποτελέσματα!",
  },
  {
    name: "Konstantina Kahileli",
    link: "https://g.co/kgs/BCBJL5D",
    text: "Το καλύτερο γυμναστήριο με τους καταλληλότερους γυμναστές! Για την Γεωργία τι να πρωτοπώ, το πόσο θετικός άνθρωπος είναι, πόσο εξαιρετική γυμνάστρια, πόσο επαγγελματίας, που στοχεύει στις ανάγκες μας περισσότερο από εμάς;!!! Την αγαπώ και δεν θα την άλλαζα με κανέναν γυμναστή και κανένα γυμναστήριο",
  },
  {
    name: "foteini",
    link: "https://g.co/kgs/YbrzqR6",
    text: "Φοβερό μέρος για κάποιον που θέλει να γυμνάστει σωστά !!! Η Γεωργία σπουδαίος άνθρωπος και φοβερή επαγγελματίας !! Προτείνεται ανεπιφύλακτα !!!!",
  },
  {
    name: "Ευγενία Τζιτζίρογλου",
    link: "https://g.co/kgs/udXFb1Z",
    text: "Επιμελημένος και καθαρός χώρος. Η Γεωργία είναι μια εξαιρετική επαγγελματίας. Το συνιστώ ανεπιφύλακτα!",
  },
  {
    name: "Xaroula Raftopoulou",
    link: "https://g.co/kgs/5ycxvMD",
    text: "Υπέροχος χώρος, ευχάριστο κλίμα και εξαιρετική επαγγελματίας η Γεωργία! ❤️ Κατανοεί, καθοδηγεί και σχεδιάζει κατάλληλο πρόγραμμα προσαρμοσμένο στις ανάγκες του καθενός με τα καλύτερα αποτελέσματα! Τοπ! 👏",
  },
  {
    name: "Yiannis Panopoulos",
    link: "https://g.co/kgs/2oQU2fm",
    text: "Γυμναστική ;; Ούτε καν έλεγα πριν 2 χρόνια. Τώρα σχεδόν κάθε μέρα γυμνάζομαι με την καλύτερη ομάδα . Τα αποτελέσματα του σώματος μου και όχι μόνο σας προκαλώ να τα δείτε στα social μου . Superfit let’s start",
  },
  {
    name: "Αντιγόνη Παπαγεωργίου",
    link: "https://g.co/kgs/AYTKy5w",
    text: "Πολύ ωραίος χώρος και η γυμνάστρια είναι σούπερ! Σε επιβλέπει συνέχεια, έχει ποικιλία σε ασκήσεις κ κάνει πολύ ωραίο μάθημα!!!!!!!",
  },
  {
    name: "Paris Fressa",
    link: "https://g.co/kgs/9dM4Xkj",
    text: "Αρχικά τι να πω γι αυτό το κορίτσι απλά την αγαπώ ,επαγγελματίας και Φυσικά μόνο και μόνο που είναι εκεί και σου δίνει οδηγίες βλεπεις αμεσα αποτελέσματα ,αστέρι !!!ομορφος χώρος ,καθαρός ,υπέροχο κλίμα !!!10🌟",
  },
  {
    name: "Χριστίνα Μπέλεση",
    link: "https://g.co/kgs/4xC29SE",
    text: "Ότι καλύτερο έχω συναντήσει από όλες τις απόψεις!! Συγχαρητήρια στην προπονήτρια μας.. είναι σπάνια στο είδος της!!! 💜",
  },
  {
    name: "Αργυρώ Μπαλιου",
    link: "https://g.co/kgs/iJf9wC6",
    text: "Φοβερή επαγγελματίας η Γιωργια.Στοχευει στις ανάγκες του καθενός και πραγματικά αλλάζει σώματα σε σύντομο χρονικό διάστημα!!!!!Τέλεια σε όλα της!!!!",
  },
  {
    name: "Athanasia Gkeli",
    link: "https://g.co/kgs/E51SJQp",
    text: "Όμορφος χώρος!Η προπονήτρια εστιάζει πάνω σου ανάλογος τις ανάγκες που έχεις και για αυτόν το λόγο τα αποτελέσματα ειναι άμεσα!καθε προπόνηση ειναι μοναδική…Με διαφορά ένα ξεχωριστό personal training room!",
  },
  {
    name: "Αθηνα",
    link: "https://g.co/kgs/pKGqDFe",
    text: ".....καταρχήν,δε νιώθω ότι πηγαίνω γυμναστήριο, αισθάνομαι ότι πάω να δω μια φίλη, που θα με ζορίσει να γίνω καλύτερη!Νομίζω ότι η Γεωργία ξέρει να μας πιέζει τόσο ώστε να βγάζει το δυνατότερο εαυτό μας,άσε που γελάμε ΠΟΛΥ!! Σ' ευχαριστώ babe,δεν το έχω μετανιώσει στιγμή.....❤️",
  },
  {
    name: "Hlias P.",
    link: "https://g.co/kgs/pBs2VEs",
    text: "Φοβερή η Γεωργία και σε συνδυασμό με ένα πολύ όμορφο χώρο κάνεις τη γυμναστική σου πολύ ευχάριστα.",
  },
  {
    name: "vasi lena",
    link: "https://g.co/kgs/QamhLa2",
    text: "Ωραίος χώρος-καθαρος-δροσερος τωρα το καλοκαίρι...πολύ καλοί γυμναστές!!!",
  },
  {
    name: "Stela Chartofili",
    link: "https://g.co/kgs/7WYoXRm",
    text: "Είμαι απόλυτα ευχαριστημένη γιατί νιώθω ότι γίνεται δουλειά στο σώμα μου χωρίς ιδιαίτερο κόπο....με σωστή μέθοδο και την σωστή καθοδήγηση της εμπειρηςγυμναστριας μου.. Georgia Anagnostou!!!!Άψογη επαγγελματίας και ωραίος άνθρωπος!!!!",
  },
  {
    name: "Ειρήνη Π.",
    link: "https://g.co/kgs/wFDe59C",
    text: "Πολυ ωραιος και καθαρος χωρος.Η κυρια Γεωργία εξαιρετική και ενθαρρυντική!!",
  },
  {
    name: "Γεωργία Αμπελάκη",
    link: "https://g.co/kgs/RuPCbss",
    text: "Εξαιρετικη η Γεωργία, επαγγελματίας και δουλευει πανω στις αναγκες σοθ. Πραγματικα αλλαζει σώματα 👍👍👍",
  },
  {
    name: "bessy do",
    link: "https://g.co/kgs/Hie7sr5",
    text: "Εξαιρετικός χώρος και φοβερή επαγγελματίας η Γεωργία! Το συστήνω!!",
  },
  {
    name: "Ευάγγελος Καλλιαμπετσος",
    link: "https://g.co/kgs/c8iKMYL",
    text: "Η σωστή γυμναστική στο σωστό μέρος με τον σωστό άνθρωπο !! Εμπιστευθείτε ανεπιφύλακτα",
  },
  {
    name: "Ελένη Αναστοπούλου",
    link: "https://g.co/kgs/3nTnHpJ",
    text: "Οτι καλύτερο στο personal training!",
  },
];

const test = "";
