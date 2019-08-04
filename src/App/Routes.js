import React, { Fragment } from 'react';
import universal from 'react-universal-component';
import { Route, Switch, Redirect } from 'react-router';
import { RedirectWithStatus } from '../Components/RedirectStatus';
import GoogleTagManager from '../Components/GoogleTagManager';
import Head from '../Components/Head';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { Loading } from '../Components/Layout';
import '../assets/css/styles.css';

const isProd = process.env.NODE_ENV === 'production';

const UniversalComponent = universal((props) => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
	ignoreBabelRename: true,
});

export const routes = [
	{
		exact: true,
		path: '/:lang',
		page: 'Home',
	},
	{
		exact: true,
		path: '/:lang/about',
		page: 'About',
	},
];

export default ({ staticContext, lang }) => (
	<Fragment>
		{isProd ? <GoogleTagManager gtmId="GTM-WFTXGC8" /> : ''}
		<Head />
		<Nav lang={lang} />
		<Switch>
			{routes.map(route => (
				<Route
					key={route.path}
					render={routeProps => <UniversalComponent page={route.page} {...routeProps} />}
					{...route}
				/>
			))}
			<RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
		<Footer />
	</Fragment>
);
