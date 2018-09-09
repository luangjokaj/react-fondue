import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import { Provider as ReduxProvider } from "react-redux";
import accepts from 'accepts';
import Routes, { routes } from '../App/Routes';
import { Helmet } from 'react-helmet';
import sitemap from './sitemap';
import robots from './robots';
import manifest from './manifest';
import createStore, { initializeSession } from "../App/Store";

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import extractLocalesFromReq from '../client-locale/extractLocalesFromReq';
import guessLocale from '../client-locale/guessLocale';

export default ({ clientStats }) => (req, res) => {
	const userLocales = extractLocalesFromReq(req);
	let lang = guessLocale(['de', 'en'], userLocales, 'en');

	if (req.originalUrl.substr(1, 2) == 'de') {
		lang = 'de';
	}

	if (req.originalUrl.substr(1, 2) == 'en') {
		lang = 'en';
	}

	const context = {};

	const store = createStore();
  store.dispatch(initializeSession());

	const app = renderToString(
		<ReduxProvider store={store}>
			<StaticRouter location={req.url} context={context}>
				<Routes context={context} lang={lang} />
			</StaticRouter>
		</ReduxProvider>
	);

	const reduxState = store.getState();
	const helmet = Helmet.renderStatic();

	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const status = context.status || 200;

	if (context.status == 404) {
		console.log('Error 404: ', req.originalUrl);
	}

	if (req.url == '/sitemap.xml') {
		return res
			.header('Content-Type', 'application/xml')
			.status(status)
			.send(sitemap);
	}

	if (req.url == '/robots.txt' || req.url == '/Robots.txt') {
		return res
			.header('Content-Type', 'text/plain')
			.status(status)
			.send(robots);
	}

	if (req.url == '/manifest.json' || req.url == '/Manifest.json') {
		return res
			.header('Content-Type', 'application/manifest+json')
			.status(status)
			.send(manifest);
	}

	if (context.url) {
		const redirectStatus = context.status || 302;
		res.redirect(redirectStatus, context.url);
		return;
	}

	const dataRequirements =
    routes
	    .filter( route => matchPath( req.url, route ) ) // filter matching paths
	    .map( route => import(`../Views/${route.page}`) ) // map to components
	    .filter( comp => comp.serverFetch ) // check if components have data requirement
	    .map( comp => store.dispatch( comp.serverFetch( ) ) ); // dispatch data requirement

  Promise.all(dataRequirements).then(() => {
		res.setHeader('Cache-Control', 'public, max-age=2628000');
		res.status(status).send(
			`<!doctype html>
				<html lang="${lang}">
					<head>
						<link rel="manifest" href="./manifest.json">
						<meta name="theme-color" content="#000000"/>
						${styles}
						${helmet.title}
						${helmet.meta.toString()}
						${helmet.link.toString()}
					</head>
					<body>
						<div id="react-root">${app}</div>
						${js}
						${cssHash}
						<script>
							window.REDUX_DATA = ${JSON.stringify(reduxState)}
						</script>
					</body>
				</html>
			`,
		);
  });
};
