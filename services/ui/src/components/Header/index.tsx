import React from "react";

import CTA from "./CTA";
import me from "../../assets/pfp.png";
import HeaderSocials from "./HeaderSocials";
import "./index.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tiago Tavares</h1>
        <h5 className="text-light">Blockchain Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={me} alt="me" />
        </div>
      </div>

      <a href="#contact" className="scroll__down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
