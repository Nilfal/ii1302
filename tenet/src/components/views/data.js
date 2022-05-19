import React from 'react';
import '../css/informationpage.css';
import Blossom from '../images/bubbles.jpg'

function Data() {
	return (
		<div>
		<div className="person">
  <div className="person-badge">
    <img className="normal" src={Blossom} alt='some'/>
  </div>
  <h3>Sam Müller</h3>
  <strong>Business Development Director</strong>
  <div>
    Sam has over five years’ experience providing strategic direction on marketing and communications projects, and is responsible for ensuring clients' projects are delivered on time and within budget. Sam has an MBA from McBro University. 
  </div>
</div>
</div>



);
}

export default Data;
