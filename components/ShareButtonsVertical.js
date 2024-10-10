"use client";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, ViberShareButton, ViberIcon, TelegramShareButton, TelegramIcon } from "react-share";
import { motion } from "framer-motion";
import { companyName } from "@/library/Translations";
import { websiteLink } from "@/library/Translations";

const ShareButtonsVertical = () => {
  // Variants for the animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -100, // ξεκινάει εκτός οθόνης στα δεξιά
    },
    visible: {
      opacity: 1,
      x: 0, // κινείται στην τελική θέση
      transition: {
        type: "spring", // ρυθμός κίνησης
        stiffness: 50,
        damping: 10,
        duration: 0.8,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div className="hidden md:flex flex-col gap-4 fixed left-6" variants={containerVariants} initial="hidden" animate="visible">
      {/* Facebook Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <FacebookShareButton url={websiteLink} quote={companyName} aria-label={`Share ${companyName} on Facebook`}>
          <FacebookIcon size={35} round />
        </FacebookShareButton>
      </motion.div>

      {/* X (formerly Twitter) Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <TwitterShareButton url={websiteLink} title={companyName} aria-label={`Share ${companyName} on X`}>
          <TwitterIcon size={35} round />
        </TwitterShareButton>
      </motion.div>

      {/* WhatsApp Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <WhatsappShareButton url={websiteLink} title={companyName} aria-label={`Share ${companyName} on WhatsApp`}>
          <WhatsappIcon size={35} round />
        </WhatsappShareButton>
      </motion.div>

      {/* Viber Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <ViberShareButton url={websiteLink} title={companyName} aria-label={`Share ${companyName} on Viber`}>
          <ViberIcon size={35} round />
        </ViberShareButton>
      </motion.div>

      {/* Telegram Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <TelegramShareButton url={websiteLink} title={companyName} aria-label={`Share ${companyName} on Telegram`}>
          <TelegramIcon size={35} round />
        </TelegramShareButton>
      </motion.div>
    </motion.div>
  );
};

export default ShareButtonsVertical;
