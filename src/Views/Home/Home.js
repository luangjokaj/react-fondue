import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import styles from './Home.css';
import { t } from '../../Components/Languages';

function Home({ match }) {
	const { lang } = match.params;
	return (
		<div>
			<Helmet encodeSpecialCharacters={true}>
				<title>React SSR Boilerplate • Home</title>
			</Helmet>
			<div className={styles.intro}>
				<h1 className={styles.title}>React Boilerplate</h1>
				<p className={styles.desc}>{t(lang, 'language.title')}</p>
			</div>
		</div>
	);
}

export default Home;
