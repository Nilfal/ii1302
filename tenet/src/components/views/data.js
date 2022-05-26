
import React from "react";
import FirebaseApp from "../config/firebase";
import "../css/data.css";
import { getDatabase, ref, onValue, DataSnapshot ,set} from "firebase/database";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";


const database = getDatabase(FirebaseApp);
const x = new Date();

function Data() {

  //ddataset == y
  //LABLE == X
  const [ddataset, setDataset] = React.useState([]);
  const [lableset, setLableset] = React.useState([]);



  let i = 0;

  

  
  function writeUserData(x , name){
    set(ref(database,'history/'+x),{
      data:name
    })
 }
    
       //console.log(data);
      //setDataset(datas);

      //setReadData(datas);
    
  

  React.useEffect(() => {
    const intervall = setInterval(() => {
      const soundValueRef = ref(database, "path/to/node");
      onValue(soundValueRef, (snapshot) => {
        const datas = snapshot.val();
        // console.log(data);
        setDataset(datas);


        console.log(ddataset)

        const len = ddataset;
        setLableset(Array.from(Array(len).keys()));
      });
    }, 3000);
    return () => clearInterval(intervall);
  }, [ddataset, lableset]);

  

  

  const state = {
    labels: lableset,

    datasets: [
      {
        label: "Sound level",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgb(79, 192, 192)",
        borderWidth: 4,
        
      },
    ],
  };

  

  

  return (
    <div className="data-info">
      <h4>Decibel Sound Chart</h4>

      <div> Current sound : {ddataset}</div>

      <div id="chart-wrapper">
        <Line
          id="test"
          
          data={state}
          height={600}
          width={900}
        ></Line>

      
      </div>
      <button onClick={()=> {writeUserData(x,{ddataset})}}>Save?</button>

      
    
    </div>



  );
  }


export default Data;
