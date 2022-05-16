import Chatbot from '../views/chatbot';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function ChatbotPresenter(props) {
	return (
		<div>
			<Header />
			<Chatbot />
			<Footer />
		</div>
	);
}

export default ChatbotPresenter;
