import { useEffect, useState } from "react";
import { Navbar } from "../../components/layouts";
import { Loader } from "../../components/loader/loader";
import { ResultItem } from "../../components/result-item";
import { api } from "../../config";
import "./profile.css";

const Profile = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");

  useEffect(() => {
    try {
      (async function () {
        setLoading(true);
        let res = await fetch(api + "/results", {
          headers: { token: sessionToken || localToken },
        });
        setLoading(false);
        let data = await res.json();
        setResults(data);
      })();
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  }, [localToken, sessionToken]);

  return (
    <Navbar>
      <div className="profile">
        <h2 className="profile__heading">Testlar</h2>
        {loading ? <Loader /> : <></>}
        {results.length > 0
          ? results.map((result, index) => (
              <ResultItem
                key={result.result_id}
                result={result}
                count={index + 1}
              />
            ))
          : null}
      </div>
    </Navbar>
  );
};

export default Profile;
