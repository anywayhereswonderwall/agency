import React from "react";
import { useRef } from "react";
import { useAnimationFrame, motion } from "framer-motion";
const AnimatedCube = ({ addClass }) => {
  const ref = useRef(null);
  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`cube-container ${addClass}`}
    >
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
    </motion.div>
  );
};

export default AnimatedCube;
