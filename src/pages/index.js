import React, { useState } from "react";
import "../styles/main.scss";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Nav from "../components/Nav";
import AnimatedCube from "../components/AnimatedCube";
import { useRef } from "react";
import { useEffect } from "react";

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
  const [sectionDimensions, setSectionDimensions] = useState({
    width: 0,
    height: 0,
  });
  const sectionRef = useRef(null);
  const sectionResize = () => {};
  useEffect(() => {
    if (sectionRef.current) {
      let parentHeight = sectionRef.current.offsetHeight;
      let parentWidth = sectionRef.current.offsetWidth;
      console.log(1);
    }
  }, [sectionRef]);
  return (
    <>
      {animation2Complete && <Header setNav={setNav} />}
      <Nav setNav={setNav} nav={nav} />
      <main>
        <section className="section">
          {!animationComplete && (
            <motion.div
              onAnimationStart={() =>
                document.body.classList.add("overflow-hidden")
              }
              viewport={{ once: true }}
              variants={titleParent}
              initial="initial"
              animate="animate"
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
              animate="animate"
              className="title-container title-container--3"
              onAnimationComplete={() => {
                setAnimation2Complete(true);
                document.body.classList.remove("overflow-hidden");
              }}
            >
              <motion.div variants={titleChild} className="title-line">
                Chcesz
              </motion.div>
              <motion.div variants={titleChild} className="title-line">
                wiedzieć
              </motion.div>
              <motion.div variants={titleChild} className="title-line">
                dlaczego?
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
              transition={{ duration: 0.5, delay: 0.8 }}
              className="span"
            >
              W obecnych czasach każdy w bardzo łatwy i tani sposób jest w
              stanie pokazać się w internecie. Co za tym idzie, nakłanianie do
              użycia Twojego produktu staje się nieefektywne.
            </motion.span>
          </div>
          <div className="line line-4"></div>
        </section>
        <section ref={sectionRef} className="section">
          <div className="line line-5"></div>
          <motion.div
            viewport={{ once: true }}
            variants={titleParent}
            initial="initial"
            whileInView="animate"
            className="title-container title-container--1"
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
          <AnimatedCube></AnimatedCube>
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
              transition={{ duration: 0.5, delay: 0.8 }}
              className="span"
            >
              Nikt nie jest w stanie stworzyć usługi dla wszystkich. Zamiast
              prosić każdego, by wypróbował Twój produkt, postaraj się zadbać o
              grupę klientów, która będzie aktywnie uczestniczyć w działaniach
              Twojej firmy.
            </motion.span>
          </div>
          <div className="line line-7"></div>
        </section>
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
            <div className="footer-links--item footer-links--item1">
              <div className="item-text">
                <p>
                  +69 420 213 769 <br></br>
                  jebanie@gmail
                </p>
              </div>
              <div className="item-title">kontakt</div>
            </div>
            <div className="footer-links--item footer-links--item2">
              <div className="item-text">
                <p>Zobacz co możemy dla Ciebie zrobić.</p>
              </div>
              <div className="item-title">oferta</div>
            </div>
            <div className="footer-links--item footer-links--item3">
              <div className="item-text">
                <p>Poznaj nasz zespół.</p>
              </div>
              <div className="item-title">o nas</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default IndexPage;
