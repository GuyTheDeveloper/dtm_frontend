import { RegisterForm } from "../../../components/register-form";
import { Link } from "react-router-dom";
import "./register.css";
import { Header } from "../../../components/header";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="register">
          <h2 className="register__heading">Ro'yxatdan o'tish</h2>
          <RegisterForm onSubmit={handleRegister} />
          <p className="register__paragraph">
            Hisobingiz bormi?{" "}
            <Link className="register__link" to="/login/email">
              &#8618; Kirish
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
