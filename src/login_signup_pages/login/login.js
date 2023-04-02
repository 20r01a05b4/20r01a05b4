import React from 'react'
import { useState } from 'react'
import "./login.css"
import Student from '../../auth/auth'
import {signInWithEmailAndPassword} from 'firebase/auth'
//import Tsrtc from '../combination_login_signup/orginal_page_router'
import { useNavigate } from 'react-router'

import Teacher from '../../auth/teacher'
import { initializeApp } from '@firebase/app'
//import Navi from '../routing/rtc_route'
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState({user:"",pass:""})
    
   
    function hand1(e) {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    
    const hand=(e)=>{
        e.preventDefault();

    if(document.getElementById("teacher").checked){
    const t=initializeApp(Teacher);
    localStorage.setItem("usertype","teacher");

        try {
          signInWithEmailAndPassword(t, data.user, data.pass)
         navigate("/tsrtc"); localStorage.setItem("user", data.user)
     } catch (error) {
         alert("password or username are incorrect")
     }
}
else{
    const s=initializeApp(Student);
    localStorage.setItem("usertype","student");
    try {
        signInWithEmailAndPassword(s, data.user, data.pass).then(()=>{localStorage.setItem("isLogin",true)})
       navigate("/tsrtc"); 
       localStorage.setItem("user", data.user)
   } catch (error) {
       alert("password or username are incorrect")
   }
  
}
}
  
    return(
        
        <div className='center'>
       
            <form onSubmit={hand} action="../../check/orginal_pages/rtc">
            <label>Select type</label><br></br>
                <input type="radio" value="teacher" id="teacher" name="purpose"></input><label>Teacher</label>
                <input type="radio" value="student" id="student" name="purpose"></input><label>Student</label><br></br>
                <label>Email</label><br></br>
                <input type="email" name="user" value={data.user} onChange={hand1} placeholder="email"></input><br></br>
                <label>Password</label><br></br>
                <input type="password" name="pass" value={data.pass} onChange={hand1} ></input><br></br><br></br>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}
export default Login