import React from "react";
import { NavDropdown, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Navbar id="navhomme" bg="light" expand="lg">
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
      <div id="hd">
      <h1>About CMRIT</h1>
      <p>
CMR Institute of Technology is one of the best engineering Colleges for aspiring engineering students. It is one of the three colleges established by MGR Educational Society. CMR Institute of Technology was established in 2005 in 10 Acres and built up area of 31132.72 Sq.M. with a single – minded aim to provide a perfect platform to students in the field of Engineering, Technology and Management for their academic and overall personality development. The College has a rich tradition of soaring high with academic excellence & overall personal growth of students. 
      </p>
     </div>
     <div id="logoh">
      <img id="limg" src="https://th.bing.com/th/id/OIP.v784RYDbIWLazPprYmFmcQHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="logoc" ></img>
     </div>
    </div>
  );
};

export default Home1;
