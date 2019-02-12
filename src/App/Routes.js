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

const isProd = process.env.NODE_ENV === 'production';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
	ignoreBabelRename: true,
});

export default ({ staticContext, lang }) => (
	<Fragment>
		{isProd ? <GoogleTagManager gtmId="GTM-WFTXGC8" /> : ''}
		<Head />
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
			<RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
		<Footer />
	</Fragment>
);
