import React from "react";
import { Helmet } from "react-helmet-async";
const favicon = require("../assets/img/favicon.ico");

const isProd = process.env.NODE_ENV === "production";

interface HeadProps {
	description?: string;
	title?: string;
	image?: string;
	children?: any;
}

function Head({
	title = "ReactFondue • Minimal boilerplate with code splitting, hot module reload and server side rendering",
	description = "ReactFondue is minimal React boilerplate with support for code splitting, hot module reload and server side rendering.",
	image = "https://res.cloudinary.com/deep-impact-ag/image/upload/v1565467400/cherry/reactfondue/preview.jpg",
	children,
}: HeadProps) {
	return (
		<Helmet>
			<meta
				name="author"
				content="Luan Gjokaj, and ReactFondue contributors"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="shortcut icon" href={favicon} type="image/x-icon" />
			<link
				rel="apple-touch-icon"
				sizes="512x512"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1564693640/cherry/reactfondue/512.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="192x192"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1564693542/cherry/reactfondue/icon192.png"
			/>
			<link
				rel="apple-touch-icon-precomposed"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1565468890/cherry/reactfondue/icon192.png"
			/>
			<link
				rel="icon"
				sizes="192x192"
				href="https://res.cloudinary.com/deep-impact-ag/image/upload/v1565468890/cherry/reactfondue/icon192.png"
			/>
			{description && <meta name="description" content={description} />}
			{title && <meta property="og:title" content={title} />}
			{description && (
				<meta property="og:description" content={description} />
			)}
			{image && <meta property="og:image" content={image} />}
			<link rel="manifest" href="/manifest.json" />
			{children && children}
			{title && <title>{title}</title>}
		</Helmet>
	);
}

export default Head;
