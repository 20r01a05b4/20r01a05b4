import React,{useState} from 'react';
const Back=()=>{
    const [data,setData]=useState({username:'',password:''})
    //const [username,password]=data;
    const handle2=(e)=>{
        
        setData(
            {...data,[e.target.name]:[e.target.value]}
        );
    }


  
  
   
    const handle1=(e)=>{
        e.preventDefault();
        
        console.log(data);
    }
    
    return(
        <div>
            <form onSubmit={handle1} value={data}>
                <label>name</label>
                <input type="text" onChange={handle2} value={data.username} name="username"></input>
                <label>password</label>
                <input type="password" value={data.password} onChange={handle2} name="password"></input>
                <input type="submit" name="submit"></input>
            </form>
        </div>
    )
}
export default Back;