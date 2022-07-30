import React, { useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
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
const scroll = {
  animate: {
    scale: [1, 1.3, 1],
    transition: {
      repeat: Infinity,
      duration: 2,
      repeatType: "reverse",
    },
  },
};
const Oferta = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Header setNav={setNav} />
      <Nav setNav={setNav} nav={nav} />
      <main>
        <section className="section">
          <Marquee title={"lorem lorem"} />
          <motion.div
            viewport={{ once: true }}
            variants={titleParent}
            initial="initial"
            whileInView="animate"
            className="title-container title-container--1"
          >
            <motion.div variants={titleChild} className="title-line">
              Social
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              media
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              marketing
            </motion.div>
          </motion.div>

          <div className="text-container text-container--1">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="span"
            >
              Aby ludzie chcieli korzystać z Twoich usług, Twój produkt musi być
              naj. Najlepszy, najdokładniejszy, najszybszy… <br />
              To unikalna cecha Twojego produktu sprawi, że stanie się on
              pożądany.
            </motion.span>
          </div>
          <div className="line line-6">
            <motion.p variants={scroll} animate="animate" className="scroll">
              scroll
            </motion.p>
          </div>
        </section>
        <section className="section">
          <div className="line line-3"></div>
          <motion.div
            viewport={{ once: true }}
            variants={titleParent}
            initial="initial"
            whileInView="animate"
            className="title-container title-container--2"
          >
            <motion.div variants={titleChild} className="title-line">
              Tworzenie
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              stron oraz
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              aplikacji
            </motion.div>
          </motion.div>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="span"
            >
              Nikt nie jest w stanie stworzyć usługi dla wszystkich. Zamiast
              prosić każdego, by wypróbował Twój produkt, postaraj się zadbać o
              grupę klientów, która będzie aktywnie uczestniczyć w działaniach
              Twojej firmy.
            </motion.span>
          </div>
          <div className="line line-4"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Oferta;
