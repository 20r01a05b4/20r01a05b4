import React from "react";
import Rtc from "../rtc";
import "./buspass.css"
import axios from "axios";
const Pass=()=>{

    const user=localStorage.getItem("isLogIn")
    if(user){
     var mail=user;
     console.log(mail)
    }
    else{
       console.log("no user found")
    }
    var info;
   axios.get("https://saikumar-f611a-default-rtdb.firebaseio.com/sai.json").then((response)=>{
    console.log(response.data)
    }).then((response)=>{info=response.data})
    
   var k=typeof(info)
   console.log(info)
    return(
        <>
        <Rtc></Rtc>
        <div className="form">
        {k}
        </div>
        
        </>
    )
}
export default Pass