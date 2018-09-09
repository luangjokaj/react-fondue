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

export const routes =  [
  {
    exact: true,
    path: "/:lang",
    page: "Home",
  },
  {
    exact: true,
    path: "/:lang/about",
    page: "About",
  },
  {
    exact: true,
    path: "/:lang/article",
    page: "Article",
  },
];

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
			{routes.map(route => (
				<Route
					key={route.path}
					render={routeProps => <UniversalComponent page={route.page} {...routeProps} />}
					{ ...route }
				/>
			))}
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
