import React from "react";
import { Route } from "react-router";

interface StatusProps {
	code: number;
}

export function Status({ code }: StatusProps) {
	return (
		<Route
			render={({ staticContext }: any) => {
				if (staticContext) {
					staticContext.status = code;
				}
				return null;
			}}
		/>
	);
}
