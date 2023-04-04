import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import app from "../../../auth/teacher";
import { getFirestore } from "firebase/firestore";
import { setDoc, doc, getDoc,updateDoc} from "firebase/firestore";



import "./upload.css";

const Upload = () => {
  const [showBox, setShowBox] = useState(false);
  const [content, setContent] = useState("");
  const [data, setData] = useState({});
  const db = getFirestore(app);
  const email = localStorage.getItem("user");
  const d = JSON.parse(sessionStorage.getItem("obj"));

  const createDocRef = () => {
    return doc(
      db,
      "cmrit",
      d.year,
      d.semister,
      d.department,
      d.section,
      "subjects",
      d.code,
      d.mid
    );
  };

  const fetchData = async () => {
    const docRef = createDocRef();
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      setData(docSnap.data());
    }
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleLogout = () => {
    console.log("logging out");
  };

  const save = async () => {
    console.log("save");
    try {
      const docRef = createDocRef();
      const docSnap = await getDoc(docRef);
  
      let index = "";
      if (docSnap.exists()) {
        index= `${new Date().getTime()}-${Math.floor(Math.random() * 1000000)}`;

      } else {
        index = "1";
      }
     
      await setDoc(docRef, {
        ...data,
        [index]: content,
      });
  
      setContent("");
      setShowBox(false); // close the content box after saving
      fetchData(); // fetch the updated data
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const Delete = async (index) => {
    try {
      const docRef = createDocRef();
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        const currentData = docSnap.data();
        const newData = { ...currentData };
        delete newData[index];
  
        await setDoc(docRef, newData);
        fetchData();
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const Edit = async (index) => {
    console.log(`Editing question ${index}`);
    try {
      const docRef = createDocRef();
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
       // Delete(index);
        const currentData = docSnap.data();
        const newData = { ...currentData };
        const content = newData[index];
  
        setContent(content);
        setShowBox(true);
  
        // remove the question from the newData object
        delete newData[index];
        setData(newData);
        await updateDoc(docRef, newData);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  
  
 return (
    <div>
      <nav id="n">
        <ul>
          <li>
            <a href="/Homes">
              <h2>Home</h2>
            </a>
          </li>
          <li className="dropdown">
            <div id="mail">
              <Dropdown id="prof">
                <Dropdown.Toggle variant="light" id="profile">
                  <span>{email.split("@")[0]}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>Edit Profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
        </ul>
      </nav>
      <button id="add" onClick={() => setShowBox(true)}>Add Question</button>
      {showBox && ( 
        <div className="content-box">
          <textarea
            id="input1"
            value={content}
            onChange={handleContentChange}
            placeholder="Enter your question here..."
            style={{width: "90%", height: "auto", minHeight: "50px"}}
          ></textarea>
          <br></br>
          <button id="save" onClick={save}>Save</button>
        </div>
      )}
      {data && (
        
        <div className="data-box">
        {
        Object.keys(data).map((key,i)=>{
            
            return(<>
            <br></br>
            <div id="pdata" style={{border:"solid 1px black",paddingLeft:"30px",width:"95%",marginLeft:"30px",backgroundColor:"pink"}}>
            <p style={{color:"black",fontSize:"26px"}}><span style={{fontSize:"30px"}}>{i+1}</span>{". "}{data[key]} </p>
            <button onClick={()=>Edit(key)} id="edit">Edit</button>
          <button onClick={()=>Delete(key)} id="delete">Delete</button>
          </div>
            </>
            )
        })
        }
        </div>
      )}
    </div>
  );
};
export default Upload;
