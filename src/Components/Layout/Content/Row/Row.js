import React from 'react';
import classNames from 'classnames';
import styles from './Row.css';

function Row({
	className,
	children,
	alignItems,
	justifyContent,
}) {
	return (
		<div
			className={classNames(
				styles.row,
				{
					[styles[`alignItems-${alignItems}`]]: alignItems,
					[styles[`justifyContent-${justifyContent}`]]: justifyContent,
				},
				className
			)}
		>
			{children}
		</div>
	);
}

export default Row;
