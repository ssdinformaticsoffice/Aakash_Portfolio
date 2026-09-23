import React from "react";
import { motion } from "motion/react";
import { pageTransitionVariants } from "../utils/motion";

function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
