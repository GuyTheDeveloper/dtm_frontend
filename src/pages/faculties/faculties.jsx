import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FacultyInfo } from "../../components/faculty-info";
import { FacultyItem } from "../../components/faculty-item";
import { Header } from "../../components/header";
import { ProgressBar } from "../../components/progress-bar";
import { UniversitySelect } from "../../components/university-select";
import { api } from "../../config";
import "./faculties.css";

const Faculties = () => {
  const [universities, setUniversities] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [facultyInfo, setFacultyInfo] = useState([]);
  const navigate = useNavigate();

  //add faculty
  const addFunc = (faculty) => {
    if (faculties.length >= 5) return;

    const oldFaculty = faculties.find(
      (el) => el.faculty_id === faculty.faculty_id
    );

    if (oldFaculty) return;

    setFaculties((prev) => [...prev, faculty]);
  };

  //get single faculty info
  const getFacultyInfo = async (faculty_id) => {
    let res = await fetch(api + `/faculties/${faculty_id}`);
    let data = await res.json();
    setFacultyInfo(data);
  };

  //remove faculty
  const removeFunc = (faculty_id) => {
    setFaculties((prev) =>
      prev.filter((faculty) => faculty.faculty_id !== faculty_id)
    );
  };

  const sendInfo = () => {
    if (!faculties.length)
      return alert("Eng kamida 1 ta fakultet tanlash kerak!");

    sessionStorage.setItem("faculties", JSON.stringify(faculties));
    navigate("/tests");
  };

  let { firstSubject, secondSubject } = JSON.parse(
    sessionStorage.getItem("subjects")
  );

  useEffect(() => {
    if (!firstSubject || !secondSubject) return navigate("/");

    (async function () {
      let res = await fetch(
        api +
          `/universities?firstSubject=${firstSubject}&secondSubject=${secondSubject}`
      );
      let data = await res.json();
      setUniversities(data);
    })();
  }, [firstSubject, secondSubject, navigate]);

  return (
    <>
      <Header />
      <div className="container faculty__main">
        <h2 className="subjects__heading">Asosiy imtihonga xush kelibsiz!</h2>
        <ProgressBar page={3} />
        <div className="faculties">
          <label className="faculties__label">
            Yo'nalish tanlang
            {universities?.map((university) => (
              <UniversitySelect
                key={university.university_id}
                name={university.university_name}
                data={university.faculties}
                addFunc={addFunc}
                onHover={getFacultyInfo}
              />
            ))}
          </label>
          <div>
            {/*Choosen faculties*/}
            <div
              className={
                faculties.length ? "faculties__clicked" : "faculties__none"
              }
            >
              {faculties.length > 0
                ? faculties.map((faculty, index) => (
                    <FacultyItem
                      key={faculty.faculty_id}
                      faculty={faculty}
                      func={removeFunc}
                    />
                  ))
                : null}
            </div>
            {/*Choosen faculties ends*/}

            <div
              className={
                facultyInfo.length ? "faculties__info" : "faculties__none"
              }
            >
              <h3 className="faculties__name">
                {facultyInfo[0]?.faculty_name}
              </h3>
              <p className="faculties__region">{facultyInfo[0]?.region_name}</p>
              <FacultyInfo
                type={"Grant"}
                count={facultyInfo[0]?.grant_count}
                score={facultyInfo[0]?.grant_score}
              />
              <FacultyInfo
                type={"Shartnoma"}
                count={facultyInfo[0]?.contract_count}
                score={facultyInfo[0]?.contract_score}
              />
            </div>
          </div>
        </div>
        <button onClick={sendInfo} className="subjects__submit">
          Next
        </button>
      </div>
    </>
  );
};

export default Faculties;
