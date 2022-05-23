
import React from "react";
import FirebaseApp from "../config/firebase";
import "../css/data.css";
import { getDatabase, ref, onValue, DataSnapshot, set } from "firebase/database";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";


const item = {
	item1: 1,
	item2:2
}

const database = getDatabase(FirebaseApp);
const x  = new Date();


function writeUserData(userId, name) {
	//console.log(userId);
	set(ref(database, 'history/' + userId), {data: name});
}

function Historik() {

  //ddataset == y
  //LABLE == X
  const [ddataset, setDataset] = React.useState([]);
  const [lableset, setLableset] = React.useState([]);

  let i = 0;

  React.useEffect(() => {
    const intervall = setInterval(() => {
      const soundValueRef = ref(database, "history");
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
      },
    ],
  };

  //console.log(chart());
  return (
    <div className="data-information-history">
      <h4>Decibel Sound Chart</h4>

      

      <div id="chart-wrapper">
        <Line
          id="test"
          options={test}
          data={state}
          height={600}
          width={900}
        ></Line>
			
			{/* Byt ut item till faktisk data */}
			<button onClick={()=> {writeUserData(x,{item})}}>Save?</button>
      </div>
    </div>

  );

	

}

export default Historik;
