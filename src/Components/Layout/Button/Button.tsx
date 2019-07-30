import React from 'react';
import classNames from 'classnames';
import { string } from 'prop-types';
const styles = require('./Button.css');

interface ButtonProps {
	className?: string;
	id?: string;
	children: any;
	onClick?: () => void;
	href?: string;
	target?: string;
}

function Button({ className, id, children, onClick, href, target }: ButtonProps) {
	if (href) {
		return (
			<a href={href} target={target} className={classNames(styles.button, className)} id={id}>
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={classNames(styles.button, className)} id={id}>
			{children}
		</button>
	);
}

export default Button;
