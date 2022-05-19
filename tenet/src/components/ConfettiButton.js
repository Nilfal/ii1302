import React, { useState } from 'react';
import './css/confetti.css';

const ConfettiButton = (props) => {
	const [animate, setAnimate] = useState(false);

	const handleClick = (e) => {
		//animation reset
		const timeout = setTimeout(function() {
			setAnimate(false);
		}, 500);
		if (animate) {
			setAnimate(false);
			setAnimate(true);
			clearTimeout(timeout);
			setTimeout(function() {
				setAnimate(false);
			}, 500);
		} else {
			setAnimate(true);
		}
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
