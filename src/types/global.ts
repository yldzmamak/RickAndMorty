export interface IStateMisc {
  loading: boolean;
  error: null | string | object;
}

export interface IGlobalResultInfo {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}

export interface IGlobalAPIResponse<T> {
  results: T;
  info: IGlobalResultInfo
}

export interface IGlobalAPIParams {
  page?: number;
  id?: string;
  urlList?: string[];
  callback?: (res: any) => void;
  [key: string]: any;
}

export interface IStateMiscExtended extends IStateMisc {
  loading: boolean,
  error: null | string | object,
  success: boolean
}

export interface IStateEdit {
  edit: {
    loading: boolean;
    error: any | unknown;
    success: boolean;
    payload: any;
  }
}