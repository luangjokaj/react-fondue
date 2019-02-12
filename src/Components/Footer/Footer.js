import React from 'react';
import classNames from 'classnames';
import { GitHub } from '../../assets/svg';
import { ContentPusher } from '../Layout';
import styles from './Footer.css';

function Footer({ className }) {
	return (
		<footer className={classNames(styles.footer, className)}>
			<ContentPusher>
				<a href="https://github.com/luangjokaj/react-fondue" target="_blank">
					<GitHub />
				</a>
			</ContentPusher>
		</footer>
	);
}

export default Footer;
