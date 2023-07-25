import { LocalStorageKeys } from "@/types/constants/system";
import { ISystemState, LanguageTypes, SystemKeys } from "@/types/system";


import { LocalStorageService } from "./localStorage.service";
import appConfig from "../../environments/app";


export const defaultSystemConfig: ISystemState = {
  language: "tr",
  version: appConfig.version,
  device: "DESKTOP",
};

/**
 * Contains the default settings of the application. If there is any default parameter, it should be added here. 
 * It currently includes language, theme, direction and version. 
 * It comes from the @interface ISystemState file defined in the interfaces to the system.
 * @returns defaultSystemConfig
 */

const getLocalSystemConfig = (): ISystemState => {
  const localData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.System);
  let result = { ...defaultSystemConfig };

  if (localData) {
    result = { ...localData };

    if (localData.version !== appConfig.version) {
      result = { ...localData, version: appConfig.version };
      updateSystemConfig("version", appConfig.version);
    }

  } else {
    LocalStorageService.setLocalStorageItem(LocalStorageKeys.System, result);
  }

  return result;
};

/**
 * Returns the language from the default system parameters
 * @returns language
 */

const getLanguage = (): LanguageTypes => {
  const localData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.System);
  const result: ISystemState = localData ? localData : defaultSystemConfig;
  return result.language;
};

/**
 * Updates the values of default system parameters
 * @type TSystemKeys 
 * @param {string} value - Gets the default system parameters
 */

const updateSystemConfig = (key: SystemKeys, value: string | number) => {
  const oldLocalData = LocalStorageService.getLocalStorageItem(LocalStorageKeys.System);
  let newLocalData;
  if (oldLocalData) {
    newLocalData = {
      ...oldLocalData,
      [key]: value
    };
  } else {
    newLocalData = {
      ...defaultSystemConfig,
      [key]: value
    };
  }

  return LocalStorageService.updateLocalStorageItem(LocalStorageKeys.System, newLocalData);
};

export const SystemService = {
  getLocalSystemConfig,
  getLanguage,
  updateSystemConfig
};
