
import React from "react";
import FirebaseApp from "../config/firebase";
import "../css/informationpage.css";
import { getDatabase, ref, onValue, DataSnapshot, set } from "firebase/database";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const x = new Date();

const database = getDatabase(FirebaseApp);


 function isLight(){
  const test = ref(database, "light");


 }


function light(){
  set(ref(database,'light/'),{
    mode:true
  })
console.log(isLight())

}

function writeUserData(x , name){
  set(ref(database,'history/'+x),{
    data:name
  })
}

function Data() {

  //ddataset == y
  //LABLE == X
  const [ddataset, setDataset] = React.useState([]);
  const [lableset, setLableset] = React.useState([]);

  let tst = new Array(0);
  let i = 0;

  React.useEffect(() => {
    const intervall = setInterval(() => {
      const soundValueRef = ref(database, "path/to/node");
      onValue(soundValueRef, (snapshot) => {
        const datas = snapshot.val();
        // console.log(data);
        setDataset(datas);

        const len = ddataset.length;
        setLableset(Array.from(Array(len).keys()));
      });
    }, 3000);
    return () => clearInterval(intervall);
  }, [ddataset, lableset]);

  while (tst.length < ddataset.length) {
    tst[i++] = ddataset[i];
  }

  const test = {
    options: {
      responsive: true,
    },
  };

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
        data: tst,
      },
    ],
  };

  //console.log(chart());
  return (
    <div className="data-info">
      <h4>Decibel Sound Chart</h4>

      <div> Curret sound : {ddataset[ddataset.length - 1]}</div>

      <div id="chart-wrapper">
        <Line
          id="test"
          options={test}
          data={state}
          height={600}
          width={900}
        ></Line>

      
      </div>
      <button onClick={()=> {writeUserData(x,{ddataset})}}>Save?</button>
      <button onClick ={()=> {light()}}>IT IS TOO LOUD</button>
    </div>
  );

}

export default Data;
