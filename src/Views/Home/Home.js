import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import styles from './Home.css';

export default () => (
	<div>
		<Helmet encodeSpecialCharacters={true}>
			<title>React SSR Boilerplate • Home</title>
		</Helmet>
		<div className={styles.intro}>
			<h1 className={styles.title}>React Boilerplate</h1>
			<p className={styles.desc}>A minimal React boilerplate with Server side rendering.</p>
		</div>
	</div>
);
