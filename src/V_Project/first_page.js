import React from 'react'
import "./first_page.css"

import Rout from '../login_signup_pages/routing/router'
   const SignUp=()=>{ return(
        <div className='main-page'>
             
            <div className='head'>
               
                <header className='welcome'>
                    <h1 className='Welcome'>CMRIT  KAKSHA</h1>
                    
                </header>
               <Rout></Rout>
            </div>
        </div>
    )
}

export default SignUp