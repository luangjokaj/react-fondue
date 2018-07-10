import React from 'react';
import { Route } from 'react-router';

export function Status({ code }) {
	return (
		<Route
			render={({ staticContext }) => {
				if (staticContext) {
					staticContext.status = code;
				}
				return null;
			}}
		/>
	);
}
