import React, { Component } from 'react'
import '../css/style.css'
import {Link} from 'react-scroll'
import DBimage from '../images/Decibel_Scale_1.jpg'


export default class middleSection extends Component {
    render() {
        return (
            <>
	<div className='outer'>	
        <div id="home" className = 'home'>
			<div className='logo'>

			</div>
			<div className='h1'>
          		<h1> How loud is too loud?
		  		</h1>
				  <section id='section07' className='demo'>
			    	<Link to = "about" spy={true} smooth={true}><span></span><span></span><span></span></Link>
				</section>
		  	</div>
        </div>
        
        <div id="about" className='about'>
    		
			<div className='text'>
				<p>
				We have all been there, a loud and busy classroom with chatters everywhere, laughter 
				and sometimes even shouting. Our first course of action might be to call out our classmates
				and tell them to stop the noise but sometimes it is not that easy. Study shows that a noisy 
				class room can be detrimental to your attention span.
				<h2>How loud is too loud?</h2>
				Noise in the classroom is inevitable, and it doesn't matter what school or grade your
				are in. In math, science or any other class, you're guaranteed to suffer some kind of noise 
				of varying intensity. To some people this might not be bothering at all, but to others, this 
				noise might be just enough to cause some level of interference.
				</p>
			</div>
        </div>
	</div>
        </>
        )
    }
}
