import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Head from '../../Components/Head';
import { ContentPusher, Container, Readable, Button } from '../../Components/Layout';
import * as actionCreators from '../../store/actions';
const styles = require('./ReduxPage.css');
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

interface ReduxPageProps {
	match: any;
	counter?: any;
	onIncrement?: any;
	onDataLoad?: any;
	data?: any;
}

class ReduxPage extends Component<ReduxPageProps, any> {
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
			return <li key={dataItem.id}>{dataItem.name}</li>;
		});
	}

	render() {
		const { lang } = this.props.match.params;

		return (
			<Fragment>
				<Head />
				<ContentPusher>
					<Container>
						<Readable>
							<div dangerouslySetInnerHTML={{ __html: data.__content }} />
							<hr />
							<ul className={styles.list}>{this.renderSample()}</ul>
							<hr />
							<h3>{this.props.counter}</h3>
							<Button onClick={this.props.onIncrement}>Increment</Button>
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
)(ReduxPage);
