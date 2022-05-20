import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';


function Footer() {
	return (
        <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='child'>
                    <h6>Description</h6>
                    <p className='text-justify'>
                    The course II1302 aims to develop the student's ability to carry out a design project in IT. The course and 
                    project is proceeding in collaboration with other students in a smaller project team. The 
                    goal is to give students a foundation for effective participation and management of IT projects. The course is conducted by a technical design assignment as a driver.
                    </p>
                </div>
                <div className='child'>
                    <h6>Tools</h6>
                    <ul className='footer-links'>
                        <li>Reactjs</li>
                        <li>JavaScript</li>
                        <li>NodeJs</li>
                    </ul>
                </div>
                <div className='child'>
                    <h6>Quick links</h6>
                    <ul className='footer-links'>
                        <li><Link to = "/home"><span>Home</span></Link></li>
                        <li><Link to = "/data"><span>Data</span></Link></li>
                        <li><Link to = "/component"><span>Components</span></Link></li>
                        <li><Link to = "/about"><span>About Us</span></Link></li>
                        <li><Link to = "/info"><span>Information</span></Link></li>
                    </ul>
                </div>
            </div>
            <hr/>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='child'>
                    <p className='copyright-text'> Copyright &copy; 2022 All rights by Group 11</p>
                </div>
            </div>
        </div>

    </footer>
	);
}

export default Footer;