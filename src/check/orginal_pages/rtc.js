import React from "react";
import { Navbar,Container,Nav,NavDropdown,Dropdown } from "react-bootstrap";
import { signOut } from "firebase/auth";
import Student from "../../auth/auth";
import {useNavigate } from "react-router";
import Teacher from "../../auth/teacher";
import { initializeApp } from "@firebase/app";

//import Home1 from "../../login_signup_pages/combination_login_signup/home/home";
const Rtc=()=>{
   
    var user=localStorage.getItem("user");
    const navigator=useNavigate()
    const signout=async()=>{
        if(localStorage.getItem("usertype"==="teacher")){
            const t=initializeApp(Teacher)
       await signOut(t).then((response)=>{localStorage.removeItem("isLogIn")}).then(()=>{localStorage.setItem("isLogIn",false)}).then((err)=>{navigator("/")}).catch((err)=>{console.log(err)})
    }
    else{
        const s=initializeApp(Student)
        await signOut(s).then((response)=>{localStorage.removeItem("isLogIn")}).then(()=>{localStorage.setItem("isLogIn",false)}).then((err)=>{navigator("/")}).catch((err)=>{console.log(err)}) 
    }
       
    }

    return(
        <>
        <Navbar bg="white" variant="light">
        <Container>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="me-auto">
          
            <Navbar.Brand href="/search">SearchBus</Navbar.Brand>
            <Navbar.Brand href="/buspass">Buspass</Navbar.Brand>
        </Nav>
        <NavDropdown  className="logout" title={user}>
            <Dropdown.Item onClick={signout} >logout</Dropdown.Item>
        </NavDropdown>
        </Container>
    </Navbar>
        <h1>welcome {user}</h1>
        </>
    )
}
export default Rtc