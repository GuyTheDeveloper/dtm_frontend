import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../config";
import { Password } from "../password/password";
import Select from "../select";
import "./register-form.css";

export const RegisterForm = () => {
  const [regions, setRegions] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    let form = formRef.current;

    let body = JSON.stringify({
      fullname: form.fullname.value,
      email: form.email.value,
      phone: form.phone.value,
      username: form.username.value,
      region_id: +form.region.value,
      password: form.password.value,
      gender: form.gender.value,
    });
    try {
      let res = await fetch(api + "/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: body,
      });
      let data = await res.json();
      if (data.status === 201) {
        localStorage.setItem("token", data.token);
        sessionStorage.setItem("token", data.token);
        navigate("/");
      } else {
        alert("Ooops, something went wrong");
      }
    } catch (error) {
      alert("This account already in use");
    }
  };

  useEffect(() => {
    fetch(api + "/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data));
  }, []);

  return (
    <>
      <form ref={formRef} onSubmit={handleRegister} className="register__form">
        <input name="fullname" type="text" placeholder="Fullname" required />
        <input name="email" type="email" placeholder="Email" required />
        <input
          name="phone"
          type="number"
          placeholder="Phone"
          pattern={"^998([378]{2}|(9[013-57-9]))d{7}$"}
          maxLength={12}
          required
        />
        <input name="username" type="text" placeholder="Username" required />

        {/* regions */}
        <Select
          className="register__select"
          defaultValue={"Viloyat"}
          name="region"
          id="region_id"
          value="region_id"
          data={regions}
          text="region_name"
        />

        <Password name="password" />

        <div className="register__gender-wrapper">
          <label className="register__radio-label">
            <input
              type="radio"
              name="gender"
              value={"male"}
              text="Erkak"
              defaultChecked={true}
            />
            Erkak
          </label>

          <label className="register__radio-label">
            <input type="radio" name="gender" value={"female"} text="Ayol" />
            Ayol
          </label>
        </div>
        <button className="register__submit">Ro'yxatdan o'tish</button>
      </form>
    </>
  );
};
