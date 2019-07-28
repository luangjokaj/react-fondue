import React, { Component } from 'react';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { Arrow } from '../../assets/svg';
const styles = require('./Nav.css');

interface NavItemProps {
	children: any;
	title: string;
	className?: string;
	link?: string;
	label?: string;
	active: boolean;
}

interface NavItemState {
	opened: boolean;
}

class NavItem extends Component {
	props: NavItemProps;
	state: NavItemState;

	constructor(props: NavItemProps) {
		super(props);

		this.state = {
			opened: props.active ? true : false,
		};
	}

	toggleAccordion = () => {
		this.setState({ opened: !this.state.opened });
	};

	render() {
		const { opened } = this.state;
		const { children, title, className, link, label } = this.props;

		return (
			<li
				className={classNames(styles.navItem, className, {
					[styles.opened]: opened,
					[styles.childless]: !children,
				})}
			>
				// @ts-ignore:
				<button
					to={link}
					onClick={children ? this.toggleAccordion : undefined}
					className={styles.link}
				>
					{title} {label && <span className={styles.label}>{label}</span>}
					<Arrow className={styles.arrow} />
				</button>
				{children && children}
			</li>
		);
	}
}

export default NavItem;
