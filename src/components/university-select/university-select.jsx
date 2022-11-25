import { useState } from "react";
import arrow from "../../assets/img/arrow-up.svg";
import "./university-select.css";

export const UniversitySelect = ({ name, data, addFunc, onHover }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="accordion-wrapper">
      <div className="accordion" onClick={() => setIsOpen((prev) => !prev)}>
        <span className="accordion__name">{name}</span>
        <img
          src={arrow}
          className={isOpen ? "" : "accordion__arrow"}
          alt="Arrow"
        />
      </div>
      <div className={isOpen ? "open-items" : "close-items"}>
        {data && data.length > 0
          ? data.map((faculty) => (
              <div
                key={faculty.faculty_id}
                className="accordion__item"
                onClick={() => addFunc(faculty)}
                onMouseOver={() => onHover(faculty.faculty_id)}
              >
                {faculty.faculty_name}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
