import React from 'react';
import classNames from 'classnames';
import styles from './Button.css';

function Button({ className, id, children, onClick, href, target }) {
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
