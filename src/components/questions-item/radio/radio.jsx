import { useRef } from "react";
import "./radio.css";

export const Radio = ({ name, text, value, correct_value, checkAnswer }) => {
  const labelRef = useRef();
  const inputRef = useRef();

  if (checkAnswer) {
    if (inputRef.current.checked) {
      labelRef.current.classList.add(
        correct_value === value ? "correct" : "error"
      );
    }
  }

  return (
    <label className={"radio"} ref={labelRef}>
      <input ref={inputRef} type="radio" value={value} name={name} required />
      {text}
    </label>
  );
};
