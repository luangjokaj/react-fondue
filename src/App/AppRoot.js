import '@babel/polyfill';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from "react-redux";
import Routes from './Routes';

import createStore from "../App/Store";
const store = createStore( window.REDUX_DATA );

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
			<ReduxProvider store={ store }>
				<Router>
					<Routes lang={navigator && currentLang} />
				</Router>
			</ReduxProvider>
		);
	}
}
