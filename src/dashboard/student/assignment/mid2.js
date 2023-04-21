import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import app from "../../../auth/teacher";
import { getDoc, doc, getFirestore } from "firebase/firestore";
const Mid2 = () => {
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
        "MIDII"
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
    <div className="mid2page">
      <table >
        <thead>
          <tr>
            <th>S_NO</th>
            <th>Question</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key,i) => (
            <tr key={key}>
              <td>{i+1}</td>
              <td>{data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mid2;
