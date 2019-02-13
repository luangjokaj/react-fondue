import React, { Component } from 'react';
import classNames from 'classnames';
import AppearAfter from '../AppearAfter';
import { Link, NavLink, withRouter } from 'react-router-dom';
import styles from './Nav.css';

import NavItem from './NavItem';
import { Logo, Riangle } from '../../assets/svg';

class Nav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menu: false,
		};
	}

	toggleMenu = () => {
		this.setState({ menu: !this.state.menu });
	};

	closeMenu = () => {
		this.setState({ menu: false });
	};

	render() {
		const { menu } = this.state;
		const { location, lang } = this.props;

		return (
			<AppearAfter className={styles.navigation} visibleClassName={styles.visible}>
				<header>
					<Link to={`/${lang}`} className={styles.logo}>
						<Logo />
						<h1>
							ReactFondue - Minimal boilerplate with code splitting, hot module reload and server
							side rendering
						</h1>
					</Link>
					<button
						onClick={this.toggleMenu}
						className={classNames(styles.burger, {
							[styles.active]: menu,
						})}
					>
						<span />
					</button>
					<ul
						className={classNames(styles.list, {
							[styles.active]: menu,
						})}
					>
						<NavItem
							title="Overview"
							link="/"
							active={location.pathname == `/${lang}` ? true : false}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to={`/${lang}`}
										activeClassName={styles.active}
										onClick={this.closeMenu}
										exact
									>
										Introduction
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="About"
							link="/"
							active={
								location.pathname == `/${lang}/about` || location.pathname == `/${lang}/about/`
									? true
									: false
							}
							label="New"
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to={`/${lang}/about`}
										activeClassName={styles.active}
										onClick={this.closeMenu}
										exact
									>
										ReactFondue
									</NavLink>
								</li>
							</ul>
						</NavItem>
					</ul>
					<ul className={styles.poweredBy}>
						<li>
							<a href="https://www.riangle.com/" target="_blank">
								<Riangle />
							</a>
						</li>
					</ul>
				</header>
			</AppearAfter>
		);
	}
}

export default withRouter(Nav);
