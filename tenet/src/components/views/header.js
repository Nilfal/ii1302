import React from 'react';
import { FaBlackberry, FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { Link } from 'react-router-dom';

import '../css/header.css';
import ConfettiButton from '../ConfettiButton';

function Header() {
	return (
		<div className="headers">
			<div className="blah">
				<ConfettiButton className="homes">
					<Link to="/Home">
						<FaHome size="40px" color="#b46e35" />
					</Link>
				</ConfettiButton>

				<div
					style={{
						flexGrow: 1,
					}}
				></div>

				<div className="bleh">
					<ConfettiButton className="data">
						<Link to="/data">
							<ImStatsDots size="30px" color="#b46e35" />
						</Link>
					</ConfettiButton>
					<ConfettiButton className="contact">
						<Link to="/Contact">
							<FaPhone size="30px" color="#b46e35" />
						</Link>
					</ConfettiButton>
					<ConfettiButton className="abouts">
						<Link to="/member">
							<MdGroups size="30px" color="#b46e35" />
						</Link>
					</ConfettiButton>
					<ConfettiButton className="infos">
						<Link to="/info">
							<FaInfo size="30px" color="#b46e35" />
						</Link>
					</ConfettiButton>
				</div>
			</div>
		</div>
	);
}
export default Header;
