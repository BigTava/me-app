import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import me from "../../assets/pfp.png";
import "./index.css";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar" />
          </div>
          <h5 className="client__name">Tiago Tavares</h5>
          <small className="client__review">lorum impsum</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar" />
          </div>
          <h5 className="client__name">Tiago Tavares</h5>
          <small className="client__review">lorum impsum</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={me} alt="Avatar" />
          </div>
          <h5 className="client__name">Tiago Tavares</h5>
          <small className="client__review">lorum impsum</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
