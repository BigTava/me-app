import React from "react";

import Section from "../organisms/Section";
import Nav from "../molecules/Nav";

export function Main() {
  return (
    <>
      <Section type="header" />
      <Nav type="main" />
      <Section type="about" />
      <Section type="experience" />
      <Section type="services" />
      <Section type="portfolio" />
      <Section type="testimonials" />
    </>
  );
}
