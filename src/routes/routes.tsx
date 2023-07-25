import React from "react";
import { Navigate, useRoutes } from "react-router-dom";

// #region Auth
import Auth from "@/layouts/Container/Auth";
import LoginContainer from "@/pages/Auth/Login/container/Login.Container";
import { IRoute } from "@/services/route.service";
import { pathNames } from "@/types/constants/common";
// #endregion Auth

// #region Panel
import { panelRoutes } from "./panel";
// #endregion Panel

export const routeTree: IRoute[] = [
	{
		path: "/",
		element: <Navigate to={pathNames.loginPage} />
	},
	{
		element: <Auth />,
		meta: {
			title: "Auth"
		},
		children: [
			{
				key: "login",
				path: "/login",
				element: <LoginContainer />,
				authGuard: false,
				meta: {
					title: "routes.login",
				}
			},
		]
	},
	...panelRoutes,
	{
		path: "*",
		element: <Navigate to="/" />
	}
];

const Router = () => {
	const routes = useRoutes(routeTree);
	return routes;
};

export default Router;