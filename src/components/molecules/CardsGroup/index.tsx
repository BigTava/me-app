import React from "react";

import Card from "../../atoms/Card";
import "./styles.css";

interface ICardsGroupProps {
  type: string;
}

export default function CardsGroup(props: ICardsGroupProps) {
  switch (props.type) {
    case "about":
      return (
        <div className="about__cards">
          <Card
            type="about"
            icon="tie"
            title="Experience"
            subtitle="1+ Years Working"
          />
          <Card
            type="about"
            icon="academic"
            title="Academic"
            subtitle="Master Degree"
          />
          <Card
            type="about"
            icon="folder"
            title="Projects"
            subtitle="1+ Completed"
          />
        </div>
      );

    case "services":
      return (
        <div className="container services__container">
          <Card
            type="service"
            title="UI/UX Design"
            label={[
              "Lorem, ipsum dolor sit amet consectetur elit",
              "Lorem, ipsum dolor sit amet consectetur elit",
            ]}
          />

          <Card
            type="service"
            title="Content Creation"
            label={[
              "Lorem, ipsum dolor sit amet consectetur elit",
              "Lorem, ipsum dolor sit amet consectetur elit",
            ]}
          />

          <Card
            type="service"
            title="Web Development"
            label={[
              "Lorem, ipsum dolor sit amet consectetur elit",
              "Lorem, ipsum dolor sit amet consectetur elit",
            ]}
          />
        </div>
      );

    default:
      return <></>;
  }
}
