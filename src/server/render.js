import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../App/Routes';
import { Helmet } from 'react-helmet';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import extractLocalesFromReq from './client-locale/extractLocalesFromReq';
import guessLocale from './client-locale/guessLocale';
import { LOCALE_COOKIE_NAME, COOKIE_MAX_AGE } from './client-locale/constants';
import manifest from './manifest';

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
	const app = renderToString(
		<StaticRouter location={req.originalUrl} context={context}>
			<Routes lang={lang} />
		</StaticRouter>
	);

	const helmet = Helmet.renderStatic();

	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const status = context.status || 200;

	if (context.status == 404) {
		console.log('Error 404: ', req.originalUrl);
	}

	if (context.url) {
		const redirectStatus = context.status || 302;
		res.redirect(redirectStatus, context.url);
		return;
	}

	if (req.url == '/manifest.json' || req.url == '/Manifest.json') {
		return res
			.header('Content-Type', 'application/manifest+json')
			.status(status)
			.send(manifest);
	}

	res
		.status(status)
		.cookie(LOCALE_COOKIE_NAME, lang, { maxAge: COOKIE_MAX_AGE, httpOnly: false })
		.header('Content-Type', 'text/html')
		.send(
			`<!DOCTYPE html><html lang="${lang}"><head><meta name="theme-color" content="#000000"/>${styles}${
				helmet.title
			}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div>${js}${cssHash}</body></html>`
		);
};
