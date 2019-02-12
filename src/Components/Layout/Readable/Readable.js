import React from 'react';
import classNames from 'classnames';
import styles from './Readable.css';

function Readable({ className, children }) {
	return <div className={classNames(styles.readable, className)}>{children}</div>;
}

export default Readable;
