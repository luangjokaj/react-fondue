import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import data from '../../../data/bio';
import styles from './NotFound.css';
import AppearAfter from '../../Components/AppearAfter';

function NotFound() {
	return (
		<div>
			<Helmet encodeSpecialCharacters={true}>
				<title>React SSR Boilerplate • Not Found</title>
			</Helmet>
			<AppearAfter className={styles.content} delay={500}>
				<Content>
					<div className={styles.notFound}>
						<h1 className={styles.title}>Not Found</h1>
						<div>404 Error - Page not found.</div>
					</div>
				</Content>
			</AppearAfter>
		</div>
	);
}

export default NotFound;
