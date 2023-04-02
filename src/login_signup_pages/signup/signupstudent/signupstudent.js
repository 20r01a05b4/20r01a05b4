import React,{useState} from 'react';
import '../signup.css';
import Student from '../../../auth/auth';
import Btn from '../../combination_login_signup/login_button';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app';
import {setDoc,doc} from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const SignupS=()=>{
    
    const [data,setData]=useState({
        user:"",Email:"",pass:"",con:""

    })
    const[rollnumber,setRollnumber]=useState(" ")
    const {user,Email,pass,con}=data;
    const handler1=async(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});

    }
    const Rollnumber=(e)=>{
        setRollnumber(e.target.value)
    } 
    const handler2=async(e)=>{
        e.preventDefault();
        
        var a=data.pass;
        var b=data.con;
        if((data.user).length<=5){
            console.log("wrong username")
            
        }
      else if(a!==b){
       
        console.log("passwords not are matching")
       
        }
       else{
            const con2=initializeApp(Student);
            b=getAuth(con2)
            const db=getFirestore(con2);
            console.log("student is selcted")
            console.log(pass+" "+Email)
            
       await createUserWithEmailAndPassword(b,Email,pass).then(user=>{console.log("student data is"+user.email)}).catch(err=>alert("email or password are wrong"));
       await setDoc(doc(db,year,sem,dep,sec),{name:user,rollnumber:rollnumber}).then(()=>alert("successfully submitted")).catch((err)=>{console.log(err)})
       }
    }
    const[year,setYear]=useState("")
    const[sem,setSem]=useState(" ")
    const[dep,setDep]=useState(" ")
    const[sec,setSec]=useState(" ")
    const years=(e)=>{
       // e.preventDefault();
        setYear(e.target.id)
    }
    const semister=(e)=>{
      //  e.preventDefault()
        setSem(e.target.id)
    }
    const depart=(e)=>{
       // e.preventDefault();
        setDep(e.target.id)
    }
    const section=(e)=>{
       // e.preventDefault(" ");
        setSec(e.target.id);
    }
    return(
        <div>
           
            <form className='signup' onSubmit={handler2}>
                <h1>Create Account</h1><br></br>
                <label className='name'>Your name</label><br></br>
                <input className='in_name' type="text" name="user" value={user} onChange={handler1}></input><br></br><br></br>
                <label className='email'>Email</label><br></br>
                <input type="email" name="Email" value={Email} onChange={handler1}/><br></br><br></br>
                <label className="rollno">RollNumber</label><br></br>
                <input type="text"  name="rollnumber" value={rollnumber} onChange={Rollnumber}/><br></br>
                <label className='password'>Password</label><br></br>
                <input type="password" name="pass" value={pass}  onChange={handler1}></input><br></br><br></br>
                <label className='confirm'>Confirm Password</label><br></br>
                <input type="password" name="con" value={con} onChange={handler1}></input><br></br><br></br>
                <div className="yearing">
                <label htmlFor='AcademicYear' id="ayear">AcademicYear</label><br></br>
                <input type="radio" value={year.one} id="one" name="year" onChange={years}></input><label>1</label><br></br>
                <input type="radio" value={year.two} id="two" name="year" onChange={years}></input><label>2</label><br></br>
                <input type="radio" value={year.three} id="three" name="year" onChange={years}></input><label>3</label><br></br>
                <input type="radio" value={year.four} id="four" name="year" onChange={years}></input><label>4</label><br></br><br></br>
                <div id="four"></div>
                </div><br></br>
                <div className="sem">
                <label htmlFor='semister'>semister</label><br></br>
                <input type="radio" value={sem} id="1" name="semister" onChange={semister}></input><label>I</label><br></br>
                <input type="radio" value={sem} id="2" name="semister" onChange={semister}></input><label>II</label><br></br>
                </div><br></br>
                <br></br>
                <div className="check">
                <label htmlFor='depart'>Deparment</label><br></br>
                <input type="radio" value={dep} id="cse" name="department" onChange={depart}></input><label>cse</label><br></br>
                <input type="radio" value={dep} id="ece" name="department" onChange={depart}></input><label>ece</label><br></br>
                <input type="radio" value={dep} id="civil" name="department" onChange={depart}></input><label>civil</label><br></br>
                <input type="radio" value={dep} id="mech" name="department" onChange={depart}></input><label>mech</label><br></br>
                </div><br></br>
                <div className="section">
                <label htmlFor='section'>Section</label><br></br>
                <input type="radio" value={sec} id="A" name="section" onChange={section}></input><label>A</label><br></br>
                <input type="radio" value={sec} id="B" name="section" onChange={section}></input><label>B</label><br></br>
                <input type="radio" value={sec} id="C" name="section" onChange={section}></input><label>C</label><br></br>
                <input type="radio" value={sec} id="D" name="section" onChange={section}></input><label>D</label><br></br>
                </div><br></br> <br></br>

                <input type="submit"></input>
                <h3>Already have an account?</h3>

                <Btn></Btn>
                
                
            </form>
        </div>
    )
    
}
export default SignupS;