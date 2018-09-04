import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch, Redirect } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import { Helmet } from 'react-helmet';
import Loading from '../Components/Loading';
import { RedirectWithStatus } from '../Components/RedirectStatus';
import riangle from '../assets/images/riangle.svg';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
});

export default ({ staticContext, lang }) => (
	<div>
		<Helmet>
			<link
				rel="shortcut icon"
				href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
				type="image/x-icon"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>React SSR Boilerplate</title>
		</Helmet>
		<Nav lang={lang} />
		<Switch>
			<Route
				exact
				path="/:lang"
				render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
			/>
			<Route
				exact
				path="/:lang/about"
				render={routeProps => <UniversalComponent page="About" {...routeProps} />}
			/>
			<Route
				exact
				path="/:lang/article"
				render={routeProps => <UniversalComponent page="Article" {...routeProps} />}
			/>
			<RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
		<footer>
			<a href="https://www.riangle.com/">
				<img src={riangle} alt="Riangle Logo" />
			</a>
		</footer>
	</div>
);
