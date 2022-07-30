import React, { useState, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { Link } from "gatsby";

const Navigation = ({ setNav, isBlack }) => {
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
      className={isBlack ? "header header-black" : "header"}
    >
      <div className="header-items--container">
        <div className={isBlack ? "logo logo-black" : "logo"}>
          <Link to="/">
            cube<span>media</span>
          </Link>
        </div>
        <button
          onClick={() => setNav(true)}
          className={isBlack ? "toggle toggle-black" : "toggle"}
        >
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
