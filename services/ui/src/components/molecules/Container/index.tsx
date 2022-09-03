import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import me from "../../../assets/pfp.png";
import Button from "../../atoms/Button";
import Card from "./../../atoms/Card";
import Icon from "../../atoms/Icon";
import CardsGroup from "../CardsGroup";
import CTA from "../../atoms/CTA";
import "./styles.css";

interface IContainer {
  type: string;
}

export default function Container(props: IContainer) {
  switch (props.type) {
    case "header":
      return (
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Tiago Tavares</h1>
          <h5 className="text-light">Blockchain Developer</h5>
          <CTA type="header" />
          <div className="header__socials">
            <Icon type="linkedIn" />
            <Icon type="gitHub" />
            <Icon type="gitLab" />
          </div>
          <Card type="headerImage" img={me} />
        </div>
      );

    case "about":
      return (
        <div className="container about__container">
          <Card type="aboutImage" img={me} />
          <div className="about__content">
            <CardsGroup type="about" />

            <p>Lorem Ipsum</p>

            <Button type="primary" href="#account" label="Let's talk" />
          </div>
        </div>
      );

    case "experience":
      return (
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
            </div>
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
              <Card type="experience" title="HTML" subtitle="Experienced" />
            </div>
          </div>
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

    case "portfolio":
      return (
        <div className="container portfolio__container">
          <Card
            type="portfolio"
            img={me}
            title="This is a portfolio item title"
            hrefGit="https://github.com"
            hrefDemo="https://github.com"
          />
        </div>
      );

    case "testimonials":
      return (
        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonial">
            <Card
              type="testimonial"
              img={me}
              alt="Avatar"
              title="Tiago Tavares"
              subtitle="lorum impsum"
            />
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <Card
              type="testimonial"
              img={me}
              alt="Avatar"
              title="Tiago Tavares"
              subtitle="lorum impsum"
            />
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <Card
              type="testimonial"
              img={me}
              alt="Avatar"
              title="Tiago Tavares"
              subtitle="lorum impsum"
            />
          </SwiperSlide>
        </Swiper>
      );

    default:
      return <></>;
  }
}
