import ItemList from "../ItemList";
import Icon from "../Icon";
import CTA from "../CTA";
import "./styles.css";

interface ICardProps {
  type: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  label?: string[];
  img?: any;
  alt?: string;
  href?: string[];
  key?: string;
}

export default function Card(props: ICardProps) {
  switch (props.type) {
    case "about":
      return (
        <article className="about__card">
          <Icon type={props.icon!} className="about__icon" />
          <h5>{props.title}</h5>
          <small>{props.subtitle}</small>
        </article>
      );

    case "about-image":
      return (
        <div className="about__me">
          <div className="about__me-image">
            <img src={props.img} alt={props.alt} />
          </div>
        </div>
      );

    case "header-image":
      return (
        <div className="me">
          <img src={props.img} alt={props.alt} />
        </div>
      );

    case "experience":
      return (
        <article className="experience__details">
          <Icon type="patchCheck" className="experience__details-icon" />
          <div>
            <h4>{props.title}</h4>
            <small className="text-light">{props.subtitle}</small>
          </div>
        </article>
      );

    case "service":
      return (
        <article className="service">
          <div className="service__head">
            <h3>{props.title}</h3>
          </div>
          <ul className="service__list">
            {props.label!.map((label, index) => (
              <ItemList type="service" label={label} key={index.toString()} />
            ))}
          </ul>
        </article>
      );

    case "portfolio":
      return (
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={props.img} alt={props.alt} />
          </div>
          <h3>{props.title}</h3>
          <CTA
            type="portfolio"
            hrefGit={props.href![0]}
            hrefDemo={props.href![1]}
          />
        </article>
      );

    case "testimonial":
      return (
        <>
          <div className="client__avatar">
            <img src={props.img} alt={props.alt} />
          </div>
          <h5 className="client__name">{props.title} </h5>
          <small className="client__review">{props.subtitle}</small>
        </>
      );

    case "contact-option":
      return (
        <article className="contact__option">
          <Icon type={props.icon!} className="contact__option-icon" />
          <h4>{props.title}</h4>
          <h5>{props.subtitle}</h5>
          <a href={props.href![0]} target="_blank" rel="noreferrer">
            Send a message
          </a>
        </article>
      );

    default:
      return <></>;
  }
}
