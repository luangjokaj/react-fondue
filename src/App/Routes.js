import React from 'react';
import { Route } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch, Redirect } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import { Helmet } from 'react-helmet';
import Loading from '../Components/Loading';
import NotFound from '../Views/NotFound';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
});

export default () => (
	<div>
		<Helmet>
			<link
				rel="shortcut icon"
				href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
				type="image/x-icon"
			/>
			<title>React SSR Boilerplate</title>
		</Helmet>
		<Nav />
		<Switch>
			<Redirect exact from="/" to="/home" />
			<Route exact path="/about">
				<UniversalComponent page="About" />
			</Route>
			<Route exact path="/article">
				<UniversalComponent page="Article" />
			</Route>
			<Route exact path="/home">
				<UniversalComponent page="Home" />
			</Route>
			<Route>
				<NotFound />
			</Route>
		</Switch>
	</div>
);
