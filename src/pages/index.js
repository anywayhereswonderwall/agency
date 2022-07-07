import React, { useState } from "react";
import "../styles/main.scss";
import { motion } from "framer-motion";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";

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
const IndexPage = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [animation2Complete, setAnimation2Complete] = useState(false);
  const [nav, setNav] = useState(false);

  return (
    <>
      {animation2Complete && <Header setNav={setNav} />}
      {nav && <NavMobile setNav={setNav} />}
      <main>
        <section className="section">
          {!animationComplete && (
            <motion.div
              viewport={{ once: true }}
              variants={titleParent}
              initial="initial"
              whileInView="animate"
              className="title-container title-container--3"
              onAnimationComplete={() => setAnimationComplete(true)}
            >
              <motion.div variants={titleChild} className="title-line">
                Reklama
              </motion.div>
              <motion.div variants={titleChild} className="title-line">
                to za
              </motion.div>
              <motion.div variants={titleChild} className="title-line">
                mało.
              </motion.div>
            </motion.div>
          )}
          {animationComplete && (
            <motion.div
              viewport={{ once: true }}
              variants={titleParent}
              initial="initial"
              whileInView="animate"
              className="title-container title-container--3"
              onAnimationComplete={() => setAnimation2Complete(true)}
            >
              <motion.div variants={titleChild} className="title-line">
                Chcesz
              </motion.div>
              <motion.div variants={titleChild} className="title-line">
                wiedzieć
              </motion.div>
              <motion.div variants={titleChild} className="title-line">
                czemu?
              </motion.div>
            </motion.div>
          )}
          {animationComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="line line-2"
            >
              <motion.p variants={scroll} animate="animate" className="scroll">
                scroll
              </motion.p>
            </motion.div>
          )}
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
              Czas
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              przestać
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              nakłaniać.
            </motion.div>
          </motion.div>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="span"
            >
              W obecnych czasach każdy w bardzo łatwy i tani sposób jest w
              stanie pokazać się w internecie. Co za tym idzie, nakłanianie do
              użycia Twojego produktu staje się nieefektywne.
            </motion.span>
          </div>
          <div className="line line-4"></div>
        </section>
        <section className="section">
          <div className="line line-5"></div>
          <motion.div
            viewport={{ once: true }}
            variants={titleParent}
            initial="initial"
            whileInView="animate"
            className="title-container title-container--2"
          >
            <motion.div variants={titleChild} className="title-line">
              Czas
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              się
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              wyróżnić.
            </motion.div>
          </motion.div>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
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
              Czas
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              przestać
            </motion.div>
            <motion.div variants={titleChild} className="title-line">
              prosić.
            </motion.div>
          </motion.div>
          <div className="text-container text-container--2">
            <motion.span
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
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
    </>
  );
};

export default IndexPage;
