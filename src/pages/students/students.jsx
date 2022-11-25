import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StudentItem } from "../../components/student-item";
import { api } from "../../config";
import arrow from "../../assets/img/arrow-back.png";
import "./students.css";

const Students = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      let res = await fetch(api + "/results/students");
      let data = await res.json();
      setResults(data);
    })();
  }, []);

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
      <h2 className="students__heading">So'ngi imtihon g'olibi</h2>
      <table className="students__table">
        <thead>
          <tr className="students__row">
            <th>ID</th>
            <th>Ismi</th>
            <th>Yo'nalish</th>
            <th>Sana</th>
            <th>Ball</th>
            <th>Vaqt</th>
          </tr>
        </thead>
        <tbody>
          {results.length > 0
            ? results.map((result, index) => (
                <StudentItem
                  key={result.result_id}
                  result={result}
                  count={index}
                />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
