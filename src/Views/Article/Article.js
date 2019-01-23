import React, { Fragment } from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import data from '../../../data/bio';
import styles from './Article.css';

function Article() {
	return (
		<Fragment>
			<Head title="React SSR Boilerplate • Article" />
			<Content>
				<div className={styles.article}>
					<h1 className={styles.title}>Article</h1>
					<div>{data}</div>
				</div>
			</Content>
		</Fragment>
	);
}

export default Article;
