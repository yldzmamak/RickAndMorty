import { LocalStorageKeys } from "@/types/constants/system";
import { AuthTypeKeys, IAuthState } from "@/types/interfaces/authentication/authentication";

import { LocalStorageService } from "./localStorage.service";


/**
 * This function is used to set or update the data in the resultObject received from the response when the Member/Login endpoint is 200. 
 * To see what data is returned and used.
 * @interface IMember
 */

const setAuthInfo = (member: IAuthState["login"]) => {
  const localData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.Auth);
  if (localData && localData.userId !== 0) {
    LocalStorageService.updateLocalStorageItem(LocalStorageKeys.Auth, member);
  } else {
    LocalStorageService.setLocalStorageItem(LocalStorageKeys.Auth, member);
  }
};

/**
 * This function is used to get the data in the resultObject received from the response when the Member/Login endpoint is 200. 
 * To see what data is returned and used.
 * @interface IMember
 */

const getAuthInfo = (): IAuthState | null => {
  const localData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.Auth);
  let result: IAuthState | null;

  if (localData && localData.userId !== 0) {
    result = {
      ...localData
    };
  } else {
    result = null;
  }

  return result;
};

/**
 * This function returns the desired key from the data added to the warehouse with the auth key.
 * @param {string} AuthTypeKeys
 * @type AuthTypeKeys
 */

const getAuthInfoByKey = (key: AuthTypeKeys) => {
  const localData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.Auth);
  let result;

  // eslint-disable-next-line no-prototype-builtins
  if (localData?.hasOwnProperty(key)) {
    result = localData[key];
  } else {
    result = null;
  }
  return result;
};

/**
 * Updates the values of keys received through authentication
 */
const updateAuthInfoByKey = (key: AuthTypeKeys, value: string | number | any[]) => {
  const olLocalData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.Auth);
  let newLocalData;
  if (olLocalData && olLocalData.id !== 0) {
    newLocalData = {
      ...olLocalData,
      [key]: value
    };
  } else {
    newLocalData = null;
  }
  LocalStorageService.updateLocalStorageItem(LocalStorageKeys.Auth, newLocalData);
};

/** LS Helper that checkes whether user has token */
const isUserLoggedIn = () => {
  const token = AuthService.getAuthInfoByKey("username");
  return !!token;
};

/** LS Helper that checks whether user is passive*/
const isUserPassive = () => {
  const isUserPassive = LocalStorageService.getLocalStorageItem(LocalStorageKeys.Member)?.isPassive;
  return Boolean(isUserPassive);
};

/** LS Helper that clears auth data */
const logoutAuth = () => {
  return LocalStorageService.deleteLocalStorageItem(LocalStorageKeys.Auth);
};

export const AuthService = {
  setAuthInfo,
  getAuthInfo,
  getAuthInfoByKey,
  updateAuthInfoByKey,
  isUserLoggedIn,
  logoutAuth,
  isUserPassive,
};