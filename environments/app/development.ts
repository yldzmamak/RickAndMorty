import packageInfo from "../../package.json";

import { IAppConfig } from "./index";

export const developmentConfig: IAppConfig = {
  apiUrl: "https://rickandmortyapi.com/api",
  loginApiUrl: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000",
  version: packageInfo.version
};