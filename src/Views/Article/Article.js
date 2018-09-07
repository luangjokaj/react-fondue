import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import data from '../../../data/bio';
import styles from './Article.css';

function Article() {
	return (
		<div>
			<Helmet encodeSpecialCharacters={true}>
				<title>React SSR Boilerplate • Article</title>
				<meta
					name="description"
					content="A minimal React boilerplate with support for code splitting, hot module reload and server side rendering."
				/>
			</Helmet>
			<Content>
				<div className={styles.article}>
					<h1 className={styles.title}>Article</h1>
					<div>{data}</div>
				</div>
			</Content>
		</div>
	);
}

export default Article;
