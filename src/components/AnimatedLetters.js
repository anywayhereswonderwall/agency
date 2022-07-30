import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};
const letterAnimation = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

const AnimatedLetters = ({ title }) => {
  return (
    <motion.span
      variants={banner}
      initial="initial"
      animate="animate"
      className="row-title"
    >
      {[...title].map((letter) => {
        if (letter === " ") {
          return (
            <motion.span
              className="row-letter row-letter--space"
              variants={letterAnimation}
            ></motion.span>
          );
        }
        return (
          <motion.span className="row-letter" variants={letterAnimation}>
            {letter}
          </motion.span>
        );
      })}
    </motion.span>
  );
};

export default AnimatedLetters;
