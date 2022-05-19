import React from 'react';
import '../css/component.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import Info from '../images/information icon.jpg';
import AlvaC from '../images/Alva.jpg';
import AliC from '../images/Ali.jpg';
import NarimanC from '../images/nariman.png';
import NiloofarC from '../images/Niloofar.jpg';
import NilsC from '../images/nils.png';
import JabezC from '../images/jabez.jpg';

function about() {
	return (

	<div className='component-body'>
    <h1>Meet Our Team</h1>
    <section id="component">
      <div className="component-card">
        <img src={AlvaC} className="component-img"alt="" />
        <div className="component-data">
            <h2>Alva Ols</h2>
            <i>Project Manager</i>
            <p>Manages and supervises the team to help achieve project goals 
				and ensures the project's sucess. Oversees all aspects of the project, sets deadlines, assign responsibilities, 
				monitors and summarize progress of project</p>
            <a href="https://www.facebook.com/alva.ols"><FaFacebook/></a>
            <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
            <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
      <div className="component-card">
        <img src={NiloofarC} className="component-img" alt="" />
        <div className="component-data">
          <h2>Niloofar Rahmani</h2>
          <i>Customer and Requirements Manager</i>
          <p>The customer and requirements man will constantly identify opporturnities to grow the 
			customer base including  deriving requirements and providing them to the rest of the team

		  </p>
          <a href="https://www.facebook.com/niloo.rahmani"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
      <div className="component-card">
        <img src={NarimanC} alt="" />
        <div className="component-data">
          <h2>Nariman Haidar</h2>
          <i>Architect</i>
          <p>The architect is responsible for defining and maintaining the structure of the solution, and ensuring that it will meet the requirements. 
			An agile architect must also help the team to work together in an agile fashion, to jointly own the solution, 
			and to interface well with other parts of the organisation</p>
          <a href="https://www.facebook.com/narimann.haidar"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
    
    </section>
    
      <div className="component-card">
        <img src={AliC} alt="" />
        <div className="component-data">
          <h2>Ali Suleimani</h2>
          <i>Sustainability Manager</i>
          <p>The sustainability manager oversees the implementation of sustainability strategies during a construction project. This usually relates to the 
			environmental impacts of the work being carried out, to ensure that the project adheres to the most economically 
			and environmentally friendly methods possible.</p>
          <a href="https://www.facebook.com/profile.php?id=100012727842001"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
      </div>
      <div className="component-card">
        <img src={NilsC} alt="" />
        <div className="component-data">
          <h2>Nils Falck</h2>
          <i>Test Manager</i>
          <p>Test manager provides functional and application expertise for the group 
			as it relates to software test and quality assurance tools.</p>
          <a href="https://www.facebook.com/nfalck1"><FaFacebook/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
          <a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
          </div>
      </div>
      <div className="component-card">
        <img src={JabezC} alt="" />
        <div className="component-data">
          <h2>Jabez Otieno</h2>
          <i>Development Manager</i>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit 
			Etiam sedesmi. Consectetur elit placerat mollis donec dolor.</p>
          <a href="https://www.facebook.com/jabez.kunfu/"><FaFacebook/></a>
        	<a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaInstagram/></a>
			<a href="https://gits-15.sys.kth.se/jkotieno/II1302-Group11"><FaLinkedin/></a>
        </div>
    </div>
</div>
    );
}

export default about;
