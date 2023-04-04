import { getDatabase, ref, onValue, query } from "firebase/database";
import { useEffect, useState } from "react";
import { getFirestore } from 'firebase/firestore';
import { getDoc, doc } from "firebase/firestore";
import app from "../../../auth/teacher";
import "./subdata.css";
import { useNavigate } from "react-router";

const Data = () => {
  const [sub, setSub] = useState(null);
  
  useEffect(() => {
    const db = getDatabase(app);
    const Ref = query(ref(db, "students"));

    onValue(Ref, (snapshot) => {
      const d = snapshot.val();
      const m = " " + localStorage.getItem("user").split("@")[0];
      localStorage.setItem("stu", JSON.stringify(d[m]));
      const fire = getFirestore(app);
      const ans = getDoc(doc(fire, "cmrit", d[m]["year"], d[m]["semister"], d[m]["department"], "A", "subjects"));
      ans.then((result) => {
        setSub(result.data());
      }).catch((error) => {
        console.log(error);
      });
    });

  }, []);
  
  const navigate = useNavigate();
  
  const assignm1 = (e) => {
    e.preventDefault();
    const v = e.target.value;
    alert(v);
    alert("assigning mid1" + v);
    navigate("/Assignment1",{state:{prop:v}});
  };
  
  const assignm2 = (e) => {
    e.preventDefault();
    const v = e.target.value;
    alert("assigning mid2" + v);
    navigate("/Assignment2",{ state: { prop:v} });
  };
  
  return (
    <div className="sub-data">
      {sub ?
        <table>
          <thead>
            <tr>
              <th>Assignment(MID I)</th>
              <th>Assignment(MID II)</th>
              <th>Subject Name</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(sub).map((key, index) => {
              try {
                const val = Object.values(sub);
                const keys = Object.keys(sub);

                return (
                  <tr key={keys.at(index)}>
                    <td><button className="btn" id="m1" value={keys.at(index)} onClick={assignm1}>MID I</button></td>
                    <td><button className="btn" id="m2" value={keys.at(index)} onClick={assignm2}>MID II</button></td>
                    <td><button className="btn">{val.at(index)}</button></td>
                  </tr>
                );
              } catch (err) {
                console.log(err);
                return null;
              }
            })}
          </tbody>
        </table>
        : "Loading..."}
    </div>
  );
}

export default Data;