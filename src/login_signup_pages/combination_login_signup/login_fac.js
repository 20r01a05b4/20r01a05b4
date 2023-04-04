import React from "react";
import { useNavigate } from "react-router";
const Btn=()=>{
   var navigate=useNavigate(); 
return(
    <button onClick={()=>navigate("/loginfaculty")}>signin</button>
)
}
const Btn1=()=>{
    var navigate=useNavigate();
    return(
        <button onClick={()=>navigate("/loginstudent")}>signin</button>
    )

}
export {Btn};
export {Btn1};