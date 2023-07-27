import { ILogin } from "@/types/interfaces/authentication/authentication";

import appConfig from "../../../environments/app";


export const loginUserService = async (request: ILogin) => {
  const LOGIN_API_ENDPOINT = `${appConfig.loginApiUrl}/users?username=${request.CLIENT_USERNAME}&password=${request.CLIENT_PASSWORD}`;

  const parameters = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin":
        "https://fastidious-bombolone-a9ae5a.netlify.app",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(LOGIN_API_ENDPOINT, parameters);

  const json = await response.json();
  return json[0];
};
