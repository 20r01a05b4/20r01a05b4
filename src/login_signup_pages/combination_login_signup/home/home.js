import React from "react";
import { NavDropdown,Dropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router";
const Home1=()=>{
    const navigate=useNavigate();
    const faculty=()=>{
      navigate("/signupfaculty");
    }
    const student=()=>{
        navigate("/signupstudent")
    }
    return(
        <div className="page">
           <div className="nav">
        
                <Navbar bg="white" variant="light">
                    <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                    <NavDropdown  className="logout" title="SignUp">
                        <Dropdown.Item onClick={faculty} >Faculty</Dropdown.Item>
                        <Dropdown.Item onClick={student} >Student</Dropdown.Item>
                    </NavDropdown>
                        <Nav.Link href="/login">login</Nav.Link>
                        <Nav.Link href="/search">Search Bus</Nav.Link>
                    </Nav>
                    </Container>
                </Navbar>
           </div>
           <h1>This is home page</h1>
                
           
        </div>
    )

}
export default Home1