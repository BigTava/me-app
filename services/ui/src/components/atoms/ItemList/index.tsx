import Icon from "../Icon";
import "./styles.css";

interface IItemListProps {
  type: string;
  label: string;
}

export default function ItemList(props: IItemListProps) {
  switch (props.type) {
    case "service":
      return (
        <li>
          <Icon type="check" className="service__list-icon" />
          <p>{props.label}</p>
        </li>
      );

    default:
      return <></>;
  }
}
