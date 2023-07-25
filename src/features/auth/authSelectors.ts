import { IStore } from "@/store/IStore";

const getAuthState = (state: IStore) => state.auth;
const getLoading = (state: IStore) => state.auth.loading;
const getLogin = (state: IStore) => state.auth.login;
const getAuthLogout = (state: IStore) => state.auth.logout;

export {
  getAuthState,
  getLoading,
  getLogin,
  getAuthLogout
};