import React from "react";
import classNames from "classnames";
const styles = require("./Container.css");

interface ContainerProps {
	children: any;
	className?: string;
	fluid?: boolean;
}

function Container({ children, className, fluid = false }: ContainerProps) {
	return (
		<div
			className={classNames(
				styles.container,
				{
					[styles.containerFluid]: fluid,
				},
				className,
			)}
		>
			{children}
		</div>
	);
}

export default Container;
