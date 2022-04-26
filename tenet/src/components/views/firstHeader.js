import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/style.css';

export default class header extends Component {
    render() {
        return (
            
            <header className="header">
                <h1 className="logo">Logo</h1>
                <ul className="nav">
                    <li><Link to = "/home" ><span>startpage</span></Link></li>
                    <li><Link to = "/about" ><span>Data</span></Link></li>
                    <li><Link to = "/info"><span>About us</span></Link></li>
                </ul>
            </header>
        )

}
}