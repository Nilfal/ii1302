import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomepagePresenter from './components/presenters/homepagePresenter';
import InfoPresenter from './components/presenters/InfoPresenter';
import DataPresenter from './components/presenters/dataPresenter';
import ContactPresenter from './components/presenters/ContactPresenter';
import MemberPresenter from './components/presenters/MemberPresenter';

function App(props) {

	return (
		<BrowserRouter>
			<div className="flexParent">
				<Routes>
					<Route
						path="/home"
						element={<HomepagePresenter model={props.model} />}
					/>
					<Route path="/" element={<HomepagePresenter model={props.model} />} />
					<Route path="/info" element={<InfoPresenter model={props.model} />} />
					<Route path="/data" element={<DataPresenter model={props.model} />} />
					<Route
						path="/contact"
						element={<ContactPresenter model={props.model} />}
					/>
					<Route
						path="/member"
						element={<MemberPresenter model={props.model} />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
