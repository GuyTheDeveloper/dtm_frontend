import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import "./password.css";

export const Password = ({ name, className = "" }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <div className="register__password-wrapper">
      <input
        className={`register__password ${className}`}
        name={name}
        type={passwordShown ? "text" : "password"}
        placeholder="Password"
        required
        minLength={8}
      />
      <span
        className="register__eye"
        onClick={() => setPasswordShown(!passwordShown)}
      >
        {!passwordShown ? <RiEyeCloseLine /> : <RiEyeLine />}
      </span>
    </div>
  );
};
