import React from 'react'
import { Link } from 'react-router-dom'
import "./com.css"

const Com=()=>{
    return(
        <div>
           <ul className='Account'>
            
            <Link to="/"><li>Home</li></Link>
            <Link to="/signup"><li >Signup</li></Link>   
            <Link to="/login"><li>Login</li></Link>
           
            
           </ul>
            
           
        </div>
    )
}
export default Com