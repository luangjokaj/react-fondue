import React from "react";
import { Route, Redirect } from "react-router";

interface RedirectWithStatusProps {
	from: string;
	to: string;
	status: number;
	exact?: boolean;
}

export function RedirectWithStatus({
	from,
	to,
	status,
	exact,
}: RedirectWithStatusProps) {
	return (
		<Route
			render={({ staticContext }: any) => {
				if (staticContext) {
					staticContext.status = status;
				}
				return <Redirect from={from} to={to} />;
			}}
			exact={exact}
		/>
	);
}
