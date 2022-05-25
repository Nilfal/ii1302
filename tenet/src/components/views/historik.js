
import React from "react";
import FirebaseApp from "../config/firebase";
import "../css/data.css";
import { getDatabase, ref, onValue, DataSnapshot ,set} from "firebase/database";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const database = getDatabase(FirebaseApp);

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

        console.log(Object.values(ddataset))

        const len = ddataset.length;
        setLableset(Array.from(Array(len).keys()));
      });
    }, 3000);
    return () => clearInterval(intervall);
  }, [ddataset, lableset]);




  
  //console.log(chart());
  return (
    <div className="data-info">
      <h4>Decibel Sound Chart</h4>


      
    </div>
  );

}


export default Historik;
