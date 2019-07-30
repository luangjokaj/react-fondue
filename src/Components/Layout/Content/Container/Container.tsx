import React from 'react';
import classNames from 'classnames';
const styles = require('./Container.css');

interface ContainerProps {
	className?: string;
	fluid?: boolean;
	children: any;
}

function Container({ className, children, fluid = false  }: ContainerProps) {
	return (
		<div
			className={classNames(
				styles.container,
				{
					[styles.containerFluid]: fluid,
				},
				className
			)}
		>
			{children}
		</div>
	);
}

export default Container;
