import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import SignupF from "../signup/signupfaculty.js";
import SignupS from "../signup/signupstudent/signupstudent";
import Login from "../login/login";
import LoginS from "../login/loginstudent";
import Dashf from "../../dashboard/faculty/homef.js";
import Home from "../combination_login_signup/home/home";
import Dashs from "../../dashboard/student/homes/homes.js";
import Mid1 from "../../dashboard/student/assignment/mid1.js";
import Mid2 from "../../dashboard/student/assignment/mid2.js";
import Upload from "../../dashboard/faculty/upload/upload.js";
const Rout=()=>{
    return(
   <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/signupfaculty" element={<SignupF></SignupF>}></Route>
            <Route path="/signupstudent" element={<SignupS></SignupS>}></Route>
            <Route path="/loginfaculty" element={<Login></Login>}></Route>
            <Route path="/loginstudent" element={<LoginS></LoginS>}></Route>
            <Route path="/studenthome" element={<Dashs></Dashs>}></Route>
            <Route path="/facultyhome" element={<Dashf></Dashf>}></Route>
            <Route path="/Assignment1" element={<Mid1></Mid1>}></Route>
            <Route path="/Assignment2" element={<Mid2></Mid2>}></Route>
            <Route path="/upload" element={<Upload></Upload>}></Route>
        </Routes>
    </BrowserRouter>)
}
export default Rout