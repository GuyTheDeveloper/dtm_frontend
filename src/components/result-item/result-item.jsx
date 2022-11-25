import { useState } from "react";
import accordioIcon from "../../assets/img/accordio-icon.svg";
import "./result-item.css";

export const ResultItem = ({ result, count }) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!result) return <></>;
  return (
    <div className="result__item" onClick={() => setIsOpen((prev) => !prev)}>
      <span>
        <span>Test# {count}</span>
        <span>{result.date.slice(1, 10).split("-").reverse().join("/")}</span>
        <span>
          {result.overall_score}/
          {result.first_subject_count * 3.7 + result.second_subject_count * 2.7}
        </span>
        <img
          src={accordioIcon}
          alt="open info about test"
          className={isOpen ? "" : "open--active"}
        />
      </span>
      <div className={`result__accordion ${isOpen ? "open__accordion" : ""}`}>
        <div className="result__inner">
          <span className="result__inner-span">
            {result.faculty_name || "Tavsiya etilmadi"}{" "}
          </span>
          <span className="result__inner-span">
            {result.education_type || ""}
          </span>
        </div>

        <div className="result__inner">
          <span>Blok #1</span>
          <span>
            {result.first_subject_correct} / {result.first_subject_count}
          </span>
        </div>

        <div className="result__inner">
          <span>Blok #2</span>
          <span>
            {result.second_subject_correct} / {result.second_subject_count}
          </span>
        </div>
      </div>
    </div>
  );
};
