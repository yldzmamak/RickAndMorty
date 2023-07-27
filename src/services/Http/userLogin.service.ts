import { ILogin } from "@/types/interfaces/authentication/authentication";

export const loginUserService = async (request: ILogin) => {
  const isLocal = window.location.hostname === "localhost";
  let LOGIN_API_ENDPOINT;

  if (isLocal) {
    LOGIN_API_ENDPOINT = `http://localhost:3000/users?username=${request.CLIENT_USERNAME}&password=${request.CLIENT_PASSWORD}`;
  } else {
    LOGIN_API_ENDPOINT = `https://your-netlify-site.netlify.app/.netlify/functions/json-server/users?username=${request.CLIENT_USERNAME}&password=${request.CLIENT_PASSWORD}`;
  }

  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(LOGIN_API_ENDPOINT, parameters);

  const json = await response.json();
  return json[0];
};
