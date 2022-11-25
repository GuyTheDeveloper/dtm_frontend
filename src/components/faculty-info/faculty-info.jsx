import "./faculty-info.css";

export const FacultyInfo = ({ type, count, score }) => {
  return (
    <div className="facultyInfo">
      <span>{type}</span>
      <span>{count}</span>
      <span>{score}</span>
    </div>
  );
};
