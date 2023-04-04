import React from "react";
import { NavDropdown, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import "./home.css";

const Home1 = () => {
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
    <div className="page">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">{<div id="h">Home</div>}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Sign Up" id="signup1" className="mr-2 ml-auto">
                <Dropdown.Item id="signf" onClick={faculty}>Faculty</Dropdown.Item>
                <Dropdown.Item id="signs" onClick={student}>Student</Dropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login" id="login1" className="mr-auto">
                <Dropdown.Item onClick={facultylogin}>Faculty</Dropdown.Item>
                <Dropdown.Item onClick={studentlogin}>Student</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1>This is the home page.</h1>
    </div>
  );
};

export default Home1;
