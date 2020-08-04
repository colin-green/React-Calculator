import React from 'react';
import './style.css';

const isntOperator = val => !isNaN(val) || val === '.' || val === '=';

const CalcButton = props => (
	<div
		className={`button-wrapper ${
			isntOperator(props.children) ? null : 'operator'
		}`}
		onClick={() => props.handleClick(props.children)}
	>
		{props.children}
	</div>
);

export default CalcButton;
