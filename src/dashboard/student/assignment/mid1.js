import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import app from "../../../auth/teacher";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import "./mid.css"
const Mid1 = () => {
  const location = useLocation();
  const prop = location.state?.prop;
  const stu = JSON.parse(localStorage.getItem("stu"));
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(app);
      const docRef =doc(
        db,
        "cmrit",
        stu.year,
        stu.semister,
        stu.department,
        "A",
        "subjects", 
        prop,
        "MIDI"
      );
      const docData = await getDoc(docRef);
      if (docData.exists()) {
        const fetchedData = docData.data();
        if (fetchedData) {
          setData(fetchedData);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table id="tm1">
        <thead id="hm1">
          <tr id="rm1">
            <th>S_NO</th>
            <th>Question</th>
          </tr>
        </thead>
        <tbody id="bm1">
          {Object.keys(data).map((key,i) => (
            <tr key={key} id="brm1">
              <td>{i+1}</td>
              <td>{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mid1;
