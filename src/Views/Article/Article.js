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
