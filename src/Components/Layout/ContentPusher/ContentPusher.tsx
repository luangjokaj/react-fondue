import React from 'react';
import classNames from 'classnames';
const styles = require('./ContentPusher.css');
import AppearAfter from '../../AppearAfter';

interface ContentPusherProps {
	className?: string;
	children?: any;
}

function ContentPusher({ className, children }:ContentPusherProps) {
	return (
		<AppearAfter
			className={classNames(styles.contentPusher, className)}
			visibleClassName={styles.visible}
			delay={600}
		>
			<div>{children}</div>
		</AppearAfter>
	);
}

export default ContentPusher;
