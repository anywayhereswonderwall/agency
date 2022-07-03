import * as React from "react";
import "../styles/main.scss";
import AnimatedLetters from "../components/AnimatedLetters";
import menuIcon from "../images/menuIcon.svg";
const IndexPage = () => {
  return (
    <main>
      <button className="menu-toggle">
        <img src={menuIcon} alt="ikonka menu" />
      </button>
      <section className="section">
        <div className="line line-2">
          <p className="scroll">scroll</p>
        </div>
        <h2 className="outline-heading outline-heading--1">
          Reklama to za mało.
        </h2>
        <div className="text-container text-container--1">
          <AnimatedLetters title={"Chcesz wiedzieć czemu?"} />
        </div>
      </section>
      <section className="section">
        <div className="line line-3"></div>
        <h2 className="outline-heading outline-heading--2">
          Czas przestać nakłaniać.
        </h2>
        <div className="text-container text-container--2">
          <span>
            W obecnych czasach każdy w bardzo łatwy i tani sposób jest w stanie
            pokazać się w internecie. Co za tym idzie, nakłanianie do użycia
            twojego produktu staje się nieefektywne.
          </span>
        </div>
        <div className="line line-4"></div>
      </section>
      <section className="section">
        <div className="line line-5"></div>
        <h2 className="outline-heading outline-heading--2">
          Czas się wyróżnić.
        </h2>
        <div className="text-container text-container--2">
          <span>
            Aby ludzie chcieli korzystać z twoich usług, twój produkt musi być
            naj. Najlepszy, najdokładniejszy, najszybszy…To unikalna cecha
            twojego produktu sprawi, że stanie się on pożądany.
          </span>
        </div>
        <div className="line line-6">
          <p className="scroll">scroll</p>
        </div>
      </section>
      <section className="section">
        <div className="line line-3"></div>
        <h2 className="outline-heading outline-heading--2">
          Czas przestać prosić.
        </h2>
        <div className="text-container text-container--2">
          <span>
            Nikt nie jest w stanie stworzyć usługi dla wszystkich. Zamiast
            prosić każdego, by wypróbował twój produkt, postaraj się zadbać o
            grupę klientów, która będzie aktywnie uczestniczyć w działaniach
            twojej firmy.
          </span>
        </div>
        <div className="line line-4"></div>
      </section>
    </main>
  );
};

export default IndexPage;
