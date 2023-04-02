import React,{useEffect} from 'react'
const Json=()=>{
    useEffect(()=>{
        fetch(
        "https://saikumar-f611a-default-rtdb.firebaseio.com/sai.json").then(response => {
            console.log(response);
            return response.json();
          }).then(data => {
            // Work with JSON data here
            console.log(data);
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          })},[])
    return(
        <h1>e</h1>
    )

}
export default Json