import "./questions-item.css";
import { Radio } from "./radio";

export const QuestionItem = ({ questions, count, isSubmit, setAnswers }) => {
  const handleChange = (e) => {
    let answerId = e.target.value;
    if (+answerId === questions.answers.correctAnswer) {
      return setAnswers((prev) => 1 + prev);
    }
  };
  return (
    <div className={"question-wrapper"}>
      <h3 className={"question__heading"}>
        #{count} {questions.heading}
      </h3>
      <h4 className="question__question">{questions.question}</h4>
      <div className={"question__answers"} onChange={handleChange}>
        <Radio
          checkAnswer={isSubmit}
          name={questions.quiz_id}
          text={questions.answers["1"]}
          value={1}
          correct_value={questions.answers.correctAnswer}
        />
        <Radio
          checkAnswer={isSubmit}
          name={questions.quiz_id}
          text={questions.answers["2"]}
          value={2}
          correct_value={questions.answers.correctAnswer}
        />
        <Radio
          checkAnswer={isSubmit}
          name={questions.quiz_id}
          text={questions.answers["3"]}
          value={3}
          correct_value={questions.answers.correctAnswer}
        />
        <Radio
          checkAnswer={isSubmit}
          name={questions.quiz_id}
          text={questions.answers["4"]}
          value={4}
          correct_value={questions.answers.correctAnswer}
        />
      </div>
    </div>
  );
};
