import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

const titleParent = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const titleChild = {
  initial: { y: 200, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Nav = ({ nav, setNav }) => {
  useEffect(() => {
    if (nav) {
      document.body.classList.add("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [nav]);

  return (
    <AnimatePresence>
      {nav && (
        <motion.nav
          key="nav"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5 }}
          className="nav"
        >
          <motion.div
            variants={titleParent}
            initial="initial"
            animate="animate"
            className="nav-links"
          >
            <motion.div variants={titleChild}>
              <Link className="nav-links--item" to="/">
                Wizja
              </Link>
            </motion.div>
            <motion.div variants={titleChild}>
              <Link className="nav-links--item" to="/">
                Kontakt
              </Link>
            </motion.div>
            <motion.div variants={titleChild}>
              <Link className="nav-links--item" to="/">
                O nas
              </Link>
            </motion.div>
          </motion.div>
          <button onClick={() => setNav(false)} className="nav-close">
            zamknij
          </button>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Nav;
