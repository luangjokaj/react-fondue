import React, { Fragment } from 'react';
import Head from '../../Components/Head';
import Content from '../../Components/Content';
import styles from './About.css';

function About() {
	return (
		<Fragment>
			<Head title="React SSR Boilerplate • About" />
			<Content>
				<div className={styles.profile}>
				</div>
			</Content>
		</Fragment>
	);
}

export default About;
