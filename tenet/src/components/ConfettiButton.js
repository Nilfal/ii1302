import React, { useState } from 'react';
import './css/confetti.css';

const ConfettiButton = (props) => {
	const [animate, setAnimate] = useState(false);

	const handleClick = (e) => {
		//animation reset
		setAnimate(false);
		setAnimate(true);
		setTimeout(function () {
			setAnimate(false);
		}, 700);
		if (props.onClick) props.onClick();
	};

	return (
		<button
			className={`confetti-button ${animate ? 'animate' : ''}`}
			onClick={(e) => handleClick(e)}
		>
			{props.children}
		</button>
	);
};

export default ConfettiButton;
