import React from 'react';
import Content from '../../Components/Content';
const MarkdownData = require('../../../data/post.md');
const imagePath = require('../../assets/images/logo.svg');
import styles from './About.css';
import { Helmet } from 'react-helmet';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = { loaded: false };
	}

	componentDidMount() {
		this.setState({ loaded: true });
	}

	render() {
		if (this.state.loaded) {
			return (
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
		}
		return <div>Loading goes here...</div>;
	}
}

export default About;
