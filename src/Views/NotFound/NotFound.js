import React, { Fragment } from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import AppearAfter from '../../Components/AppearAfter';
import { Status } from '../../Components/Status';
import styles from './NotFound.css';

function NotFound() {
	return (
		<Fragment>
			<Head title="React SSR Boilerplate • Not Found" />
			<Status code={404} />
			<AppearAfter className={styles.content} delay={500}>
				<Content>
					<div className={styles.notFound}>
						<h1 className={styles.title}>Not Found</h1>
						<div>404 Error - Page not found.</div>
					</div>
				</Content>
			</AppearAfter>
		</Fragment>
	);
}

export default NotFound;
