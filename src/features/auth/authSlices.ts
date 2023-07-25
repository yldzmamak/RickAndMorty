import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IAuthState, ILogin } from "@/types/interfaces/authentication/authentication";

const initialState: IAuthState = {
  login: {
    CLIENT_USERNAME: "",
    CLIENT_PASSWORD: "",
  },
  logout: false,
  loading: false,
  error: null
};

const authSlices = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login (state) {
      state.loading = true;
    },
    loginSuccess (state, action: PayloadAction<ILogin>) {
      state.login = action.payload;
      state.loading = false;
    },
    loginFailure (state, action: PayloadAction<IAuthState>) {
      state.error = action.payload.error;
      state.loading = false;
    },
    loginClear (state) {
      state.login = initialState.login;
    },
    logout (state) {
      state.logout = true;
      state.loading = true;
    },
    logoutSuccess (state) {
      state.logout = false;
      state.loading = false;
    },
    logoutFailure (state, action: PayloadAction<IAuthState>) {
      state.loading = false;
      state.error = action.payload.error;
    }
  }
});

export const AuthActions = authSlices.actions;
export default authSlices.reducer;
