import React, { useState, useEffect } from "react";
import "./homef.css";
import { getAuth } from "firebase/auth";
import app from "../../auth/teacher";
import FacD from "./data/data";
import { Dropdown } from "react-bootstrap";

const Dashf = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(false);
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    console.log("logging out");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    const email = user.email;
   // const uid = user.uid;
   // console.log("User is signed in:", email, uid);

    return (
      <div id="facpage">
       <nav id="n">
        <ul>
          <li>
            <a href="/">
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
      <FacD></FacD>
    </div>
    );
  } else {
    console.log("No user is signed in.");

    return <div>You are not logged in</div>;
  }
};

export default Dashf;
