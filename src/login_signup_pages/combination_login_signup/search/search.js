import React from "react";
import "./search.css";
import Rtc from "../../../check/orginal_pages/rtc";
import { useState } from "react";
//mport { auth } from "../../../auth/auth";

const Search=()=>{
 


  const [from,setFrom]=useState("");
  const [to,setTo]=useState("");
  //const [ap,setAp]=useState([])
  const hand1=(e)=>{
    setFrom(e.target.value)
  }
  
  const hand=(e)=>{
    e.preventDefault();
    alert("distance will displayed soon");
  }
  const user=localStorage.getItem("user"); 
  console.log(user)
  
  if(localStorage.getItem("isLogIn")){
    console.log("welcome "+localStorage.getItem("user"));
  }
  else{
    console.log("no user found")
  }
  
  return( 
          <>
          <Rtc></Rtc>
            <center className="sea">
              <br></br> <br></br>
              <form onSubmit={hand}>
                <div className="from">
                  <label htmlFor="from">From</label><br></br>
                  <input id="from" type="text" name="from" value={from} onChange={hand1}></input><br></br><br></br>
                </div>
                <div className="to">
                  <label htmlFor="to">To</label><br></br>
                  <input id="to" type="text" name="to" value={to} onChange={(e)=>{setTo(e.target.value)}}></input><br></br><br></br>
                </div>
                <div className="but">
                  <br></br><br></br>
                  <input type="submit"></input><br></br><br></br>
                </div>
              </form>
              <h1>{from} <span>{to}</span></h1>
            </center>
            </>
           
           
        
  )
}
export default Search