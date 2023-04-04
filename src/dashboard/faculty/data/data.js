import React from "react";
import { useEffect, useState } from "react";
import app from "../../../auth/teacher";
import { getDatabase, onValue, query, ref } from "firebase/database";
import "./data.css";
import { useNavigate } from "react-router";

const FacD = () => {
  const [dataf, setData] = useState({});
  const navi = useNavigate();

  useEffect(() => {
    let t = localStorage.getItem("user").split("@")[0];
    const db = getDatabase(app);
    const d = query(ref(db, "faculty"));
    onValue(d, (snapshot) => {
      const da = snapshot.val();
      const d = da[t];
      setData(d);
    });
  }, []);

  const mid1a = (e) => {
    const n=JSON.parse(e.target.name);
    n["code"]=e.target.value;
    n["mid"]="MIDI";
    console.log((JSON.stringify(n)));
    sessionStorage.setItem("obj",JSON.stringify(n));
    navi("/upload");
  };

  const mid2a = (e) => {
    const n=JSON.parse(e.target.name);
    n["code"]=e.target.value;
    n["mid"]="MIDII";
    console.log((JSON.stringify(n)));
    sessionStorage.setItem("obj",JSON.stringify(n));
    navi("/upload");
  };

  return (
    <div id="b">
      <table id="t">
        <thead id="th">
          <tr id="thr">
            <th>Year</th>
            <th>Semester</th>
            <th>Department</th>
            <th>Section</th>
            <th>Subject</th>
            <th>Upload Assignment</th>
          </tr>
        </thead>
        <tbody id="tb">
          {Object.keys(dataf).map((k, i) => {
            const facultyData = dataf[k];
            return (
              <tr key={k}>
                <td>{facultyData.year}</td>
                <td>{facultyData.semister}</td>
                <td>{facultyData.department}</td>
                <td>{facultyData.section}</td>
                <td>{facultyData.subject}</td>
                <td className="td" id="mid">
                  <span>
                    <button id="m1" value={k} name={JSON.stringify(facultyData)} onClick={mid1a}>
                      MID I
                    </button>
                  </span>
                  <span>
                    <button id="m1" value={k} name={JSON.stringify(facultyData)}onClick={mid2a}>
                      MID II
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FacD;
