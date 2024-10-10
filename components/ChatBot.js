"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { defaultLanguage } from "@/library/Translations";
import { chatbotData } from "@/library/Translations";
import ChatBotTooltip from "./ChatBotTooltip";
import Chat from "./Chat";

const ChatBot = ({ lang }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [alreadyOpened, setAlreadyOpended] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Νέα κατάσταση για την αλληλεπίδραση
  const [language, setLanguage] = useState(lang ?? defaultLanguage);

  useEffect(() => {
    // Λειτουργία που θα ανιχνεύει την πρώτη αλληλεπίδραση του χρήστη
    const handleUserInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };

    // Προσθήκη event listeners για αλληλεπίδραση (π.χ., κλικ ή πληκτρολόγηση)
    window.addEventListener("click", handleUserInteraction);
    window.addEventListener("keydown", handleUserInteraction);

    // Λογική για την αναπαραγωγή του ήχου αφού εμφανιστεί το μήνυμα
    const timer = setTimeout(() => {
      if (hasInteracted && !isExpanded) {
        const audio = new Audio("/chat-sound.mp3");
        setShowMessage(true);
        audio.play().catch((error) => {
          console.error("Failed to play the sound:", error);
        });
      }
    }, 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("click", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [hasInteracted]);

  // Variants for the animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 100, // ξεκινάει εκτός οθόνης στα δεξιά
    },
    visible: {
      opacity: 1,
      x: 0, // κινείται στην τελική θέση
      transition: {
        type: "spring", // ρυθμός κίνησης
        stiffness: 50,
        damping: 10,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-4">
      {!isExpanded && showMessage && !alreadyOpened && (
        <ChatBotTooltip>
          <button
            onClick={() => {
              setIsExpanded(true);
              setAlreadyOpended(true);
            }}
          >
            <div className="text-sm select-none font-geologica">{chatbotData.startingMessage[language]}</div>
          </button>
        </ChatBotTooltip>
      )}
      {isExpanded && <Chat language={language} setIsExpanded={setIsExpanded} />}
      {!isExpanded && (
        <motion.button
          onClick={() => {
            setIsExpanded(true);
            setAlreadyOpended(true);
          }}
          whileHover={{ scale: 1.2 }}
          className="rounded-full p-2 relative bg-primary ml-auto"
        >
          <Image src="/icons/robot-dark.svg" width={30} height={30} alt="chatbot-icon" />
          <div className="h-[70%] w-[70%] rounded-full bg-primary animate-ping absolute -z-10 top-[8px]"></div>
        </motion.button>
      )}
    </motion.div>
  );
};

export default ChatBot;
/*

<div className="flex flex-col gap-1">
              <button onClick={() => setLanguage("gr")} className="">
                <Image src="/greece-flag.svg" alt="gr-flag" width={30} height={30} />
              </button>
              <button onClick={() => setLanguage("en")} className="">
                <Image src="/gb-flag.svg" alt="gb-flag" width={30} height={30} />
              </button>
            </div>

            */
