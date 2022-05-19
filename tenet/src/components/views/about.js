import React from 'react';
import '../css/about.css';
import "../css/informationpage.css";
import Dj from '../images/dj.jpg';
import Alv from '../images/Alva.jpg';
import Al from '../images/Ali.jpg';
import Ja from '../images/jabez.jpg';
import Nariman from '../images/nariman.png';
import niloofar from '../images/Niloofar.jpg';
import Nils from '../images/nils.png'; 

import Info from '../images/information icon.jpg';
import AlvaC from '../images/AlvaCopy.jpg';
import AliC from '../images/AliCopy.jpg';
import NarimanC from '../images/NarimnCopy.jpg';
import NiloofarC from '../images/NiloofarCopy.jpg';
import NilsC from '../images/nilsCopy.png';
import JabezC from '../images/jabezCopy.jpg';

function about() {
	return (

		<section className="make">

			    <div class="row">
					<div class="column">
						<div class="card">
						    <img src={AlvaC} alt=
							     "" height="100%" width="100%"/>
							<div class="container">
								<h2>Alva Ols</h2>
								<p class="title">Project manager</p>
								<p>Alva ols is responsible for the project management and documentation</p>
								<p>alvaols@kth.se</p>
								<p><button class="button">Contact</button></p>
							</div>
						</div>
					</div>

					<div class="column">
						<div class="card">
							<img src={AliC} alt=
							      "" height="100%" width="100%"/>
							<div class="container">
								<h2>Ali Suleimani</h2>
								<p class="title">Sustainability manager</p>
								<p> Ali Suleimani is responsible for sustainability and environment of the working area</p>
								<p>alisu@kth.se</p>
								<p><button class="button">Contact</button></p>
							</div>
						</div>
					</div>

					<div class="column">
						<div class="card">
							<img src={NilsC} alt=
							      "" height="90%" width="100%"/>
							<div class="container">
								<h2>Nils Falck</h2>
								<p class="title">Test manager</p>
								<p> Nils Falck is responsible for the project sustainability and environmentally</p>
								<p>nils@kth.se</p>
								<p><button class="button">Contact</button></p>
							</div>
						</div>
					</div>

					<div class="column">
						<div class="card">
						    <img src={NiloofarC} alt= 
							    "" height="100%" width="100%"/>
							<div class="container">
								<h2>Niloofar Rahmani</h2>
								<p class="title">customer manager</p>
								<p>Niloofar is responsible for customer and requirment product</p>
								<p>nilo@kth.se</p>
								<p><button class="button">Contact</button></p>
							</div>
						</div>
					</div>

					<div class="column">
						<div class="card">
							<img src={NarimanC} alt=
							     "" height="110%" width="100%"/>
							<div class="container">
								<h2>Nariman Haidar</h2>
								<p class="title">Architecture manager</p>
								<p> Narima Haidar is responsible for architecture and development</p>
								<p>jabez@kth.se</p>
								<p><button class="button">Contact</button></p>
							</div>
						</div>
					</div>

					<div class="column">
						<div class="card">
							<img src={JabezC} alt=
							    "" height="100%" width="100%"/>
							<div class="container">
								<h2>Jabez Kungu</h2>
								<p class="title">Develop manager</p>
								<p> jabez kungu is responsible for development of the project and also helping other</p>
								<p>jabez@kth.se</p>
								<p><button class="button">Contact</button></p>
							</div>
						</div>
					</div>
				</div>
					<div className="text">
					<div class="show-hide-text wrapper">
						<a  id="show-more" class=
						    "show-less" href="#show-less">Show less</a>
						<a  id="show-less" class=
						    "show-more" href="#show-more">Show more</a>
						<h2>Further information<img src={Info} alt= 
						"" height="50px%" width="50px%"/></h2>
						<p>This project group consist of sex member and every member has different skills. Alva Ols and Nils Falck study a bacheloor degree in Economic and Camputer Engineering at KTH.
							Jabez Kungu, Nillofar Rahmani and Nariman haidar study a bachelor degree in Computer engineering at Kth. 
							Ali Suleimani also study a bechelor degree in Elektronik and Camputer Engineering at KTH.
							This project was done in the course project and Project method. 
					    </p>
					</div>
				</div>

		</section>
    );
}

export default about;
