import React from 'react';
import Content from '../../Components/Content';
const MarkdownData = require('../../../data/post.md');
const imagePath = require('../../assets/images/logo.svg');
import styles from './About.css';
import { Helmet } from 'react-helmet';

export default () => (
	<div>
		<Helmet encodeSpecialCharacters={true}>
			<title>React SSR Boilerplate • About</title>
		</Helmet>
		<Content>
			<div className={styles.profile}>
				<img src={imagePath} />
				<h1 className={styles.title}>{MarkdownData.title}</h1>
				<div
					className={styles.content}
					dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
				/>
			</div>
		</Content>
	</div>
);
