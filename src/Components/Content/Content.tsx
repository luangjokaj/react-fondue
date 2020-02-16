import React from "react";
import classNames from "classnames";
const styles = require("./Content.css");

interface ContentProps {
	children: any;
	className?: string;
}

function Content({ children, className }: ContentProps) {
	return (
		<div className={classNames(styles.content, className)}>{children}</div>
	);
}

export default Content;
