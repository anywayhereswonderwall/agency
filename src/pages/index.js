import * as React from "react";
import "../styles/main.scss";
import { motion } from "framer-motion";
import AnimatedLetters from "../components/AnimatedLetters";
import Navigation from "../components/Navigation";

// framer variants
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
const titleParent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const titleChild = {
  initial: { y: 800 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.2,
    },
  },
};
const IndexPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="section">
          <div className="line line-2">
            <motion.p variants={scroll} animate="animate" className="scroll">
              scroll
            </motion.p>
          </div>
          <div className="title-container title-container--1">
            <div className="title-line">Reklama</div>
            <div className="title-line">to za</div>
            <div className="title-line">mało.</div>
          </div>
        </section>
        <section className="section">
          <div className="line line-3"></div>
          <h2 className="outline-heading outline-heading--2">
            Chcesz wiedzieć czemu?
          </h2>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="span"
            >
              W obecnych czasach każdy w bardzo łatwy i tani sposób jest w
              stanie pokazać się w internecie. Co za tym idzie, nakłanianie do
              użycia twojego produktu staje się nieefektywne.
            </motion.span>
          </div>
          <div className="line line-4"></div>
        </section>
        <section className="section">
          <div className="line line-5"></div>
          <h2 className="outline-heading outline-heading--2">
            Czas się wyróżnić.
          </h2>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="span"
            >
              Aby ludzie chcieli korzystać z twoich usług, twój produkt musi być
              naj. Najlepszy, najdokładniejszy, najszybszy… <br />
              To unikalna cecha twojego produktu sprawi, że stanie się on
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
          <h2 className="outline-heading outline-heading--2">
            Czas przestać prosić.
          </h2>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="span"
            >
              Nikt nie jest w stanie stworzyć usługi dla wszystkich. Zamiast
              prosić każdego, by wypróbował twój produkt, postaraj się zadbać o
              grupę klientów, która będzie aktywnie uczestniczyć w działaniach
              twojej firmy.
            </motion.span>
          </div>
          <div className="line line-4"></div>
        </section>
      </main>
    </>
  );
};

export default IndexPage;
