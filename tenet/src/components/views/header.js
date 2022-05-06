import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { Link } from 'react-router-dom';

import '../css/header.css';

function Header() {
	return (
		<div className="headers">
			<div className="blah">
				<button className="homes">
					<Link to="/Home">
						<FaHome size="40px" color="#b46e35" />
					</Link>
				</button>

				<div
					style={{
						flexGrow: 1,
					}}
				></div>

				<div className="bleh">
					<button className="data">
						<Link to="/data">
							<ImStatsDots size="30px" color="#b46e35" />
						</Link>
					</button>
					<button className="contact">
						<Link to="/Contact">
							<FaPhone size="30px" color="#b46e35" />
						</Link>
					</button>
					<button className="abouts">
						<Link to="/about">
							<MdGroups size="30px" color="#b46e35" />
						</Link>
					</button>
					<button className="infos">
						<Link to="/info">
							<FaInfo size="30px" color="#b46e35" />
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
export default Header;
