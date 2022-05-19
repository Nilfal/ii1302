import Component from '../views/component';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function ComponentPresenter(props) {
	return (
		<div>
			<Header />
			<Component />
			<Footer />
		</div>
	);
}

export default ComponentPresenter;
