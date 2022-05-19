import Member from '../views/members';
import Header from '../views/header';
import Footer from '../views/footer';
import React from 'react';

function MemberPresenter(props) {
	return (
		<div>
			<Header />
			<Member />
			<Footer />
		</div>
	);
}

export default MemberPresenter;
