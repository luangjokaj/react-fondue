import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../components/Routes';
import { Helmet } from 'react-helmet';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

export default ({ clientStats }) => (req, res) => {
	const app = renderToString(
		<StaticRouter location={req.url} context={{}}>
			<Routes />
		</StaticRouter>
	);

	const helmet = Helmet.renderStatic();

	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	res.send(
		`<!doctype html><html><head>${styles}${
			helmet.title
		}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div>${js}${cssHash}</body></html>`
	);
};
