import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const Navigation = ({ x }) => {
  const [currentPercent, setCurrentPercent] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useEffect(
    () =>
      yRange.onChange((v) => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );
  return (
    <nav className={currentPercent ? "nav" : "hide"}>
      <div className="links-container"></div>
      <motion.div
        style={{ width: `${currentPercent}%` }}
        className="progress-bar"
      ></motion.div>
    </nav>
  );
};

export default Navigation;
