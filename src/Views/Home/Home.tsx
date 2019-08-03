import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable } from '../../Components/Layout';
const styles = ('./Home.css');
const dataEn = require('./data-home-en.md');
const dataDe = require('./data-home-de.md');
// @ts-ignore
import hljs from 'highlight.js/lib/highlight';
// @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';
// @ts-ignore
import css from 'highlight.js/lib/languages/css';
import { t } from '../../Components/Languages';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

interface HomeProps {
	match: any;
	counter?: any;
	onIncrement?: any;
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
							{this.props.counter} <button onClick={this.props.onIncrement}>Rrite</button>
							{lang === 'en' && (
								<div
									dangerouslySetInnerHTML={{ __html: dataEn.__content }}
								/>
							)}
							{lang === 'de' && (
								<div
									dangerouslySetInnerHTML={{ __html: dataDe.__content }}
								/>
							)}
						</Readable>
					</Container>
				</ContentPusher>
			</Fragment>
		);
	}
}

const mapStateToProps = (state: any) => {
	return {
		counter: state.counter,
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onIncrement: () => dispatch({ type: 'INCREMENT' })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
