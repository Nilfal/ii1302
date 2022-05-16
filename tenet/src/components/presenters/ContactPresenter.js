import Contact from '../views/contact';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function ContactPresenter(props) {
	return (
		<div>
			<Header />
			<Contact />
			<Footer />
		</div>
	);
}

export default ContactPresenter;
