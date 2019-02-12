import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Tabs.css';

class Tab extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { onClick, activeTab, label } = this.props;

		const className = classNames(styles.tabListItem, { [styles.active]: activeTab === label });

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
