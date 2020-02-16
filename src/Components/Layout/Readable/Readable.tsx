import React from "react";
import classNames from "classnames";
const styles = require("./Readable.css");

interface ReadableProps {
	children: any;
	className?: string;
}

function Readable({ children, className }: ReadableProps) {
	return (
		<div className={classNames(styles.readable, className)}>{children}</div>
	);
}

export default Readable;
