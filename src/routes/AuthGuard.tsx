import React from "react";
import { Navigate, useLocation } from "react-router-dom";


import { AuthService } from "@/services/auth.service";
import { RouteService } from "@/services/route.service";
import { pathNames } from "@/types/constants/common";

import { routeTree } from "./routes";


const AuthGuard = (props: { children: JSX.Element; }) => {

	const { pathname } = useLocation();
	const route = RouteService.searchRoute(pathname, routeTree);

	if (!route.authGuard) {
		return props.children;
	}

	if (!AuthService.isUserLoggedIn()) {
		return <Navigate to={pathNames.loginPage} replace />;
	}

	return props.children;
};

export default AuthGuard;