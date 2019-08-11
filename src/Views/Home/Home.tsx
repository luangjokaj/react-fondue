import React, { Component, Fragment } from 'react';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable } from '../../Components/Layout';
const styles = require('./Home.css');
const dataEn = require('./data-home-en.md');
const dataDe = require('./data-home-de.md');
import { t } from '../../Components/Languages';
// @ts-ignore
import hljs from 'highlight.js/lib/highlight';
// @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';
// @ts-ignore
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

interface HomeProps {
	match: any;
}

class Home extends Component<HomeProps, any> {
	componentDidMount() {
		const cdx = document.getElementsByTagName('pre');
		if (cdx.length) {
			let i;
			for (i = 0; i < cdx.length; i++) {
				hljs.highlightBlock(cdx[i]);
			}
		}
	}

	render() {
		const { lang } = this.props.match.params;

		return (
			<Fragment>
				<Head />
				<ContentPusher>
					<Container>
						<Readable>
							{lang === 'en' && (
								<div
									dangerouslySetInnerHTML={{
										__html: dataEn.__content,
									}}
								/>
							)}
							{lang === 'de' && (
								<div
									dangerouslySetInnerHTML={{
										__html: dataDe.__content,
									}}
								/>
							)}
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

export default Home;
