import React from "react";

interface IMeta {
	title: string;
}

export interface IRoute {
	permissions?: string[];
	icon?: string;
	caseSensitive?: boolean;
	children?: IRoute[];
	element?: React.ReactNode;
	path?: string;
	key?: string;
	authGuard?: boolean;
	meta?: IMeta;
}

const searchRoute = (pathname: string, routes: IRoute[] = []): IRoute => {
	let result: IRoute = {};

	for (const item of routes) {
		if (item.path === pathname) {
			return item;
		}

		if (item.children) {
			const res = searchRoute(pathname, item.children);
			if (Object.keys(res).length) {
				result = res;
			}
		}
	}
	return result;
};


export const RouteService = {
	searchRoute,
};