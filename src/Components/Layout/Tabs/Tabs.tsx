import React, { Component } from 'react';
import classNames from 'classnames';
import Tab from './Tab';
// @ts-ignore
import hljs from 'highlight.js/lib/highlight';
// @ts-ignore 
import javascript from 'highlight.js/lib/languages/javascript';
const css = require('highlight.js/lib/languages/css');
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
const styles = require('./Tabs.css');

interface TabProps {
	children: any;
	className?: string;
	wrap?: boolean;
	classNameTabList?: string;
	classNameTabContent?: string;
}

interface TabState {
	activeTab?: string;
}

class Tabs extends Component<TabProps, TabState> {
	constructor(props: TabProps) {
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
					{children.map((child:any) => {
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
					{children.map((child:any) => {
						if (child.props.label !== activeTab) {
							return undefined;
						}

						return child.props.children;
					})}
				</div>
			</div>
		);
	}

	onClickTabItem = (tab: any) => {
		this.setState({ activeTab: tab });
	};
}

export default Tabs;
