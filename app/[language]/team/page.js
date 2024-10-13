const Team = ({ params }) => {
  return (
    <div className="flex flex-col max-w-[550px] xl:max-w-[650px] w-full gap-4 relative">
      {params.language === "en" && (
        <>
          <div className="bg-black border sticky top-0 border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold">Curriculum Vitae</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">Greek National Wrestling Team</div>
            <div className="rounded text-sm font-light text-gray-300">She served as an assistant coach for the Greek National Wrestling Team and worked as a Personal & Group Trainer at some of Athens' most renowned gyms, specializing in Functional, Cross & Core Training.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">World Championship</div>
            <div className="rounded text-sm font-light text-gray-300">In 2019, she won the silver medal at the World Championship in the Fitness category, representing Greece among 56 countries.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">Superfit Training Studio</div>
            <div className="rounded text-sm font-light text-gray-300">Since 2019, she has been the owner of Superfit Training Studio in Ilion, where she offers fitness, nutrition, and chiropractic services.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - 2019</div>
            <div className="rounded text-sm font-light text-gray-300">Collaborated with Athens' largest gyms, creating dynamic group training programs.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2013 - 2016</div>
            <div className="rounded text-sm font-light text-gray-300">Assistant coach for the Greek National Wrestling Team.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Present</div>
            <div className="rounded text-sm font-light text-gray-300">Specializes in Functional, Cross & Core Training, designing and guiding exercise programs for special populations and rehabilitation of musculoskeletal issues.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Present</div>
            <div className="rounded text-sm font-light text-gray-300">Founder and Trainer of the Outdoor Training Piraeus team. Organizer of free Functional training events at various locations around Attica.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Present</div>
            <div className="rounded text-sm font-light text-gray-300">Contributor to well-known online fitness platforms as a Personal & Fitness Specialist.</div>
          </div>
          <div className="bg-black border border-gray-800 bg-opacity-90 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Present</div>
            <div className="rounded text-sm font-light text-gray-300">Official Fitathlon Trainer.</div>
          </div>
        </>
      )}
      {params.language === "el" && (
        <>
          <div className="bg-black border sticky top-0 border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold">Βιογραφικό</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">Εθνική Ομάδα Πάλης</div>
            <div className="rounded text-sm font-light text-gray-300">Υπήρξε βοηθός προπονητή στην Εθνική Ομάδα Πάλης και εργάστηκε ως Personal & Group Trainer στα πιο γνωστά γυμναστήρια της Αθήνας, εξειδικεύοντας σε Functional, Cross & Core Training.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">Παγκόσμιο Πρωτάθλημα</div>
            <div className="rounded text-sm font-light text-gray-300">Το 2019 κατέκτησε το αργυρό μετάλλιο στο Παγκόσμιο Πρωτάθλημα στην κατηγορία Fitness, εκπροσωπώντας την Ελλάδα ανάμεσα σε 56 χώρες.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">Superfit Training Studio</div>
            <div className="rounded text-sm font-light text-gray-300">Από το 2019 είναι ιδιοκτήτρια του Superfit Training Studio στο Ίλιον, όπου προσφέρει υπηρεσίες γυμναστικής, διατροφής και χειροπρακτικής.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - 2019</div>
            <div className="rounded text-sm font-light text-gray-300">Συνεργάστηκε με τα μεγαλύτερα γυμναστήρια της Αθήνας, δημιουργώντας δυναμικά ομαδικά προγράμματα.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2013 - 2016</div>
            <div className="rounded text-sm font-light text-gray-300">Βοηθός προπονητή στην Εθνική Ομάδα Πάλης.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Σήμερα</div>
            <div className="rounded text-sm font-light text-gray-300">Εξειδίκευση σε Functional, Cross & Core Training, με σχεδιασμό και καθοδήγηση ασκησιολογίου για ειδικές ομάδες ατόμων και αποκατάσταση μυοσκελετικών προβλημάτων.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Σήμερα</div>
            <div className="rounded text-sm font-light text-gray-300">Ιδρύτρια και προπονήτρια της ομάδας Outdoor Training Piraeus. Διοργανώτρια δωρεάν προπονήσεων Functional σε διάφορα σημεία της Αττικής.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Σήμερα</div>
            <div className="rounded text-sm font-light text-gray-300">Αρθρογράφος σε γνωστούς διαδικτυακούς ιστότοπους ως Personal & Fitness Specialist.</div>
          </div>
          <div className="bg-black bg-opacity-90 border border-gray-800 rounded p-4">
            <div className="text-sm text-white font-semibold mb-2">2010 - Σήμερα</div>
            <div className="rounded text-sm font-light text-gray-300">Επίσημη προπονήτρια Fitathlon.</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Team;

/*

      {params.language === "el" && (
        <div className="bg-black p-8 rounded-lg font-geologica text-sm my-8 w-[80%] md:w-[70%] lg:w-[50%] 2xl:my-auto m-auto bg-opacity-75 flex flex-col gap-4 border border-gray-900 text-gray-400">
          <div className="text-justify">
            Η <span className="text-gray-200 font-semibold">{ownerName[params.language]}</span> Γεννήθηκε το 1985 και για 12 χρόνια υπήρξε αθλήτρια κολύμβησης στις κατηγορίες ελεύθερο και ύπτιο, με σειρά διακρίσεων. Υπήρξε <span className="text-gray-200 font-semibold">βοηθός προπονητή στην Εθνική Ομάδα Πάλης</span> και Personal & Group Trainer στα πιο γνωστά γυμναστήρια της Αθήνας, με εξειδίκευση σε Functional, Cross & Core Training προπονήσεις.
          </div>
          <div className="text-justify">
            Το 2019 κατέκτησε το <span className="text-gray-200 font-semibold">αργυρό μετάλλιο στο Παγκόσμιο Πρωτάθλημα</span> στην κατηγορία Fitness, εκπροσωπώντας την Ελλάδα ανάμεσα σε 56 χώρες. Από το 2019 είναι ιδιοκτήτρια του Superfit Training Studio στο Ίλιον, όπου προσφέρει υπηρεσίες γυμναστικής, διατροφής και χειροπρακτικής.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 p-2">
            <div className="text-nowrap min-w-28">2010 - 2019</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Συνεργασία με τα μεγαλύτερα γυμναστήρια της Αθήνας, δημιουργώντας δυναμικά ομαδικά προγράμματα.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 p-2">
            <div className="text-nowrap min-w-28">2013 - 2016</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Βοηθός προπονητή στην Εθνική Ομάδα Πάλης.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 p-2">
            <div className="text-nowrap min-w-28">2010 - Σήμερα</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Εξειδίκευση σε Functional, Cross & Core Training, με σχεδιασμό και καθοδήγηση ασκησιολογίου για ειδικές ομάδες ατόμων, καθώς και αποκατάσταση μυοσκελετικών προβλημάτων.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 p-2">
            <div className="text-nowrap min-w-28">2010 - Σήμερα</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div> Ιδρύτρια και Trainer στην ομάδα Outdoor Training Piraeus. Διοργανώτρια εκδηλώσεων δωρεάν Functional προπονήσεων σε διάφορα σημεία της Αττικής.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 p-2">
            <div className="text-nowrap min-w-28">2010 - Σήμερα</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Αρθρογράφος σε γνωστούς διαδικτυακούς ιστότοπους ως Personal & Fitness Specialist.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 p-2">
            <div className="text-nowrap min-w-28">2010 - Σήμερα</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Επίσημη Fitathlon Trainer.</div>
          </div>
        </div>
      )}
      {params.language === "en" && (
        <div className="bg-black p-8 rounded-lg font-geologica text-sm my-8 w-[80%] md:w-[70%] lg:w-[50%] 2xl:my-auto m-auto bg-opacity-75 flex flex-col gap-4 border border-gray-900 text-gray-400">
          <div className="text-justify">
            <span className="text-gray-200 font-semibold">Georgia Anagnostou</span> was born in 1985 and spent 12 years as a competitive swimmer in freestyle and backstroke categories, achieving numerous distinctions. She served as an <span className="text-gray-200 font-semibold">assistant coach for the Greek National Wrestling Team</span> and worked as a Personal & Group Trainer at some of Athens' most renowned gyms, specializing in Functional, Cross & Core Training.
          </div>
          <div className="text-justify">
            In 2019, she won the <span className="text-gray-200 font-semibold">silver medal at the World Championship</span> in the Fitness category, representing Greece among 56 countries. Since 2019, she has been the owner of Superfit Training Studio in Ilion, where she offers fitness, nutrition, and chiropractic services.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 py-2 px-4">
            <div className="text-nowrap min-w-28">2010 - 2019</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Collaborated with Athens' largest gyms, creating dynamic group training programs.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 py-2 px-4">
            <div className="text-nowrap min-w-28">2013 - 2016</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Assistant coach for the Greek National Wrestling Team.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 py-2 px-4">
            <div className="text-nowrap min-w-28">2010 - Present</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Specializes in Functional, Cross & Core Training, designing and guiding exercise programs for special populations and rehabilitation of musculoskeletal issues.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 py-2 px-4">
            <div className="text-nowrap min-w-28">2010 - Present</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Founder and Trainer of the Outdoor Training Piraeus team. Organizer of free Functional training events at various locations around Attica.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 py-2 px-4">
            <div className="text-nowrap min-w-28">2010 - Present</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Contributor to well-known online fitness platforms as a Personal & Fitness Specialist.</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 border border-gray-400 py-2 px-4">
            <div className="text-nowrap min-w-28">2010 - Present</div>
            <div className="sm:hidden h-[1px] bg-white"></div>
            <div>Official Fitathlon Trainer.</div>
          </div>
        </div>
      )}
      
      */
