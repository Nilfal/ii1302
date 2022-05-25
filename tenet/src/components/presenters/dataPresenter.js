import Data from '../views/data';
import React from 'react';
import Historik from '../views/historik';

function DataPresenter(props) {
	return (
		<div>
			
			<Data />
			<Historik/>
		</div>
	);
}

export default DataPresenter;
