import React from 'react';
import classNames from 'classnames';
const styles = require('./Readable.css');

interface ReadableProps {
	className?: string;
	children: any;
}

function Readable({ className, children }:ReadableProps) {
	return <div className={classNames(styles.readable, className)}>{children}</div>;
}

export default Readable;
