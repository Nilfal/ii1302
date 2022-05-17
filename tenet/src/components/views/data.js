import React from "react";
import FirebaseApp from "../config/firebase";
import "../css/informationpage.css";
import { getDatabase, ref, onValue, DataSnapshot } from "firebase/database";
//import app from "../config/firebase.js"
//import 'firebase/database'

const database = getDatabase(FirebaseApp);



function Data() {

  const [dataset, setDataset] = React.useState([]);
  const [lableset, setLableset] = React.useState([]);
  

  React.useEffect(() => { 
	  const intervall = setInterval( ()=> {
		  
		const soundValueRef = ref(database, "path/to/node");
		onValue(soundValueRef, (snapshot) => {
		  const data = snapshot.val();
		 // console.log(data);
		  setDataset(data);
		
		  const len = dataset.length;
		  setLableset(Array.from(Array(len).keys()));

		});
	  },5000);
	  return()=> clearInterval(intervall);
  
  }, [dataset,lableset]);

console.log(lableset);
  return (
    <div className="info">
      <p> Group 11: working progress.. </p>

	{dataset.map((index , value) => (
		<span key = {value}> {value} : {index}</span>
		
		
	))}

	
	
    </div>
  );
}

export default Data;
