/* eslint-disable no-eval */

import React,{useState} from 'react'
import "./check/cal.css"
const Calci=()=>{
  const [input,setInput]=useState("")
  const [ans,setAns]=useState(0)
  const handler=(e)=>{
    setInput(input+e.target.name)
  }
 const hand=()=>{
  if(input[input.length-1]==="+"||input[input.length-1]==="-"||input[input.length-1]==="*"){
    alert("please give a valid input");
  }
  else{
    setAns(eval(input));
  }
 }

 
  return(
    <center>
      <input type="text" value={input} name="input" onChange={(e)=>{setInput(e.target.value)}}></input>
      <br></br><br></br>
      <button type="submit" onClick={hand}>Result</button><br></br>
      <h1>{ans}</h1>
      <button type="text" value={input} name="1" onClick={handler} >1</button>
      <button type="text" value={input} name="2" onClick={(e)=>{setInput(input+e.target.name)}} >2</button>
      <button type="text" value={input} name="3" onClick={(e)=>{setInput(input+e.target.name)}} >3</button>
      <button type="text" value={input} name="+" onClick={(e)=>{setInput(input+e.target.name)}} >+</button><br></br>
      <button type="text" value={input} name="4" onClick={(e)=>{setInput(input+e.target.name)}} >4</button>
      <button type="text" value={input} name="5" onClick={(e)=>{setInput(input+e.target.name)}} >5</button>
      <button type="text" value={input} name="6" onClick={(e)=>{setInput(input+e.target.name)}} >6</button>
      <button type="text" value={input} name="-" onClick={(e)=>{setInput(input+e.target.name)}} >-</button><br></br>
      <button type="text" value={input} name="7" onClick={(e)=>{setInput(input+e.target.name)}} >7</button>
      <button type="text" value={input} name="8" onClick={(e)=>{setInput(input+e.target.name)}} >8</button>
      <button type="text" value={input} name="9" onClick={(e)=>{setInput(input+e.target.name)}} >9</button>
      <button type="text" value={input} name="/" onClick={(e)=>{setInput(input+e.target.name)}} >/</button><br></br>
      <button type="text" value={input} name="0" onClick={(e)=>{setInput(input+e.target.name)}} >0</button>
      <button type="text" value={input} name="x" onClick={(e)=>{setInput(input.slice(0,input.length -1))}} >x</button>
      <button type="text" value={input} name="clr" onClick={(e)=>{setInput("")}} >clr</button><br></br>
      <button type="text" value={input} name="%" onClick={(e)=>{setInput(input+e.target.name)}} >%</button>
   
   
   
   
    </center>





    
  )
}
export default Calci;