import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.css';

function Nav() {
	return (
		<div>
			<div className={styles.navigation}>
				<Link to="/">Gallery</Link>
				<Link to="/about">About</Link>
				<Link to="/article">Article</Link>
			</div>
		</div>
	);
}

export default Nav;
