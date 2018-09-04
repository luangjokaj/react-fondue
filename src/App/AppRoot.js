import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const isEn = location.pathname.substr(1, 2) == 'en' && 'en';
		const isDe = location.pathname.substr(1, 2) == 'de' && 'de';
		const currentLang = isEn || isDe || 'en';
		return (
			<Router>
				<Routes lang={navigator && currentLang} />
			</Router>
		);
	}
}
