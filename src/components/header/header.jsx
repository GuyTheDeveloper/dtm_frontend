import { useNavigate } from "react-router-dom";
import arrow from "../../assets/img/arrow-back.png";
import "./header.css";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <header className="header">
        <button className="header__btn" onClick={() => navigate(-1)}>
          <img src={arrow} alt="Go back" />
          Orqaga
        </button>
      </header>
    </div>
  );
};
