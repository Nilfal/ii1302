import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomepagePresenter from './components/presenters/homepagePresenter';
import InfoPresenter from './components/presenters/InfoPresenter';
import DataPresenter from './components/presenters/dataPresenter';
import AboutPresenter from './components/presenters/aboutPresenter';
import ComponentPresenter from './components/presenters/ComponentPresenter';
import Header from './components/views/header';
import Footer from './components/views/footer';

function App(props) {
	return (
		<BrowserRouter>
			<div className="flexParent">
				<Header />
				<Routes>
					<Route path="/home" element={<HomepagePresenter model={props.model} />}/>
					<Route path="/" element={<HomepagePresenter model={props.model} />} />
					<Route path="/info" element={<InfoPresenter model={props.model} />} />
					<Route path="/data" element={<DataPresenter model={props.model} />} />
					<Route path="/Component" element={<ComponentPresenter model={props.model} />} />
					<Route path="/data" element={<DataPresenter model={props.model} />} />
					<Route path="/about" element={<AboutPresenter model={props.model} />}/>
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
