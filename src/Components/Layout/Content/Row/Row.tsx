import React from 'react';
import classNames from 'classnames';
const styles = require('./Row.css');

interface RowProps {
	className?: string;
	children: any;
	alignItems?: string;
	justifyContent?: string;
}

function Row({
	className,
	children,
	alignItems,
	justifyContent,
}: RowProps) {
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
