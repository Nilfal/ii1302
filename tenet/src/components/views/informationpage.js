import React, { useState } from 'react';
import '../css/informationpage.css';


function Info() 
{
	return (
		<div className='information'>
			<a href={"https://www.kth.se/student/kurser/kurs/II1302"}><div>
				<p>II1302 Projekt och projektmetoder, kursens krav: </p>
			<ul>
				<li>
				Effektmål 
				<ul><li>
				Att "förbättra" eller "förändra" något med hjälp av IT-teknik.
					</li></ul>
				</li>
				<li>
				Resultatmål 
				<ul><li>
				Skapa en IT-produkt eller tjänst som åstadkommer denna förbättring.
				</li><li>
				Leverans är fungerande prototyp med tillhörande teknisk dokumentation på GitHub.
				</li>
				</ul>
				<li>
				Projektmål
				<ul>
					<li>
					Att som student i en projektgrupp med andra studenter lära sig om projektmetoder för IT-projekt och klara kursen II1302 med bra betyg.
					</li>
					<li>
					Skriva en slutrapport som försöker svara på frågan "Vad är en bra projektmetod för små IT-projekt"
						</li></ul>	
				</li>
				
				</li>
			</ul>
			</div></a>
			<a>
			<div>
				<p>Project background:</p>
				<ul>
					
					The sound level in classrooms do not often lead to longterm damage to the auditory canals 
					but will have bad consequences to the learning ability and concentration. In project 
					group 11, we are all students and therefore well aware of this phenomenom. We have created this product 
					as a way of collecting data as well as ensuring the quality of our working enviroment in lecture halls
					for teachers and students on campus Kista.  
					
				</ul>

			</div>
			</a>
			<a>
			<div>
				<p>More info about the research behind the project here:</p>
				<ul>
					<li>
						<a className="link" href= "https://www.av.se/halsa-och-sakerhet/buller/fragor-och-svar-om-buller2/#5">The swedish work enviroment authority:</a>
					</li>
					<li>
						<a className="link" href= "https://www.elevhalsoportalen.se/skola/halsoomraden/buller/">Student health report:</a>
					</li>
				</ul>
			</div>
			</a>
			
		</div>
	);
}

function MoreInfo ()
{
	return (
		<div className='moreInfo'>
			<div>
			<p>Fun facts: </p>
			<ul>
				<li>
				Noise levels: 
				<ul><li>
				The sound level at the pain threshold is about 100,000 billion times louder than the faintest sound we can perceive.
					</li>
				<li>
					If you were to create a sound that exceeded 1100 dB, you would create a black hole that could destroy our whole galaxy. We do not recommend it. 
				</li>
					</ul>
				</li>
				<li>
				Ears: 
				<ul><li>
				We use a logarithmic scale, decibels (dB), which mimics the sensitivity of the ear at different sound levels.
				</li>
				</ul>
				<li>
				Cars:
				<ul>
					<li>
					The sound from a car must not exceed 74 dB (A). Permissible noise level from bus and truck is 76-80 dB (A) depending on the total weight of the vehicle.
					</li>
					</ul>	
				</li>
				
				</li>
			</ul>
			</div>
			<div>
				<p>Items noise level:</p>
				<ul>
				<li>
				Refrigerator: 50 dB
					</li>
					<li>
				Rocket launching: 190 dB
					</li>
					<li>
				Car horn: 110 dB
					</li>
					<li>
				Normal conversation: 60 dB
					</li>
					<li>
				Thunder: 120 dB
					</li>
					<li>
				Breathing: 10dB
					</li>
				
				</ul>
			<img src="https://www.remaudiology.com/wp-content/uploads/2017/09/Fotolia_172344393_Subscription_Monthly_M-1030x1030.jpg?fbclid=IwAR26MSApD2Y4BVNRPE1v2KZroUX8dKwh3d7ZINKOQxOtSQ2SGJYeG0AOkS4"></img>
			</div>
			<div>
				<p>Warning sounds:</p>
				<ul>
					<li>
					VMA: 7 seconds and a 14 second pause 
					</li>
					<li>
				    Flight alarm: 2 seconds in a loop
					</li>
					<li>
				    Emergency alarm: 30 seconds with a pause of 15 seconds
					</li>
					<li>
				    Danger is over: 30 seconds
					</li>
				</ul>
			</div>
			
		</div>

	);
}

function Information () {
	const [more, setMore] = useState(false)
	return (
		<div>
			<button className="infoButton" onClick={() => setMore((prev) => !prev)}>More Info</button>
			{
				more ? <MoreInfo /> : <Info />
			}
		</div>
	)
}

export default Information;