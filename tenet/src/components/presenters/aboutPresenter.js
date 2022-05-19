import About from '../views/about';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function AboutPresenter(props) {
	return (
		<div>
			<Header />
			<About/>
			<Footer />
		</div>
	);
}

export default AboutPresenter;
