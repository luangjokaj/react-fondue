import React, { Component } from 'react';
import classNames from 'classnames';
const styles = require('./Tabs.css');

interface TabProps {
	onClick?: any;
	activeTab?: string;
	label: string;
}

class Tab extends Component<TabProps, any> {
	constructor(props: TabProps) {
		super(props);
	}

	render() {
		const { activeTab, label } = this.props;

		const className = classNames(styles.tabListItem, {
			[styles.active]: activeTab === label,
		});

		return (
			<li className={className}>
				<button className={styles.tabButton} onClick={this.onClick}>
					{label}
				</button>
			</li>
		);
	}

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};
}

export default Tab;
