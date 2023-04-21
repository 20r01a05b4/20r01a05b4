import React from 'react'
import { useState } from 'react'
import "./login.css"
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import app from '../../auth/teacher'
import 'react-toastify/dist/ReactToastify.css';
import Rhome from '../combination_login_signup/realhome/rhome'
const Login=()=>{
    const navigate=useNavigate();
    const [data,setData]=useState({user:"",pass:""})
    
   
    function hand1(e) {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    
    const hand=async(e)=>{
        e.preventDefault();

    
    
    const auth=getAuth(app);
    localStorage.setItem("usertype","teacher");

        try {
         await signInWithEmailAndPassword(auth, data.user, data.pass).then(()=>{navigate("/"); localStorage.setItem("user", data.user)})
         
     } catch (error) {
         alert("email or password are wrong")
     }
}
 return(
    <div id="loginfpage">
        <Rhome></Rhome><br></br>
        <div className='center' id="flogin">
            
            <form onSubmit={hand} action="../../check/orginal_pages/rtc">
                <label>Email</label><br></br>
                <input type="email" name="user" value={data.user} onChange={hand1} placeholder="email"></input><br></br>
                <label>Password</label><br></br>
                <input type="password" name="pass" value={data.pass} onChange={hand1} ></input><br></br><br></br>
                <input id="submit" type="submit"></input>
            </form>
        </div>
        </div>
    )
}
export default Login