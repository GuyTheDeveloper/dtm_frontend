import { NavLink, Link, Outlet } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <h2 className="login__heading">Tizimga kirish</h2>
        <NavLink
          className={({ isActive }) =>
            isActive ? "login__link--active login__link" : "login__link"
          }
          to="/login/email"
        >
          Email orqali
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "login__link--active login__link" : "login__link"
          }
          to="/login/phone"
        >
          Telefon raqami orqali
        </NavLink>
        <Outlet />
        <p className="register__paragraph">
          Hisobingiz yo'qmi?{" "}
          <Link className="register__link" to="/register">
            &#8618; Ro'yxatdan o'ting
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
