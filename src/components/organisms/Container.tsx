import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import emailjs from "emailjs-com";
import "swiper/css";
import "swiper/css/pagination";

import me from "../../assets/pfp.png";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import Icon from "../atoms/Icon";
import CardsGroup from "../molecules/CardsGroup";
import CTA from "../atoms/CTA";
import Form from "../molecules/Form";
import "./styles.css";

interface IContainer {
  type: string;
}

export default function Container(props: IContainer) {
  const form = React.useRef(null);

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
          <Card type="header-image" img={me} />
        </div>
      );

    case "about":
      return (
        <div className="container about__container">
          <Card type="about-image" img={me} />
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

    case "portfolio":
      return (
        <div className="container portfolio__container">
          <Card
            type="portfolio"
            img={me}
            title="This is a portfolio item title"
            href={["https://github.com", "https://github.com"]}
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

    case "contacts":
      const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
          .sendForm(
            "service_d5p12qw",
            "template_r8b8e63",
            form.current!,
            "oUJkkz53XprGyUYBO"
          )
          .then(
            (result: any) => {
              console.log(result.text);
            },
            (error: any) => {
              console.log(error.text);
            }
          );

        e.target.reset();
      };

      return (
        <div className="container contact__container">
          <div className="contact__options">
            <Card
              type="contact-option"
              icon="email"
              title="Email"
              subtitle="tiagommt20@gmail.com"
              href={["mailto:tiagommt20@gmail.com"]}
            />
            <Card
              type="contact-option"
              icon="messenger"
              title="Messenger"
              subtitle="Tiago Tavares"
              href={["https://m.me/tiagommt"]}
            />
          </div>
          <Form type="send-email" refHook={form} onSubmit={sendEmail} />
        </div>
      );

    default:
      return <></>;
  }
}
