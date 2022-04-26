import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';

import '../css/header.css';

function Header() {
	return (
		<div className="header">
			<div className="blah">
				<button className="homes">
					<FaHome size="40px" />
				</button>

				<div
					style={{
						flexGrow: 1,
					}}
				></div>

				<div className="bleh">
					<button className="contact">
						<FaPhone size="30px" />
					</button>
					<button className="abouts">
						<MdGroups size="30px" />
					</button>
					<button className="infos">
						<FaInfo size="30px" />
					</button>
				</div>
			</div>
		</div>
	);
}
export default Header;
