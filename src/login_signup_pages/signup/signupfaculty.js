import React,{ useState} from 'react';
import './signup.css';
import {Btn} from '../combination_login_signup/login_fac';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {Timestamp} from 'firebase/firestore'
import app from '../../auth/teacher';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import {doc,setDoc,getDoc } from 'firebase/firestore';

import { set,ref,getDatabase} from 'firebase/database';
import { useNavigate } from 'react-router';
import { DropdownButton, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rhome from '../combination_login_signup/realhome/rhome';
const SignupF=()=>{
    var navi=useNavigate();
    
    let db1=getDatabase(app);
   
    const [data,setData]=useState({
        user:"",Email:"",pass:"",con:""

    })

    const {user,Email,pass,con}=data;
    const [dep,setDep]=useState("");
    const [year,setYear]=useState("");
    const [sem,setSem]=useState("");
    const [sec,setSec]=useState("");
    const [list, setList] = useState({});
    const handler1=async(e)=>{
        
        setData({...data,[e.target.name]:e.target.value});

    }
    const handler2=async(e)=>{
        e.stopPropagation()
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
            
        a=getAuth(app);
        await createUserWithEmailAndPassword(a,Email,pass).then(user=>{console.log("the teacher data  "+user)}).catch(err=>alert("email or password already in use"));

        await navi("/loginfaculty")
        console.log(list);   
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
    
    var db=getFirestore(app);
    const[first,setFirst]=useState("");
    const section=async(e)=>{
        setSec(e.target.id);
        
        var sub=await getDoc(doc(db,"cmrit",year,sem,dep,e.target.id,"subjects"));

        setFirst(sub.data());
    }
    const [ans,setAns]=useState(first);
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
        setAns(" ")
       document.getElementById("one").focus();
        
        }
        catch{
            alert("already Resetted")
        }
        console.log(ans); 
    }
   
   const confirm =async(e)=>{  
    
    e.preventDefault();
        console.log(year,' ',dep," ",sec);
       var sub=await getDoc(doc(db,"cmrit",year,sem,dep,sec,"subjects"));
     
       console.log(sub.data());
      
       setAns(sub.data());
    
    }    
    
    const addUser=async(e)=>{
       
        e.preventDefault();
        if(year===" " || sem===" "||dep===" "||sec===" "){
            alert("you may not selected year or sem or dep or sec")
            return
        }
        try{
           var exist= await getDoc(doc("cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name))
           alert(exist.data());

           await setDoc(doc(db,"cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name),{
            time:Timestamp.now()
        }).then((data)=>{alert("success")})
        let ID,Value;
        ID=e.target.id;Value=e.target.value;
        setList({ ...list, [ID]: Value});
        console.log(Value)
         //console.log(subject);//console.log(VALUE)
       await  set(ref(db1, 'faculty/'+data.user.split("@")[0]+"/"+e.target.id), {
         username: user,
         email: Email,"year":year,"semister":sem,"department":dep,"section":sec
       }).then((data)=>{
         alert("faculty data")
       }).catch((err)=>{
         alert("sorry error...")
       }); 
           
        }
        catch(err){
            await setDoc(doc(db,"cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name),{
                time:Timestamp.now()
            }).then((data)=>{alert("success")})
           
             let ID,Value;
             ID=e.target.id;Value=e.target.value;
             setList({ ...list, [ID]: Value});
             console.log("the subject is "+e.target.name)
           await  set(ref(db1, 'faculty/'+data.Email.split("@")[0]+"/"+e.target.id), {
             username: user,"subject":e.target.name,
             email: Email,"year":year,"semister":sem,"department":dep,"section":sec
           }).then((data)=>{
             alert("faculty data")
           }).catch((err)=>{
             alert("sorry error...")
           }); 
        /*   await  set(ref(db1,'faculty/'+data.user.split("@")[0]+"/"+"subject"), {
            obj:VALUE
        }).catch((err)=>{
          alert("sorry error...")
        }); */
        }
        
       
        //if(await getDoc(doc("cmrit",year,sem,dep,sec,"subjects",e.target.id,e.target.name))   
    }
    const AddSubject=(e)=>{
       
        e.preventDefault();
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
            setAns("  ")
           document.getElementById("one").focus(); 

        }
        catch{
            document.getElementById("one").focus(); 
            alert("no subject is selected")
        }
    }
    return(
        <div id="signfpage">
           <Rhome></Rhome><br></br>
            <form className='signup' id="form-group " onSubmit={handler2}>
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
               <button onClick={confirm} id="confirm">confirm</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={Reset} id="reset">reset</button><br></br><br></br><br></br>
                <div>
      <div id="subjdrop">
      <DropdownButton id="subj" title="Select Subject">
      
      {Object.keys(ans).map((key, index) => {
        try {
          const val = Object.values(ans);
          const keys = Object.keys(ans);
          console.log(key + "  " + index);
          return (
            <Dropdown.Item
              key={keys[index]}
              as="button"
              id={keys[index]}
              value={key}
              name={ans[key]}
              onClick={addUser}
            >
              {val[index]}
            </Dropdown.Item>
          );
        } catch (err) {
          return console.log(err);
        }
      })}
    
    </DropdownButton>
    </div>
                <br></br>
                <br></br><br></br>
                </div>
                <div id="addsubjec">
                    <button id="addsubject" onClick={AddSubject}>AddSubject</button>

                </div><br></br><br></br>
                <input id="sub" type="submit"></input>
                <h3>Already have an account?</h3>
                <Btn></Btn>    
            </form>
        </div>
    )
    
}
export default SignupF;