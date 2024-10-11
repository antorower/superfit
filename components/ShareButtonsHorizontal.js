"use client";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon, ViberShareButton, ViberIcon, TelegramShareButton, TelegramIcon } from "react-share";
import { motion } from "framer-motion";
import { companyName } from "@/library/Translations";

const ShareButtonsHorizontal = () => {
  const shareUrl = "https://superfitgym.gr";
  const title = "SuperFit Gym";

  // Variants for the animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 1,
      },
    },
  };

  return (
    <motion.div className="flex justify-center items-center lg:justify-start gap-4" variants={containerVariants} initial="hidden" animate="visible">
      {/* Facebook Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <FacebookShareButton url={shareUrl} quote={title} aria-label={`Share ${companyName} on Facebook`} className="flex items-center">
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </motion.div>

      {/* X (formerly Twitter) Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <TwitterShareButton url={shareUrl} title={title} aria-label={`Share ${companyName} on Twitter`} className="flex items-center">
          <TwitterIcon size={30} round />
        </TwitterShareButton>
      </motion.div>

      {/* WhatsApp Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <WhatsappShareButton url={shareUrl} title={title} aria-label={`Share ${companyName} on WhatsApp`} className="flex items-center">
          <WhatsappIcon size={30} round />
        </WhatsappShareButton>
      </motion.div>

      {/* Viber Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <ViberShareButton url={shareUrl} title={title} aria-label={`Share ${companyName} on Viber`} className="flex items-center">
          <ViberIcon size={30} round />
        </ViberShareButton>
      </motion.div>

      {/* Telegram Share */}
      <motion.div whileHover={{ scale: 1.1, rotate: "360deg", transition: { duration: 0.3 } }}>
        <TelegramShareButton url={shareUrl} title={title} aria-label={`Share ${companyName} on Telegram`} className="flex items-center">
          <TelegramIcon size={30} round />
        </TelegramShareButton>
      </motion.div>
    </motion.div>
  );
};

export default ShareButtonsHorizontal;
