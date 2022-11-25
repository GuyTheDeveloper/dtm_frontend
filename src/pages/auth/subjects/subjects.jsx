import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../../components/header";
import { ProgressBar } from "../../../components/progress-bar";
import Select from "../../../components/select";
import { api } from "../../../config";
import "./subjects.css";

const Subjects = () => {
  const [firstSubject, setFirstSubject] = useState([]);
  const [secondSubject, setSecondSubject] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const getSecondSubject = async () => {
    let res = await fetch(
      api + `/subjects/${formRef.current.firstSubject.value}`
    );
    let data = await res.json();
    setSecondSubject(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subjects = {
      firstSubject: +formRef.current.firstSubject.value,
      secondSubject: +formRef.current.secondSubject.value,
    };

    sessionStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("subjects", JSON.stringify(subjects));
    navigate("/faculties");
  };

  useEffect(() => {
    (async function() {
      let res = await fetch(api + "/subjects");
      if (res.ok) {
        let data = await res.json();
        setFirstSubject(data);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <form onSubmit={handleSubmit} ref={formRef} className="subjects">
          <h2 className="subjects__heading">Asosiy imtihonga xush kelibsiz!</h2>
          <ProgressBar page={2} />
          <label className="subjects__label">
            Birinchi fan
            <Select
              defaultValue={"Blok 1"}
              className="subjects__select"
              name="firstSubject"
              data={firstSubject}
              onChange={getSecondSubject}
              value="subject_id"
              id="subject_id"
              text="subject_name"
            />
          </label>
          <label className="subjects__label">
            Ikkinchi fan
            <Select
              defaultValue={"Blok 2"}
              className="subjects__select"
              name="secondSubject"
              data={secondSubject}
              value="subject_id"
              id="subject_id"
              text="subject_name"
            />
          </label>
          <button className="subjects__submit">Next</button>
        </form>
      </div>
    </>
  );
};

export default Subjects;
