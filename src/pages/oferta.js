import React, { useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
const Kontakt = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <Header setNav={setNav} />
      <Nav setNav={setNav} nav={nav} />
      <main></main>
    </>
  );
};

export default Kontakt;
