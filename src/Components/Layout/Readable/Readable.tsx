import React from "react";
import classNames from "classnames";
const styles = require("./Readable.css");

interface ReadableProps {
	children: any;
	className?: string;
	noUnorderedLists?: boolean;
	noOrderedLists?: boolean;
}

function Readable({
	children,
	className,
	noUnorderedLists,
	noOrderedLists,
}: ReadableProps) {
	return (
		<div
			className={classNames(styles.readable, className, {
				[styles.noUnorderedLists]: noUnorderedLists,
				[styles.noOrderedLists]: noOrderedLists,
			})}
		>
			{children}
		</div>
	);
}

export default Readable;
