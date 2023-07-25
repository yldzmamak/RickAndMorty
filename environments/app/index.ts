import { developmentConfig } from "./development";

export interface IAppConfig {
  apiUrl: string;
  version: string;
}

let appConfig: IAppConfig = { ...developmentConfig };

if (process.env.NODE_ENV === "development") {
  appConfig = { ...developmentConfig };
}

export default appConfig;