export type LanguageTypes =
  | "tr"
  | "en";

export type SystemKeys =
  | "language"
  | "version"
  | "device";

export type DeviceTypes =
  | "MOBILE_XS"
  | "MOBILE"
  | "TABLET"
  | "DESKTOP";

export interface ILanguageSyncAction {
  type: string;
  payload: LanguageTypes;
}

export interface ISystemState {
  language: LanguageTypes;
  version: string;
  device: DeviceTypes;
}

export interface IErrorHandler {
  error?: any | unknown;
  message: string;
  deviceType: DeviceTypes;
  statusCode?: number;
}
