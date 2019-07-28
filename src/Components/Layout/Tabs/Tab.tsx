import React, { Component } from 'react';
import classNames from 'classnames';
const styles = require('./Tabs.css');

interface TabProps {
	onClick: any;
	activeTab: boolean;
	label: string;
}

class Tab extends Component {
	props: TabProps;

	constructor(props:TabProps) {
		super(props);
	}

	render() {
		const { onClick, activeTab, label } = this.props;

		const className = classNames(styles.tabListItem, { [styles.active]: activeTab });

		return (
			<li className={className}>
				<button className={styles.tabButton} onClick={this.onClick}>{label}</button>
			</li>
		);
	}

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};
}

export default Tab;
