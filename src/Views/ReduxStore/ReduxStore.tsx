import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable } from '../../Components/Layout';
import * as actionCreators from '../../store/actions';
const styles = './ReduxStore.css';
const data = require('./data-redux.md');
import { t } from '../../Components/Languages';
// @ts-ignore
import hljs from 'highlight.js/lib/highlight';
// @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';
// @ts-ignore
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

interface ReduxStore {
	match: any;
	counter?: any;
	onIncrement?: any;
	onDataLoad?: any;
	data?: any;
}

class ReduxStore extends Component<ReduxStore, any> {
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

	renderSample() {
		return this.props.data.map((dataItem: any) => {
			return <div key={dataItem.id}>{dataItem.name}</div>;
		})
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
								{this.renderSample()}
							</div>
							{this.props.counter} <button onClick={this.props.onIncrement}>Rrite</button>
							<hr />
							<div dangerouslySetInnerHTML={{ __html: data.__content }} />
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

function loadData(store: any) {
	store.dispatch(actionCreators.fetchData());
}

export { loadData };
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ReduxStore);
