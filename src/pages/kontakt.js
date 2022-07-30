import React, { useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Marquee from "../components/Marquee";

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
const Kontakt = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Header setNav={setNav} isBlack={true} />
      <Nav setNav={setNav} nav={nav} />
      <main>
        <section className="section section-centered section-black">
          <Marquee title={"Porozmawiajmy."} />
          <motion.div
            variants={titleParent}
            initial="initial"
            animate="animate"
            className="title-container title-container--5"
          >
            <motion.div variants={titleChild} className="title-line">
              +48 575 385 856
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              +48 532 323 543
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              kontakt@cubemedia.pl
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Kontakt;
