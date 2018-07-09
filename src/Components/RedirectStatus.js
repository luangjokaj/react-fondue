import React from 'react';
import { Route, Redirect } from 'react-router';
export function RedirectWithStatus({ from, to, status }) {
	console.log('helloooo');
	return (
		<Route
			render={({ staticContext }) => {
				if (staticContext) {
					staticContext.status = status;
				}
				return <Redirect from={from} to={to} />;
			}}
		/>
	);
}
