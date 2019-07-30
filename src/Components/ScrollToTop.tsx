import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface ScrollToTopProps {
	children: any;
	location?: string;
}

class ScrollToTop extends Component<ScrollToTopProps, any> {
	componentDidUpdate(prevProps: any) {
		if (location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter<RouteComponentProps, any>(ScrollToTop);
