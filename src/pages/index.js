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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
            excepturi accusamus cum vel fugiat inventore?
          </span>
        </div>
        <div className="line line-4"></div>
      </section>
    </main>
  );
};

export default IndexPage;
