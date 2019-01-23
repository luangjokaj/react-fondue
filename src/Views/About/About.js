import React, { Fragment } from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
const MarkdownData = require('../../../data/post.md');
const imagePath = require('../../assets/images/logo.svg');
import styles from './About.css';

function About() {
	return (
		<Fragment>
			<Head title="React SSR Boilerplate • About" />
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
		</Fragment>
	);
}

export default About;
