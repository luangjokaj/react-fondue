import React, { Fragment } from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import { t } from '../../Components/Languages';
import styles from './Home.css';

function Home({ match }) {
	const { lang } = match.params;
	return (
		<Fragment>
			<Head title="React SSR Boilerplate • Home" />
			<div className={styles.intro}>
				<h1 className={styles.title}>React Boilerplate</h1>
				<p className={styles.desc}>{t(lang, 'language.title')}</p>
			</div>
		</Fragment>
	);
}

export default Home;
