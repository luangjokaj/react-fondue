import React from 'react';
import classNames from 'classnames';
const styles = require('./Content.css');

interface ContentProps {
	className?: string;
	children: any;
}

function Content({ className, children }: ContentProps) {
	return <div className={classNames(styles.content, className)}>{children}</div>;
}

export default Content;
