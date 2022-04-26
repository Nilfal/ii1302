import React from 'react';
import {Link} from 'react-scroll';
import '../css/footer.css';

import { FaGithub } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';


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
                        <li><Link to = "home" spy={true} smooth={true}><span></span>Home</Link></li>
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
                <div className='child'>
                    <ul className='frame'>
                        <li className='btn'><FaGithub/></li>
                        <li className='btn'><FaFacebookF/></li>
                        <li className='btn'><FaLinkedinIn/></li>
                    </ul>
                </div>
            </div>
        </div>

    </footer>
	);
}

export default Footer;