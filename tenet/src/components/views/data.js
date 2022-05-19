import React from 'react';
import FirebaseApp from '../config/firebase';
import '../css/informationpage.css';
import {
	getDatabase,
	ref,
	onValue,
	DataSnapshot,
	push,
} from 'firebase/database';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const database = getDatabase(FirebaseApp);

function Data() {
	//ddataset == y
	//LABLE == X
	const [ddataset, setDataset] = React.useState([]);
	const [lableset, setLableset] = React.useState([]);

	React.useEffect(() => {
		const intervall = setInterval(() => {
			const soundValueRef = ref(database, 'path/to/node');

			onValue(soundValueRef, (snapshot) => {
				const datas = snapshot.val();
				// console.log(data);
				setDataset(datas);
				const len = ddataset.length;
				setLableset(Array.from(Array(len).keys()));
			});
		}, 5000);
		return () => clearInterval(intervall);
	}, [ddataset, lableset]);

	const state = {
		labels: lableset,
		datasets: [
			{
				label: 'Sound level',
				fill: false,
				lineTension: 0.1,
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgb(75, 192, 192)',
				borderWidth: 4,
				data: ddataset,
			},
		],
	};

	//console.log(chart());
	return (
		<div className="info">
			<p> Group 11: working progress.. </p>

			<div id="chart-wrapper">
				<Line data={state} height={600} width={900}></Line>
			</div>
		</div>
	);
}

export default Data;
