import React from "react";
import { NavDropdown, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import "./rhome.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Rhome= () => {
  const navigate = useNavigate();

  const faculty = () => {
    navigate("/signupfaculty");
  };

  const student = () => {
    navigate("/signupstudent");
  };

  const studentlogin = (e) => {
    navigate("/loginstudent");
  };

  const facultylogin = (e) => {
    navigate("/loginfaculty");
  };

  return (
    <div id="rpage">
      <Navbar  expand="lg">
        <Container>
          <Navbar.Brand href="/">{<div id="h">Home</div>}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" id="log-sign">
              <NavDropdown title="Signup" id="signup1" className="mr-2 ml-auto">
                <Dropdown.Item id="signf" onClick={faculty}>Faculty</Dropdown.Item>
                <Dropdown.Item id="signs" onClick={student}>Student</Dropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login" id="login1" className="mr-auto">
                <NavDropdown.Item onClick={facultylogin} id="logf">Faculty</NavDropdown.Item>
                <NavDropdown.Item onClick={studentlogin} id="logs">Student</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  );
};

export default Rhome;
