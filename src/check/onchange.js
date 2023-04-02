import React,{useState} from 'react';
const Change=()=>{

    const [name,setName]=useState(" ");
    const handler=(e)=>{
        setName(e.target.value);

    }


    return(
        <center>
            <input type='text' value={name} onChange={handler}n></input>
            {name}
        </center>
    )

}
export default Change;