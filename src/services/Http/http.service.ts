import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


import ErrorNotification from "@/components/ErrorNotification";
import { history } from "@/components/History";
import store from "@/store/ConfigStore";
import { pathNames } from "@/types/constants/common";

import { LocalStorageService, NotifyMessageService } from "..";
import appConfig from "../../../environments/app";


export class Http {

  private axiosInstance: AxiosInstance;

  constructor () {
    this.axiosInstance = axios.create({
      baseURL: appConfig.apiUrl,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    this.axiosInstance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  private handleSuccess = (response: AxiosResponse) => {
    // Check if the response status is 204 (no content)
    if (response.status === 204) {
      return null;
    } else {
      // Otherwise, return the data property of the response object
      return response?.data;
    }
  };

  private handleError = (error: { response: { status: number; data: { resultInfo: { isSuccess: boolean; code: string; message: string; }; }; }; }) => {

    const state = store.getState();
    const pathname = window.location.pathname;

    if (error.response && error.response.status === 400 || error.response.status === 406) {
      if (error.response.data && !error.response.data.resultInfo.isSuccess) {

        /** TODO: The 0106 control will be removed.*/
        if (error.response.data.resultInfo.code !== "0106") {
          ErrorNotification({
            message: error.response.data.resultInfo.message === "" ? error.response.data.resultInfo.code : error.response.data.resultInfo.message,
            statusCode: error.response.status,
            deviceType: state.system.device
          });
        }
      }
    } else if (error.response && error.response.status === 401) {
      if (pathname === pathNames.authentication.login) {
        ErrorNotification({
          message: error.response.data.resultInfo.message === "" ? error.response.data.resultInfo.code : error.response.data.resultInfo.message,
          statusCode: error.response.status,
          deviceType: state.system.device
        });
      }
      history.push("/login");
      LocalStorageService.clearFromLocalStorage();
    } else if (error.response && error.response.status === 404) {
      NotifyMessageService.Error({ message: "feedback.404" });
    }

    return Promise.reject({
      ...error,
      data: error.response.data,
      status: error.response.status
    });
  };

  /**
   * Sends a GET request to the specified URL using the Axios HTTP client instance.
   * 
   * @param url - The URL to which the GET request should be sent.
   * @param config - The Axios request configuration object, which can be used to
   * configure the request headers, query parameters, etc.
   * @returns The Promise that resolves to the AxiosResponse object containing the
   * response data returned by the server.
   */

  public async get<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.get(url, config);
    return response;
  }

  /**
   * Sends a POST request to the specified URL using the Axios HTTP client instance.
   * 
   * @param url - The URL to which the POST request should be sent.
   * @param data - The data to be sent as the request body. This parameter is optional.
   * @param config - The Axios request configuration object, which can be used to
   * configure the request headers, query parameters, etc. This parameter is optional.
   * @returns The Promise that resolves to the AxiosResponse object containing the
   * response data returned by the server.
   */

  public async post<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.post(url, data, config);
    return response;
  }

  /**
   * Sends a PUT request to the specified URL using the Axios HTTP client instance.
   *
   * @param url - The URL to which the PUT request should be sent.
   * @param data - The data to be sent as the request body. This parameter is optional.
   * @param config - The Axios request configuration object, which can be used to
   * configure the request headers, query parameters, etc. This parameter is optional.
   * @returns The Promise that resolves to the AxiosResponse object containing the
   * response data returned by the server.
   */

  public async put<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.put(url, data, config);
    return response;
  }

  /**
   * Sends a PATCH request to the specified URL using the Axios HTTP client instance.
   *
   * @param url - The URL to which the PATCH request should be sent.
   * @param data - The data to be sent as the request body. This parameter is optional.
   * @param config - The Axios request configuration object, which can be used to
   * configure the request headers, query parameters, etc. This parameter is optional.
   * @returns The Promise that resolves to the AxiosResponse object containing the
   * response data returned by the server.
   */

  public async patch<T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.patch(url, data, config);
    return response;
  }

  /**
   * Sends a DELETE request to the specified URL using the Axios HTTP client instance.
   *
   * @param url - The URL to which the DELETE request should be sent.
   * @param config - The Axios request configuration object, which can be used to
   * configure the request headers, query parameters, etc. This parameter is optional.
   * @returns The Promise that resolves to the AxiosResponse object containing the
   * response data returned by the server.
   */

  public async delete<R>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<R>> {
    const response = await this.axiosInstance.delete(url, config);
    return response;
  }
}

export const HttpService = new Http();
