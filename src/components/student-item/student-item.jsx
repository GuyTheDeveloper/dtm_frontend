import "./student-item.css";

export const StudentItem = ({ result, count }) => {
  return (
    <tr className={"student__table-row"}>
      <td>{count}</td>
      <td>{result.fullname}</td>
      <td>{result.faculty_name || "Tavsiya etilmadi"}</td>
      <td>{result.date.slice(1, 10).split("-").reverse().join(".")}</td>
      <td>{result.overall_score}</td>
      <td>{result.time} min</td>
    </tr>
  );
};
