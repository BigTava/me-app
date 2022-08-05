import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillGitlab } from "react-icons/ai";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/tiagommtavares/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/BigTava" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://gitlab.com/BigTava" target="_blank" rel="noreferrer">
        <AiFillGitlab />
      </a>
    </div>
  );
}

export default HeaderSocials;
