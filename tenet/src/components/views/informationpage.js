import React from 'react';
import '../css/informationpage.css';


function Information() {
	return (
		<div className='info'>
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
						 <a class="link" href= "https://www.av.se/halsa-och-sakerhet/buller/fragor-och-svar-om-buller2/#5">The swedish work enviroment authority:</a>
					</li>
					<li>
						 <a class="link" href= "https://www.elevhalsoportalen.se/skola/halsoomraden/buller/">Student health report:</a>
					</li>
				</ul>
			</div>
			</a>
			
		</div>
	);
}

export default Information;