import React, { Component } from "react";
import classNames from "classnames";

interface AppearAfterProps {
	children: any;
	className?: string;
	visibleClassName?: string;
	delay?: number;
}

interface AppearAfterState {
	isVisible: boolean;
}

class AppearAfter extends Component<AppearAfterProps, AppearAfterState> {
	componentDidMount() {
		setTimeout(
			() => this.setState({ isVisible: true }),
			this.props.delay || 0,
		);
	}

	constructor(props: AppearAfterProps) {
		super(props);
		this.state = { isVisible: false };
	}
	render() {
		const { isVisible } = this.state;
		const {
			children,
			className,
			visibleClassName = "visible",
		} = this.props;
		return React.cloneElement(children, {
			className: classNames(className, {
				[visibleClassName]: isVisible,
				hidden: !isVisible,
			}),
		});
	}
}

export default AppearAfter;
