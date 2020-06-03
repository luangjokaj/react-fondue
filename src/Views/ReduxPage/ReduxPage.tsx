import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Prism from "prismjs";
import Head from "../../Components/Head";
import {
	ContentPusher,
	Container,
	Readable,
	Button,
} from "../../Components/Layout";
import * as actionCreators from "../../store/actions";
const styles = require("./ReduxPage.css");
const data = require("./data-redux.md");
import { t } from "../../Components/Languages";

interface ReduxPageProps {
	match: any;
	counter?: any;
	onIncrement?: any;
	onDataLoad?: any;
	data?: any;
}

class ReduxPage extends Component<ReduxPageProps, any> {
	componentDidMount() {
		Prism.highlightAll();
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
				<Container>
					<Readable>
						<div
							dangerouslySetInnerHTML={{
								__html: data.__content,
							}}
						/>
						<hr />
						<ul className={styles.list}>{this.renderSample()}</ul>
						<h3>{this.props.counter}</h3>
						<Button onClick={this.props.onIncrement}>
							Increment
						</Button>
					</Readable>
				</Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
