import React, { Component } from 'react';
import classNames from 'classnames';
import { Quote } from '../../../assets/svg';
import styles from './Text.css';

class Text extends Component {
	render() {
		const { children, className, textAlign, eyebrow, subtitle, small, blockquote } = this.props;
		const ownClassName = classNames(
			{
				[styles.eyebrow]: eyebrow,
				[styles.subtitle]: subtitle,
				[styles.textLeft]: textAlign === 'left',
				[styles.textCenter]: textAlign === 'center',
				[styles.textRight]: textAlign === 'right',
				[styles.small]: small,
				[styles.blockquote]: blockquote,
			},
			styles.text
		);

		if (small) {
			return <small className={ownClassName}>{children}</small>;
		}

		if (blockquote) {
			return (
				<blockquote className={ownClassName}>
					<span className={classNames(styles.quoteIcon, styles.first)}>
						<Quote />
						<Quote />
					</span>
					{children}
					<span className={classNames(styles.quoteIcon, styles.last)}>
						<Quote />
						<Quote />
					</span>
				</blockquote>
			);
		}

		return <div className={ownClassName}>{children}</div>;
	}
}

export default Text;
