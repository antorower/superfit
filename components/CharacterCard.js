"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CharacterCard = () => {
  return (
    <motion.div
      whileHover={{ rotateX: 30 }} // Περιστροφή 30 μοιρών κατά τον άξονα X
      className="rounded w-40 h-80 relative"
    >
      <Image src="/georgia-effect-background.webp" fill style={{ objectFit: "cover" }} priority quality={25} alt="" className="fixed inset-0 rounded-xl" />
    </motion.div>
  );
};

export default CharacterCard;
