import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/loader/loader";
import { QuestionItem } from "../../components/questions-item";
import { api } from "../../config";
import "./questions.css";

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const [firstSubjectCorrect, setFirstSubjectCorrect] = useState(0);
  const [secondSubjectCorrect, setSecondSubjectCorrect] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  let sessionToken = sessionStorage.getItem("token");
  let localToken = localStorage.getItem("token");

  let time = 0;
  const timeInterval = setInterval(() => {
    time += 1;
  }, 60000);

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearInterval(timeInterval);
    setLoading(true);
    setIsSubmit(true);

    let faculties = JSON.parse(sessionStorage.getItem("faculties"));

    let body = JSON.stringify({
      first_subject_id: firstSubject,
      second_subject_id: secondSubject,
      first_subject_correct: firstSubjectCorrect,
      second_subject_correct: secondSubjectCorrect,
      first_subject_count: questions[0].questions.length,
      second_subject_count: questions[1].questions.length,
      faculties,
      time,
    });

    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: sessionToken || localToken,
      },
      body,
    };

    try {
      let res = await fetch(api + `/results`, options);
      let data = await res.json();
      if (data.status === 201) {
        navigate(`/results/${data.data.result_id}`);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error);
    }
  };

  const { firstSubject, secondSubject } = JSON.parse(
    sessionStorage.getItem("subjects")
  );
  useEffect(() => {
    (async function () {
      setLoading(true);
      let res = await fetch(
        api +
          `/questions?first_subject_id=${firstSubject}&second_subject_id=${secondSubject}`
      );
      setLoading(false);
      let data = await res.json();
      setQuestions(data);
    })();
  }, [firstSubject, secondSubject]);
  return (
    <div className="container">
      {loading ? <Loader /> : <></>}
      <div className="questions">
        <form onSubmit={handleSubmit} name="test" className="questions__form">
          {questions.length > 0 ? (
            <div>
              <h2 className={"questions__subject"}>
                {questions[0]?.subject_name}
              </h2>
              {questions[0].questions.length > 0
                ? questions[0].questions.map((question, index) => (
                    <QuestionItem
                      setAnswers={setFirstSubjectCorrect}
                      isSubmit={isSubmit}
                      key={index}
                      questions={question}
                      count={index + 1}
                    />
                  ))
                : null}
            </div>
          ) : null}

          {questions.length > 0 ? (
            <div>
              <h2 className={"questions__subject"}>
                {questions[1]?.subject_name}
              </h2>
              {questions[1]?.questions.length > 0
                ? questions[1].questions.map((question, index) => (
                    <QuestionItem
                      setAnswers={setSecondSubjectCorrect}
                      isSubmit={isSubmit}
                      key={index}
                      questions={question}
                      count={index + 1}
                    />
                  ))
                : null}
            </div>
          ) : null}

          <button className="questions__submit" type="submit">
            Yakunlash
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
