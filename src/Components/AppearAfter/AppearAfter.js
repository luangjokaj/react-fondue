import React, { Component } from 'react';
import classNames from 'classnames';

class AppearAfter extends Component {
	componentDidMount() {
		setTimeout(() => this.setState({ isVisible: true }), this.props.delay || 0);
	}

	constructor(props) {
		super(props);
		this.state = { isVisible: false };
	}
	render() {
		const { isVisible } = this.state;
		const { children, className, visibleClassName } = this.props;
		return React.cloneElement(children, {
			className: classNames(className, {
				[visibleClassName] : isVisible,
				hidden: !isVisible,
			}),
		});
	}
}

export default AppearAfter;
