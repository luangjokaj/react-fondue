import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/css/Gallery.css';

const getBundle = () => {
	import('lodash').then(_ => {
		console.log('imported', _);
	});
};

export default () => (
	<div>
		<Helmet encodeSpecialCharacters={true}>
			<title>Interfaces 4 Humans - Gallery</title>
		</Helmet>
		<h1 onClick={getBundle}>Gallery</h1>
	</div>
);
