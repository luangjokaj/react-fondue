import React from 'react';
import classNames from 'classnames';
import styles from './Heading.css';

export function makeHeading(h) {
	const defaultSizeStyle = styles[`like-h${h}`];
	return ({ size, children, className: propsCN, bold }) => {
		const sizeStyle = size ? styles[size] : defaultSizeStyle;
		const className = classNames(styles.heading, propsCN, sizeStyle, {
			[styles.bold]: bold,
		});
		return React.createElement(`h${h}`, { className }, children);
	};
}
