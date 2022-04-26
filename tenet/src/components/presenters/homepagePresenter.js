import Homepage from '../views/homepage';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function HomepagePresenter(props) {
	return (
		<div>
			<Header />
			<Homepage />
			<Footer />
		</div>
	);
}

export default HomepagePresenter;
