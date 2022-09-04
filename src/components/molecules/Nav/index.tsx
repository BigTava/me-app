import React from "react";

import Icon from "../../atoms/Icon";
import "./styles.css";

interface INavProps {
  type: string;
}

export default function Nav(props: INavProps) {
  const [activeNav, setActiveNav] = React.useState("#home");
  switch (props.type) {
    case "main":
      return (
        <nav>
          <a
            href="#home"
            onClick={() => setActiveNav("#home")}
            className={activeNav === "#home" ? "active" : ""}
          >
            <Icon type="home" />
          </a>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <Icon type="user" />
          </a>
          <a
            href="#experience"
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}
          >
            <Icon type="book" />
          </a>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <Icon type="message" />
          </a>
        </nav>
      );

    default:
      return <></>;
  }
}
