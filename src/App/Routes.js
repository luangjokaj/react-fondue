import React, { Fragment } from "react";
import universal from "react-universal-component";
import { Route, Switch, Redirect } from "react-router";
import { RedirectWithStatus } from "../Components/RedirectStatus";
import GoogleTagManager from "../Components/GoogleTagManager";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import { Loading } from "../Components/Layout";
import "../assets/css/styles.css";
import { loadData } from "../Views/ReduxPage/ReduxPage";
import { ContentPusher } from "../Components/Layout";
import { AVAILABLE_LOCALES } from "../server/client-locale/constants";

const isProd = process.env.NODE_ENV === "production";

const UniversalComponent = universal(
	(props) => import(`../Views/${props.page}`),
	{
		loading: () => <Loading />,
		ignoreBabelRename: true,
	},
);

const availableLangs = AVAILABLE_LOCALES.join("|");

export const routes = [
	{
		exact: true,
		path: `/:lang(${availableLangs})`,
		page: "Home",
	},
	{
		exact: true,
		path: `/:lang(${availableLangs})/about`,
		page: "About",
	},
	{
		loadData,
		exact: true,
		path: `/:lang(${availableLangs})/redux-store`,
		page: "ReduxPage",
	},
];

export default ({ staticContext, lang }) => (
	<Fragment>
		{isProd ? <GoogleTagManager gtmId="GTM-WFTXGC8" /> : ""}
		<Nav lang={lang} />
		<ContentPusher id="content-pusher">
			<Switch>
				{routes.map((route) => (
					<Route
						key={route.path}
						render={(routeProps) => (
							<UniversalComponent
								page={route.page}
								{...routeProps}
							/>
						)}
						{...route}
					/>
				))}
				<RedirectWithStatus
					status={301}
					exact
					from="/"
					to={`/${lang}`}
				/>
				<Route
					render={(routeProps) => (
						<UniversalComponent page="NotFound" {...routeProps} />
					)}
				/>
			</Switch>
		</ContentPusher>
		<Footer />
	</Fragment>
);
