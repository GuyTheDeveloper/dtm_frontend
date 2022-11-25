import "./faculty-item.css";
import close from "../../assets/img/close.svg";

export const FacultyItem = ({ faculty, func }) => {
  return (
    <div className={"faculty__item"} onClick={() => func(faculty.faculty_id)}>
      {faculty.faculty_name}
      <img src={close} alt="close " />
    </div>
  );
};
