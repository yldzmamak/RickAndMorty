import { ILogin } from "@/types/interfaces/authentication/authentication";


export const loginUserService = async (request: ILogin) => {  
  const loginApiUrl = process.env.NODE_ENV === "development" ?  "http://localhost:3000" : process.env.REACT_APP_API_BASE_URL;

  const LOGIN_API_ENDPOINT = `${loginApiUrl}/users?username=${request.CLIENT_USERNAME}&password=${request.CLIENT_PASSWORD}`;

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
