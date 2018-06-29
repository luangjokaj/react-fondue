import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../components/Routes';
import { Helmet } from 'react-helmet';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

export default ({ clientStats }) => (req, res) => {
	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
	});

	const helmet = Helmet.renderStatic();

	res.send(`<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
	<head>
		${styles}
		${helmet.title}
		${helmet.meta.toString()}
		${helmet.link.toString()}
	</head>
	<body ${helmet.bodyAttributes.toString()}>
		<div id="react-root">${renderToString(
			<StaticRouter location={req.url} context={{}}>
				<Routes />
			</StaticRouter>
		)}</div>
		${js}
	</body>
</html>`);
};
