import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";
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
const Footer = () => {
  return (
    <footer className="section footer">
      <motion.div
        viewport={{ once: true }}
        variants={titleParent}
        initial="initial"
        whileInView="animate"
        className="title-container title-container--4 title-container--footer"
      >
        <motion.div variants={titleChild} className="title-line">
          Poznajmy
        </motion.div>
        <motion.div variants={titleChild} className="title-line">
          {`się ;)`}
        </motion.div>
      </motion.div>
      <div className="footer-links">
        <Link to="kontakt" className="footer-links--item footer-links--item1">
          <div className="item-text">
            <p>
              +69 420 213 769 <br></br>
              kontakt@cubemedia.pl
            </p>
          </div>
          <div className="item-title">kontakt</div>
        </Link>
        <Link to="oferta" className="footer-links--item footer-links--item2">
          <div className="item-text">
            <p>Zobacz co możemy dla Ciebie zrobić.</p>
          </div>
          <div className="item-title">oferta</div>
        </Link>
        <Link to="onas" className="footer-links--item footer-links--item3">
          <div className="item-text">
            <p>Poznaj nasz zespół.</p>
          </div>
          <div className="item-title">o nas</div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
