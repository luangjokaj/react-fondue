import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Tabs.css';
import Tab from './Tab';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

class Tabs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeTab: this.props.children[0].props.label,
		};
	}

	componentDidUpdate() {
		const cdx = document.getElementsByTagName('pre');
		if (cdx.length) {
			let i;
			for (i = 0; i < cdx.length; i++) {
				hljs.highlightBlock(cdx[i]);
			}
		}
	}

	render() {
		const {
			onClickTabItem,
			children,
			className,
			wrap,
			classNameTabList,
			classNameTabContent,
		} = this.props;

		const { activeTab } = this.state;

		return (
			<div className={classNames(styles.tabsWrapper, className, { [styles.wrap]: wrap })}>
				<ol className={classNames(styles.tabList, classNameTabList)}>
					{children.map(child => {
						const { label } = child.props;

						return (
							<Tab
								activeTab={activeTab}
								key={label}
								label={label}
								onClick={this.onClickTabItem}
							/>
						);
					})}
				</ol>
				<div className={classNames(styles.tabContent, classNameTabContent)}>
					{children.map(child => {
						if (child.props.label !== activeTab) {
							return undefined;
						}

						return child.props.children;
					})}
				</div>
			</div>
		);
	}

	onClickTabItem = tab => {
		this.setState({ activeTab: tab });
	};
}

export default Tabs;
