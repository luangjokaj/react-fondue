import React from 'react';
import { Route } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch } from 'react-router';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';

const UniversalComponent = universal(props => import(`../Views/${props.page}`));

export default () => (
	<div>
		<Nav />
		<Switch>
			<Route exact path="/">
				<UniversalComponent page="Home" />
			</Route>
			<Route path="/about">
				<UniversalComponent page="About" />
			</Route>
			<Route path="/article">
				<UniversalComponent page="Article" />
			</Route>
		</Switch>
	</div>
);
