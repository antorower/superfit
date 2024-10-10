"use client";
import { motion } from "framer-motion";

const Enlarger = ({ children }) => {
  return (
    <motion.div className="" whileHover={{ scale: 1.1, rotate: "5deg" }}>
      {children}
    </motion.div>
  );
};

export default Enlarger;
