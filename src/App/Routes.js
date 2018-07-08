import React from 'react';
import { Route } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import { Helmet } from 'react-helmet';

const UniversalComponent = universal(props => import(`../Views/${props.page}`));

export default () => (
	<div>
		<Helmet>
			<link
				rel="shortcut icon"
				href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
				type="image/x-icon"
			/>
		</Helmet>
		<Nav />
		<Switch>
			<Route exact path="/">
				<UniversalComponent page="Home" />
			</Route>
			<Route exact path="/about">
				<UniversalComponent page="About" />
			</Route>
			<Route exact path="/article">
				<UniversalComponent page="Article" />
			</Route>
			<Route path="*">
				<UniversalComponent page="NotFound" />
			</Route>
		</Switch>
	</div>
);
