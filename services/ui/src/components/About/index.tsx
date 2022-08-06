import React from "react";
import { FaUserTie } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { VscFolderLibrary } from "react-icons/vsc";

import me from "../../assets/pfp.png";
import "./index.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUserTie className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <HiAcademicCap className="about__icon" />
              <h5>Academic</h5>
              <small>Master Degree</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>1+ Completed</small>
            </article>
          </div>

          <p>Lorem Ipsum</p>

          <a href="#account" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
