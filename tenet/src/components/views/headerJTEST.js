import '../css/style.css';
import React from 'react';
import {Link} from "react-router-dom";

function Headertest() {
	return (
        <header class="header">
        <h1 class="logo">Logo</h1>
            <ul class="nav">
                <li><Link to = "/home"><span>startpage</span></Link></li>
                <li><Link to = "/about"><span>about</span></Link></li>
                <li><Link to = "/info"><span>info</span></Link></li>
            </ul>
        </header>

	);
}
export default Headertest;
