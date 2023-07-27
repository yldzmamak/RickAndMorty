import packageInfo from "../../package.json";

import { IAppConfig } from "./index";

export const developmentConfig: IAppConfig = {
  apiUrl: "https://rickandmortyapi.com/api",
  version: packageInfo.version
};