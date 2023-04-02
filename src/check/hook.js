import React,{useState,useEffect} from 'react'
var Cook=()=>{
   const [name,setName]=useState(0)
   useEffect(()=>{console.log(name )},[name])

   return(
    <div>
        <h1>{name}</h1>
        <button onClick={()=>{setName(name+1)}}>Count</button>
    </div>
   )
   

}
export default Cook