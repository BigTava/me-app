import Container from "../organisms/Container";
import CardsGroup from "../molecules/CardsGroup";
import Icon from "../atoms/Icon";
import Nav from "../molecules/Nav";
import Footer from "../molecules/Footer";
import "./styles.css";

export function Main() {
  return (
    <>
      <header id="home">
        <Container type="header" />
        <Icon type="scroll_down" />
      </header>

      <Nav type="main" />

      <section id="about">
        <h5>Get To Know</h5>
        <h2>About me</h2>

        <Container type="about" />
      </section>

      <section id="experience">
        <h5>What Skills I have</h5>
        <h2>My Experience</h2>
        <Container type="experience" />
      </section>

      <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>

        <CardsGroup type="services" />
      </section>

      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <Container type="portfolio" />
      </section>

      <section id="testimonials">
        <h5>Review from client</h5>
        <h2>Testimonials</h2>

        <Container type="testimonials" />
      </section>

      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <Container type="contacts" />
      </section>

      <Footer />
    </>
  );
}
