import "@babel/polyfill";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import ScrollToTop from "../Components/ScrollToTop";
import { getLanguage } from "../server/client-locale/guessLocale";

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const lang = getLanguage(location.pathname);
		return (
			<Router>
				<ScrollToTop>
					<Routes lang={navigator && lang} />
				</ScrollToTop>
			</Router>
		);
	}
}
