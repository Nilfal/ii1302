import Data from '../views/data';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function DataPresenter(props) {
	return (
		<div>
			<Header />
			<Data />
			<Footer />
		</div>
	);
}

export default DataPresenter;
