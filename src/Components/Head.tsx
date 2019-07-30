import React from 'react';
import { Helmet } from 'react-helmet';
const favicon = require( '../assets/img/favicon.ico');

const isProd = process.env.NODE_ENV === 'production';

interface HeadProps {
	description?: string;
	title?: string;
	image?: string;
	children?: any;
}

function Head({
	title = 'ReactFondue • Minimal boilerplate with code splitting, hot module reload and server side rendering',
	description = 'ReactFondue is minimal React boilerplate with support for code splitting, hot module reload and server side rendering.',
	image = 'https://i.postimg.cc/bvLpCSjQ/preview.jpg',
	children,
}: HeadProps) {
	return (
		<Helmet>
			<meta http-equiv="" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{description && <meta name="description" content={description} />}
			{title && <meta property="og:title" content={title} />}
			{description && <meta property="og:description" content={description} />}
			{image && <meta property="og:image" content={image} />}
			<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			<link rel="icon" sizes="192x192" href="https://i.postimg.cc/FRsbCkJ1/192.jpg" />
			<link rel="apple-touch-icon-precomposed" href="https://i.postimg.cc/FRsbCkJ1/192.jpg" />
			{children && children}
			{title && <title>{title}</title>}
		</Helmet>
	);
}

export default Head;
