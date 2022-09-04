import Button from "../../atoms/Button";
import "./styles.css";

interface IFormProps {
  type: string;
  refHook: React.MutableRefObject<null>;
  onSubmit: (e: any) => void;
}

export default function Form(props: IFormProps) {
  switch (props.type) {
    case "send-email":
      return (
        <form ref={props.refHook} onSubmit={props.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={7}
            required
          ></textarea>
          <Button type="primary-submit" label="Send Message" />
        </form>
      );

    default:
      return <></>;
  }
}
