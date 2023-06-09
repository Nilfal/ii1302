
import React from "react";
import FirebaseApp from "../config/firebase";
import "../css/data.css";
import { getDatabase, ref, onValue, DataSnapshot ,set, get, child} from "firebase/database";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const database = getDatabase(FirebaseApp);




function graph(dat){
  
//console.log(dat.length)
 var lab = [];
 lab =  Array.from(Array(dat.length).keys())
 
  var state = {
    labels: lab,
    datasets: [
      {
        label: "Sound level",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgb(79, 192, 192)",
        borderWidth: 4,
        data: dat,
      },
    ],
  };
  return  state
  
}



function convertDataToArray(data) {
  const entries = Object.entries(data);

  return entries.map(([timestamp, {data}]) => ({timestamp, data: data.ddataset}))
}

function Historik() {

  //ddataset == y
  //LABLE == X
  const [ddataset, setDataset] = React.useState([]);
  // const [lableset, setLableset] = React.useState([]);

  React.useEffect(() => {
    const intervall = setInterval(() => {
      const soundValueRef = ref(database, "history");
      onValue(soundValueRef, (snapshot) => {
        setDataset(convertDataToArray(snapshot.val()))

        
      });
    }, 3000);

    return () => clearInterval(intervall);
  }, []);
  
  


  // React.useEffect(() => {
  //   const dbRef = ref(database);
  //   get(child(dbRef, 'historik')).then((snapshot) => {
  //     console.log("exist", snapshot.val())
  //     if(snapshot.exists())
  //       setDataset(convertDataToArray(snapshot.val()))
  //   })
  // }, [])


// const numbers = ddataset;
// console.log(JSON.stringify(ddataset))
// listItems = ddataset ? ddataset.map((d) =>
//   <li>{d}</li>
// ) : [];

  //console.log(chart());
  return (
    <div className="data-info">
      <h4>Decibel Sound Chart</h4>

      {/* <button onClick={()=> {listItems({ddataset})}}>History</button> */}

      <ul>

        {ddataset.map(({timestamp, data}) => (<li>{timestamp} - {data.join(" ")}
        
      
        <Line data={graph(data)}> </Line>
      
        </li>))}
      </ul>
        
      

    </div>
   
  );

}


export default Historik;
