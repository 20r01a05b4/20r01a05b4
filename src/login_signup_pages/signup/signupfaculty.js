import React,{ useState} from 'react';
import './signup.css';
import Btn from '../combination_login_signup/login_button';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from '@firebase/app';
import {Timestamp} from 'firebase/firestore'
import Teacher from '../../auth/teacher';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {doc,setDoc,getDoc } from 'firebase/firestore';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';

const SignupF=()=>{
    var total="a";
   
    const [data,setData]=useState({
        user:"",Email:"",pass:"",con:""

    })
    const {user,Email,pass,con}=data;
    const [dep,setDep]=useState("");
    const [year,setYear]=useState("");
    const [sem,setSem]=useState("");
    const [sec,setSec]=useState("");

    const handler1=async(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});

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
            var con1=initializeApp(Teacher);
            a=getAuth(con1);
        console.log(total);
        await createUserWithEmailAndPassword(a,Email,pass).then(user=>{console.log("the teacher data  "+user)}).catch(err=>alert(err));
       }

    }
    
    const years=(e)=>{
       
        setYear(e.target.id);
     }
     const semister=(e)=>{
        setSem(e.target.id)
}
    let depart=(e)=>{
       
       setDep(e.target.id);
    }
   
    var con1=initializeApp(Teacher);
    var db=getFirestore(con1);
    const[first,setFirst]=useState("");
    const section=async(e)=>{
        setSec(e.target.id);
        
        var sub=await getDoc(doc(db,"cmrit",year,sem,dep,e.target.id,"subjects"));
        setFirst(sub.data());
    }
    //const [ans,setAns]=useState(first);
    const Reset=(e)=>{
        try{
        document.getElementById(year).checked = false
        document.getElementById(sem).checked = false
        document.getElementById(dep).checked = false
        document.getElementById(sec).checked = false
        setYear(" ")
        setDep(" ")
        setSec(" ")
        setSem(" ")
        setFirst(" ")
        ans=" "
       document.getElementById("one").focus();
        
        }
        catch{
            alert("already Resetted")
        }
    }
   
   const confirm =async(e)=>{  
       
        console.log(year,' ',dep," ",sec);
       var sub=await getDoc(doc(db,"cmrit",year,sem,dep,sec,"subjects"));
     
       console.log(sub.data());

       const btn=document.getElementById("subject")
        Object.keys(ans).map((key, index)=>{
            try{
            const val=Object.values(ans);
            const keys=Object.keys(ans);
            console.log(key+"  "+index);
            
             const r=<Dropdown.Item as="button" id={keys.at(index)} value={key} name={user} onClick={addUser}>{val.at(index)}</Dropdown.Item>
           btn.innerHTML(r);
           return console.log(key);
            }
            catch(err){
                
                return console.log(err)
            }
        }
       )
       //setAns(sub.data());
    
    }    
    var ans=first;
    const addUser=async(e)=>{
        if(year===" " || sem===" "||dep===" "||sec===" "){
            alert("you may not selected year or sem or dep or sec")
            return
        }
        try{
           var exist= await getDoc(doc("cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name))
           alert(exist.data());
        }
        catch(err){
            await setDoc(doc(db,"cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name),{
                time:Timestamp.now()
            }).then((data)=>{alert("success")})
        }
        //if(await getDoc(doc("cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name))   
    }
    const AddSubject=(e)=>{
        try{
            document.getElementById(year).checked = false
            document.getElementById(sem).checked = false
            document.getElementById(dep).checked = false
            document.getElementById(sec).checked = false
            setYear(" ")
            setDep(" ")
            setSec(" ")
            setSem(" ")
            setFirst(" ")
            ans=" "
           document.getElementById("one").focus(); 

        }
        catch{
            document.getElementById("one").focus(); 
            alert("no subject is selected")
        }
    }
    return(
        <div>
           
            <form className='signup' onSubmit={handler2}>
                <h1>Create Account</h1><br></br>
                <label className='name'>Your name</label><br></br>
                <input className='in_name' type="text" name="user" value={user} onChange={handler1}></input><br></br><br></br>
                <label className='email'>Email</label><br></br>
                <input type="email" name="Email" value={Email} onChange={handler1}/><br></br><br></br>
                <label className='password'>Password</label><br></br>
                <input type="password" name="pass" value={pass}  onChange={handler1}></input><br></br><br></br>
                <label className='confirm'>Confirm Password</label><br></br>
                <input type="password" name="con" value={con} onChange={handler1}></input><br></br><br></br>
                <div className="yearing">
                <label htmlFor='AcademicYear' id="ayear">AcademicYear</label><br></br>
                <input type="radio" value={year.one} id="one" name="year" onChange={years}></input><label>1</label><br></br>
                <div id="one"></div>
                <input type="radio" value={year.two} id="two" name="year" onChange={years}></input><label>2</label><br></br>
                <div id="two"></div>
                <input type="radio" value={year.three} id="three" name="year" onChange={years}></input><label>3</label><br></br>
                <div id="three"></div>
                <input type="radio" value={year.four} id="four" name="year" onChange={years}></input><label>4</label><br></br><br></br>
                <div id="four"></div>
                </div>
                <div className="sem">
                <label htmlFor='semister'>semister</label><br></br>
                <input type="radio" value={sem} id="1" name="semister" onChange={semister}></input><label>I</label><br></br>
                <input type="radio" value={sem} id="2" name="semister" onChange={semister}></input><label>II</label><br></br>
                </div>
                <div className="check">
                <label htmlFor='depart'>Deparment</label><br></br>
                <input type="radio" value={dep} id="cse" name="department" onChange={depart}></input><label>cse</label><br></br>
                <input type="radio" value={dep} id="ece" name="department" onChange={depart}></input><label>ece</label><br></br>
                <input type="radio" value={dep} id="civil" name="department" onChange={depart}></input><label>civil</label><br></br>
                <input type="radio" value={dep} id="mech" name="department" onChange={depart}></input><label>mech</label><br></br>
                </div><br></br>
               <br></br>
               <div className="section">
                <label htmlFor='section'>Section</label><br></br>
                <input type="radio" value={sec} id="A" name="section" onChange={section}></input><label>A</label><br></br>
                <input type="radio" value={sec} id="B" name="section" onChange={section}></input><label>B</label><br></br>
                <input type="radio" value={sec} id="C" name="section" onChange={section}></input><label>C</label><br></br>
                <input type="radio" value={sec} id="D" name="section" onChange={section}></input><label>D</label><br></br>
                </div><br></br> <br></br>
               <button onClick={confirm}>confirm</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={Reset}>reset</button><br></br><br></br><br></br>
                <DropdownButton id="subject" title="Select Subject">
                    <div id="subjects"></div>
              
                </DropdownButton><br></br><br></br>
                
                <div className="AddSubject">
                    <button onClick={AddSubject}>AddSubject</button>
                </div><br></br><br></br>
                <input type="submit"></input>
                <h3>Already have an account?</h3>
                <Btn></Btn>    
            </form>
        </div>
    )
    
}
export default SignupF;