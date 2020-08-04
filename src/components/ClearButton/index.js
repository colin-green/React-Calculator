import React from 'react';
import './style.css';

const ClearButton = props => (
	<div className='clear-btn' onClick={props.handleClear}>
		Clear
	</div>
);

export default ClearButton;
