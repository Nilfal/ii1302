import React from 'react';
import {useState} from 'react';
import db from './components/config/firebase';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [name , setName] = useState();
  const [age , setAge] = useState();
      
  // Push Function
  const Push = () => {
    db.ref("user").set({
      name : name,
      age : age,
    }).catch(alert);
  }
  
  return (
    <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={Push}>PUSH</button>
      </center>
    </div>
  );
}
  
export default App;