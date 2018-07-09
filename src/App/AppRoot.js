import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import guessLocale from '../client-locale/guessLocale';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const currentLang = navigator && navigator.language.substr(0, 2);
		return (
			<Router>
				<Routes lang={(currentLang && currentLang) || 'en'} />
			</Router>
		);
	}
}
