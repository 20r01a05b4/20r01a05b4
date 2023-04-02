import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Search  from "../combination_login_signup/search/search";
import SignupF from "../signup/signupfaculty.js";
import SignupS from "../signup/signupstudent/signupstudent";
import Login from "../login/login";
import Rtc from "../../check/orginal_pages/rtc";
import Home from "../combination_login_signup/home/home";
import Pass from "../../check/orginal_pages/buspass/buspass";
import Home1 from "../../check/orginal_pages/home_rtc/home_rtc";
const Rout=()=>{
    var a=localStorage.getItem("isLogIn")
    console.log("local is login "+a);
    console.log(typeof(a));
    return(
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signupfaculty" element={<SignupF></SignupF>}></Route>
            <Route path="/signupstudent" element={<SignupS></SignupS>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/tsrtc" element={<Rtc></Rtc>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
            <Route path="/buspass" element={<Pass></Pass>}></Route>
            <Route path="/home" element={<Home1></Home1>}></Route>
        </Routes>
    </BrowserRouter>)
}
export default Rout