import React from 'react';
const MarkdownData = require('../../data/post.md');
const imagePath = require('../assets/images/logo.svg');
import styles from '../assets/css/About.css';
import { Helmet } from 'react-helmet';

export default () => (
	<div>
		<Helmet encodeSpecialCharacters={true}>
			<title>Interfaces 4 Humans - About</title>
		</Helmet>
		<div className={styles.profile}>
			<img src={imagePath} />
			<h1 className={styles.title}>{MarkdownData.title}</h1>
			<div
				className={styles.content}
				dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
			/>
		</div>
	</div>
);
