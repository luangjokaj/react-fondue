import React from 'react';
const styles = require('./Loading.css');
const logo = require('../../assets/images/logo.svg');

function Loading() {
	return (
		<div className={styles.loading}>
			<img src={logo} alt="Loading Logo" />
		</div>
	);
}

export default Loading;
