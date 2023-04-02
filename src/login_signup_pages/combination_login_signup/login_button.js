import React from "react";
import { useNavigate } from "react-router";
const Btn=()=>{
   var navigate=useNavigate(); 
return(
    <button onClick={()=>navigate("/login")}>signin</button>
)
}
export default Btn;