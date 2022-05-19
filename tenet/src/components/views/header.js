import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';

import '../css/header.css';
import ConfettiButton from '../ConfettiButton';

function Header() {
	return (
		<div className="headers">
			<div className="blah">
				<Link to="/Home">
					<ConfettiButton className="homes">
						<FaHome size="40px" color="#b46e35" />
					</ConfettiButton>
				</Link>

				<div
					style={{
						flexGrow: 1,
					}}
				></div>

				<div className="bleh">
					<Link to="/data">
						<ConfettiButton className="data">
							<ImStatsDots size="30px" color="#b46e35" />
						</ConfettiButton>
					</Link>
					<Link to="/Component">
						<ConfettiButton className="component">
							<FaTools size="30px" color="#b46e35" />
						</ConfettiButton>
					</Link>
					<Link to="/about">
						<ConfettiButton className="abouts">
							<MdGroups size="30px" color="#b46e35" />
						</ConfettiButton>
					</Link>
					<Link to="/info">
						<ConfettiButton className="infos">
							<FaInfo size="30px" color="#b46e35" />
						</ConfettiButton>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default Header;
