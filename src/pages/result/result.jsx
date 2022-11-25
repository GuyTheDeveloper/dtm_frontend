import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Range } from "../../components/range";
import { api } from "../../config";
import arrow from "../../assets/img/arrow-back.png";
import "./result.css";

const Result = () => {
  const { resultId } = useParams();
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      let res = await fetch(api + `/results/${resultId}`);
      let data = await res.json();
      if (data.length > 0) {
        setResult(data);
      }
    })();
  }, [resultId]);

  return (
    <div className="container">
      <header className="students__header">
        <button
          className="students__navigate"
          onClick={() => navigate("/profile")}
        >
          Profil
          <img
            className="students__arrow"
            src={arrow}
            alt="Go to the profile"
          />
        </button>
      </header>
      <h1 className="result__heading">Asosiy</h1>
      <div className="ranges-wrapper">
        <Range
          bgColor={"#18a0fb"}
          name={result[0]?.first_subject_name}
          test_count={result[0]?.first_subject_count}
          correctAnswers={result[0]?.first_subject_correct}
        />
        <Range
          bgColor={"#3919FB"}
          name={result[0]?.second_subject_name}
          test_count={result[0]?.second_subject_count}
          correctAnswers={result[0]?.second_subject_correct}
        />
      </div>
      <h2 className={"result__info"}>
        Natija: tavsiya {result[0]?.faculty_name ? "etildi" : "etilmadi"}
      </h2>
      {result[0]?.faculty_name ? (
        <>
          <p className="result__paragraph">
            Ta’lim muassasi: {result[0]?.university_name}
          </p>
          <p className="result__paragraph">
            Yo’nalish: {result[0]?.faculty_name}
          </p>
          <p className="result__paragraph">
            Ta’lim turi: {result[0]?.type_of_training}
          </p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Result;
