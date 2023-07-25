import React from "react";

// #region Panel
import Panel from "@/layouts/Container/Panel";
import EpisodeDetail from "@/pages/Panel/EpisodeDetail/EpisodeDetail";
import Dashboard from "@/pages/Panel/Episodes/Episodes";
import { IRoute } from "@/services/route.service";

export const panelRoutes: IRoute[] = [
	{
		element: <Panel />,
		meta: {
			title: "routes.dashboard"
		},
		children: [
			{
				key: "episodes",
				path: "/panel/episodes",
				element: <Dashboard />,
				authGuard: true,
				meta: {
					title: "routes.dashboard"
				}
			},
			{
				key: "episodeDetail",
				path: "/panel/episodes/:episodeId",
				element: <EpisodeDetail />,
				authGuard: true,
				meta: {
					title: "routes.dashboard"
				}
			},
		]
	},
];