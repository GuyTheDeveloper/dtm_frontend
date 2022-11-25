import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { RiLogoutCircleLine } from "react-icons/ri";
import testIcon from "../../../assets/img/test-icon.svg";
import scoreIcon from "../../../assets/img/scores-icon.svg";
import scoreIconActive from "../../../assets/img/scores-active.svg";

export const Navbar = ({ children }) => {
  const { pathname } = useLocation();

  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
  };

  return (
    <div className="container">
      <div className="navbar">
        <nav className={"navbar__main"}>
          <div className="navbar-wrapper">
            <Link className="navbar__link" to="/">
              <img src={testIcon} alt="test Icon" />
              Testlar
            </Link>
            <Link className="navbar__link" to="/students">
              <HiUsers />
              Reyting
            </Link>
            <Link
              className={`navbar__link ${
                pathname === "/profile" ? "navbar__link--active" : ""
              }`}
              to="/profile"
            >
              <img
                src={pathname === "/profile" ? scoreIconActive : scoreIcon}
                alt="Scores icon"
              />
              Yutuqlarim
            </Link>
          </div>

          <Link className="navbar__link" onClick={handleLogout} to="/register">
            <RiLogoutCircleLine />
            Log out
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
};
