import React, { useState, useEffect } from "react";
import "./homes.css";
import { getAuth } from "firebase/auth";
import app from "../../../auth/teacher";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router";
import Data from "../data/data";
import { getDatabase, ref } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";

const DashS = () => {
  const navi = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setUser(user);
    });

    // Unsubscribe from the onAuthStateChanged listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    navi("/loginstudent");
    console.log("logging out");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    const db = getDatabase(app);
    const email = localStorage.getItem("user")
    const usersRef = ref(db, "students/" + email.split("@")[0]);
    sessionStorage.setItem("email", email.split("@")[0]);
   

    return (
      <div>
        <nav id="n">
          <ul>
            <li>
              <a href="/studenthome">
                <h2>Home</h2>
              </a>
            </li>
            <li className="dropdown"></li>
            <div id="mail" style={{ float: "right" }}>
              <Dropdown id="drop">
                <Dropdown.Toggle className="drop1" variant="light" id="profile-button">
                  <span>{email.split("@")[0]}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu id="smenu">
                  <Dropdown.Item>Edit Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            
              <div id="data">
                <Data></Data>
              </div>
              </div>
            
          </ul>
        </nav>
        <div>{/* Add your content here */}</div>
      </div>
    );
  } else {
    console.log("No user is signed in.");

    return <div>You are not logged in</div>;
  }
};

export default DashS;
