import React from "react";

import Icon from "../atoms/Icon";
import Container from "../molecules/Container";
import "./styles.css";

interface ISectionProps {
  type: string;
}

export default function Section(props: ISectionProps) {
  switch (props.type) {
    case "header":
      return (
        <header id="home">
          <Container type="header" />
          <Icon type="scroll_down" />
        </header>
      );

    case "about":
      return (
        <section id="about">
          <h5>Get To Know</h5>
          <h2>About me</h2>

          <Container type="about" />
        </section>
      );

    case "experience":
      return (
        <section id="experience">
          <h5>What Skills I have</h5>
          <h2>My Experience</h2>
          <Container type="experience" />
        </section>
      );

    case "services":
      return (
        <section id="services">
          <h5>What I Offer</h5>
          <h2>Services</h2>

          <Container type="services" />
        </section>
      );

    case "portfolio":
      return (
        <section id="portfolio">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
          <Container type="portfolio" />
        </section>
      );

    case "testimonials":
      return (
        <section id="testimonials">
          <h5>Review from client</h5>
          <h2>Testimonials</h2>

          <Container type="testimonials" />
        </section>
      );

    default:
      return <></>;
  }
}
