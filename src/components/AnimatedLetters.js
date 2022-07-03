import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const letterAnimation = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.2,
    },
  },
};
const AnimatedLetters = ({ title }) => {
  let id = 0;
  return (
    <motion.span variants={banner} initial="initial" animate="animate">
      {[...title].map((letter) => {
        id++;
        if (letter === " ") {
          return <span className="space" key={id}></span>;
        } else {
          return (
            <motion.span key={id} variants={letterAnimation}>
              {letter}
            </motion.span>
          );
        }
      })}
    </motion.span>
  );
};

export default AnimatedLetters;
