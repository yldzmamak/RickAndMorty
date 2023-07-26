import { all, call, put, takeLatest } from "redux-saga/effects";

import { history } from "@/components/History";
import { AuthService } from "@/services/auth.service";
import { loginUserService } from "@/services/Http/userLogin.service";
import { LocalStorageService } from "@/services/localStorage.service";
import { IAuthState, ILoginSyncAction, } from "@/types/interfaces/authentication/authentication";

import { AuthActions } from "./authSlices";
import { sleep } from "../system/systemSagas";


function* getLogin ({ payload }: ILoginSyncAction) {
  try {
    const response: IAuthState["login"] = yield call(loginUserService, payload);
    yield call(sleep, 1500);

    yield put(AuthActions.loginSuccess(response));
    yield call(AuthService.setAuthInfo, response);
  } catch (error) {
    yield put(AuthActions.loginFailure(error));
  }
}

function* setLogout () {
  try {
    yield call(AuthService.logoutAuth);
    yield call(sleep, 1500);
    
    yield LocalStorageService.clearFromLocalStorage();
    yield put(AuthActions.logoutSuccess());
    history.push("/login");

  } catch (error) {
    yield put(AuthActions.logoutFailure(error));
  }
}

export default function* watchAuth () {
  yield all([
    takeLatest(AuthActions.login.type, getLogin),
    takeLatest(AuthActions.logout.type, setLogout),
  ]);
}