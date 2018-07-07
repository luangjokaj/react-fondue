import React from 'react';
import classNames from 'classnames';
import styles from './Content.css';

function Content({ className, children }) {
	return <div className={classNames(styles.content, className)}>{children}</div>;
}

export default Content;
