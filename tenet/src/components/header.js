import react from 'react';
import './header.css';

function Header() {
	return (
		<div className="header">
			<div className="blah">
				<div className="contact">
					<h1>Contact us</h1>
				</div>

				<div className="about">
					<h1>About us</h1>
				</div>

				<div className="info">
					<h1>More Info</h1>
				</div>
			</div>
		</div>
	);
}
export default Header;
