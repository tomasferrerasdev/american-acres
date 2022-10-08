import React from 'react';
import { motion } from 'framer-motion';

export const ScrollButton = () => {
  return (
    <motion.div
      className="scroll"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}
      >
        scroll
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 1.8 }}
      >
        down
      </motion.span>
    </motion.div>
  );
};
