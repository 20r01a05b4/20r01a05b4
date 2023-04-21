import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import app from "../../../auth/teacher";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import "./mid.css"
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Mid1 = () => {
  const location = useLocation();
  const navi = useNavigate();
  const prop = location.state?.prop;
  const stu = JSON.parse(localStorage.getItem("stu"));
  const [data, setData] = useState({});
  const handleLogout = () => {
    navi("/loginstudent");
    console.log("logging out");
  };

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

  const email = localStorage.getItem("user");
  return (
    <div className="mid1page">
       <nav id="n">
        <ul>
          <li>
            <a href="/Homes">
              <h2>Home</h2>
            </a>
          </li>
          <li className="dropdown"></li>
          <div id="mail">
            <Dropdown id="prof">
              <Dropdown.Toggle variant="light" id="profile">
                <span>{email.split("@")[0]}</span>
              </Dropdown.Toggle>
              <Dropdown.Menu id="prof-menu">
                <Dropdown.Item>Edit Profile</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </ul>
      </nav>
     
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
              <td style={{textAlign:"center"}}>{<h2>{i+1}</h2>}</td>
              <td>{<h3>{data[key]}</h3>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Mid1;
