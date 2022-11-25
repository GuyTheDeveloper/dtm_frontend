import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config";
import { Loader } from "../loader/loader";
import { Password } from "../password/password";
import "./login-phone.css";

const LoginPhone = () => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setLoading(true);

    let form = formRef.current;
    let body = JSON.stringify({
      phone: form.phone.value,
      password: form.password.value,
    });
    try {
      let res = await fetch(api + "/login/phone", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: body,
      });
      setDisabled(false);
      setLoading(false);
      let data = await res.json();
      if (data.status === 200) {
        localStorage.setItem("token", data.token);
        sessionStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
      alert("Wrong credentials");
    }
  };
  return (
    <form onSubmit={handleLogin} ref={formRef} className="login__email-form">
      {loading ? (
        <Loader />
      ) : (
        <>
          <input
            name="phone"
            type="number"
            placeholder="Phone"
            required
            pattern={"^998([378]{2}|(9[013-57-9]))d{7}$"}
            maxLength={12}
            className={`login__email ${error ? "login__error" : ""}`}
          />
          <Password
            name="password"
            className={`${error ? "login__error" : ""}`}
          />
          <button
            disabled={disabled}
            type="submit"
            className="register__submit login__submit"
          >
            Tizimga kirish
          </button>{" "}
        </>
      )}
    </form>
  );
};

export default LoginPhone;
