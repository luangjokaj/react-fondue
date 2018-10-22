import React from 'react';
import { Helmet } from 'react-helmet';

const isProd = process.env.NODE_ENV === 'production';

function Head({
	title = 'React SSR Boilerplate',
	description = '⚛ A minimal React boilerplate with support for code splitting, hot module reload and server side rendering.',
	image = 'https://i.imgur.com/lvzUVyf.jpg',
	children,
}) {
	return (
		<Helmet encodeSpecialCharacters={true}>
			<meta http-equiv="" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<link
				rel="shortcut icon"
				href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
				type="image/x-icon"
			/>
			<link rel="icon" sizes="192x192" href="https://i.imgur.com/mMOR6Y7.png" />
			<link rel="apple-touch-icon-precomposed" href="https://i.imgur.com/mMOR6Y7.png" />
			<link
				rel="manifest"
				href={`${isProd ? 'https://production/' : 'http://localhost:8080/'}manifest.json`}
			/>
			{children && children}
			<title>{title}</title>
		</Helmet>
	);
}

export default Head;
