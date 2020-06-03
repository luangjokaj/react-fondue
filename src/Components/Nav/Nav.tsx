import React, { Component } from "react";
import classNames from "classnames";
import { Link, NavLink, withRouter } from "react-router-dom";
import AppearAfter from "../AppearAfter";
import NavItem from "./NavItem";
import { Logo, Riangle } from "../../assets/svg";
import { clickEvent } from "../util";
const styles = require("./Nav.css");

interface NavProps {
	location: any;
	lang: string;
	history: any;
}

interface NavState {
	menu: boolean;
}

class Nav extends Component<NavProps, NavState> {
	constructor(props: NavProps) {
		super(props);

		this.state = {
			menu: false,
		};
	}

	toggleMenu = () => {
		this.setState({ menu: !this.state.menu });
	};

	closeMenu = (event: any, to: any, push: any) => {
		this.setState({ menu: false });
		clickEvent(event, to, push);
	};

	render() {
		const { menu } = this.state;
		const { location, lang, history } = this.props;

		return (
			<AppearAfter
				className={styles.navigation}
				visibleClassName={styles.visible}
			>
				<header>
					<Link
						to={`/${lang}`}
						onClick={(e) => clickEvent(e, `/${lang}`, history.push)}
						className={styles.logo}
					>
						<Logo />
						<h1>
							ReactFondue - Minimal boilerplate with code
							splitting, hot module reload and server side
							rendering
						</h1>
					</Link>
					<button
						onClick={this.toggleMenu}
						className={classNames(styles.burger, {
							[styles.active]: menu,
						})}
						aria-label="Burger Menu"
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
							active={
								location.pathname == `/${lang}` ||
								location.pathname == `/${lang}/redux-store`
									? true
									: false
							}
						>
							<ul className={styles.sub}>
								<li>
									<NavLink
										to={`/${lang}`}
										activeClassName={styles.active}
										onClick={(e: any) =>
											this.closeMenu(
												e,
												`/${lang}`,
												history.push,
											)
										}
										exact
									>
										Introduction
									</NavLink>
								</li>
								<li>
									<NavLink
										to={`/${lang}/redux-store`}
										activeClassName={styles.active}
										onClick={(e: any) =>
											this.closeMenu(
												e,
												`/${lang}/redux-store`,
												history.push,
											)
										}
										exact
									>
										Redux Store
									</NavLink>
								</li>
							</ul>
						</NavItem>
						<NavItem
							title="About"
							active={
								location.pathname == `/${lang}/about` ||
								location.pathname == `/${lang}/about/`
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
										onClick={(e: any) =>
											this.closeMenu(
												e,
												`/${lang}/about`,
												history.push,
											)
										}
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
							<a
								href="https://www.riangle.com/"
								target="_blank"
								aria-label="Riangle Homepage"
							>
								<Riangle />
							</a>
						</li>
					</ul>
				</header>
			</AppearAfter>
		);
	}
}

export default withRouter<any, any>(Nav);
