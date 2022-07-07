import React, { useEffect } from "react";
import { motion } from "framer-motion";
const MobileMenu = ({ setNav }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{}}
      className="nav-mobile"
    >
      <button onClick={() => setNav(false)} className="nav-mobile--close">
        close
      </button>
    </motion.nav>
  );
};

export default MobileMenu;
