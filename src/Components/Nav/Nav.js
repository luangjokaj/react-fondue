import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import styles from './Nav.css';

function Nav({ lang }) {
	return (
		<header className={styles.navigation}>
			<Link to={`/${lang}`} className={styles.logo}>
				<img src={logo} alt="Logo" />
				<span>React SSR Boilerplate</span>
			</Link>
			<ul className={styles.menu}>
				<li>
					<NavLink to={`/${lang}/about`} activeClassName={styles.active}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to={`/${lang}/article`} activeClassName={styles.active}>
						Article
					</NavLink>
				</li>
				<li>
					<a href="https://github.com/luangjokaj/react-ssr-boilerplate" target="_blank">
						GitHub
					</a>
				</li>
			</ul>
		</header>
	);
}

export default Nav;
