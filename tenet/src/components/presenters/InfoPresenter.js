import Info from '../views/info';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function InfoPresenter(props) {
	return (
		<div>
			<Header />
			<Info />
			<Footer />
		</div>
	);
}

export default InfoPresenter;
