import { useNavigate } from "react-router-dom";
import "./ButtonBackIcon.css";
import Icon from "../Icon/Icon";

interface Props {
  goTo: string;
}

export default function ButtonBackIcon({ goTo }: Props) {
  const navigate = useNavigate();
  const handleClick = () => navigate(goTo);
  return (
    <button className="c-btn-back-icon" onClick={handleClick}>
      <Icon type="ArrowLeft" />
    </button>
  );
}
