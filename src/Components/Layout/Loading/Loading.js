import React from 'react';
import styles from './Loading.css';

function Loading() {
	return (
		<div className={styles.loading}>
			<div className={styles.inner}>
				<div className={styles.spinner}>
					<div className={styles.bubble1} />
					<div className={styles.bubble2} />
				</div>
			</div>
		</div>
	);
}

export default Loading;
