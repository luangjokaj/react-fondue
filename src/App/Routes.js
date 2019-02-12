import React, { Fragment } from 'react';
import universal from 'react-universal-component';
import GoogleTagManager from '../Components/GoogleTagManager';
import Head from '../Components/Head';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Route, Switch, Redirect } from 'react-router';
import { RedirectWithStatus } from '../Components/RedirectStatus';
import { Loading } from '../Components/Layout';
import '../assets/css/styles.css';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
	ignoreBabelRename: true,
});

export default ({ staticContext, lang }) => (
	<Fragment>
		{/* <GoogleTagManager gtmId="GTM-XXXXXXX" /> */}
		<Head />
		<Nav lang={lang} />
		<Switch>
			<Route
				exact
				path="/:lang"
				render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
			/>
			<RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
		<Footer />
	</Fragment>
);
