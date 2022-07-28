import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "gatsby";

const Navigation = ({ setNav }) => {
  const [currentPercent, setCurrentPercent] = useState(null);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
  useEffect(
    () =>
      yRange.onChange(() => {
        setCurrentPercent(Math.trunc(yRange.current));
      }),
    [yRange]
  );

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      className="header"
    >
      <div className="header-items--container">
        <div className="logo">
          pm<span>media</span>
        </div>
        <button onClick={() => setNav(true)} className="toggle">
          menu
        </button>
      </div>
      <motion.div
        style={{ width: `${currentPercent}%` }}
        className="progress-bar"
      ></motion.div>
    </motion.header>
  );
};

export default Navigation;
