import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface ScrollToTopProps {
	location?: string;
	children?: any;
}

class ScrollToTop extends Component {
	props: ScrollToTopProps;

	componentDidUpdate(prevProps:any) {
		if (location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter<RouteComponentProps, any>(ScrollToTop);
