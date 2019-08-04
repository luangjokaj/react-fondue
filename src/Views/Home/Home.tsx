import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable } from '../../Components/Layout';
import * as actionCreators from '../../store/actions';
const styles = './Home.css';
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
	counter?: any;
	onIncrement?: any;
	onDataLoad?: any;
	data?: any;
}

class Home extends Component<HomeProps, any> {
	componentWillMount() {
		this.props.onDataLoad();
	}
	
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
							<div>
								{this.props.data && this.props.data.map((dataItem: any) => {
									return <div key={dataItem.id}>{dataItem.name}</div>;
								})}
							</div>
							{this.props.counter} <button onClick={this.props.onIncrement}>Rrite</button>
							{this.props.counter} <button onClick={this.props.onDataLoad}>onDataLoad</button>
							{lang === 'en' && <div dangerouslySetInnerHTML={{ __html: dataEn.__content }} />}
							{lang === 'de' && <div dangerouslySetInnerHTML={{ __html: dataDe.__content }} />}
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
		data: state.data,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		onIncrement: () => dispatch(actionCreators.increment()),
		onDataLoad: () => dispatch(actionCreators.fetchData()),
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
