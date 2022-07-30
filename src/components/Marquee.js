import React from "react";
import AnimatedLetters from "./AnimatedLetters";
const Marquee = ({ title }) => {
  return (
    <div className="marquee">
      <div className="marquee-inner">
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default Marquee;
