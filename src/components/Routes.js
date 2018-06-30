import React from 'react';
import { Route } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch } from 'react-router';
import styles from '../assets/css/nav.css';
import '../assets/css/globals.css';
import Nav from './Nav';

const UniversalComponent = universal(props => import(`./${props.page}`));

export default () => (
	<div>
		<Nav />
		<Switch>
			<Route exact path="/">
				<UniversalComponent page="Gallery" />
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
