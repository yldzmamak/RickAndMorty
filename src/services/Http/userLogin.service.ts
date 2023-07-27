import { ILogin } from "@/types/interfaces/authentication/authentication";

export const loginUserService = async (request: ILogin) => {
  console.log(process.env.NODE_ENV);
  
  const LOGIN_API_ENDPOINT = `http://json-server/users?username=${request.CLIENT_USERNAME}&password=${request.CLIENT_PASSWORD}`;
  
  const parameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  const response = await fetch(LOGIN_API_ENDPOINT, parameters);
  
  const json = await response.json();
  return json[0];
};