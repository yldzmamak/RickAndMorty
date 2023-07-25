import { all } from "redux-saga/effects";

import watchAuth from "@/features/auth/authSagas";
import { watchCommon } from "@/features/common";
import watchSystem from "@/features/system/systemSagas";


export default function* rootSaga () {
  yield all([
    watchSystem(),
    watchAuth(),
    watchCommon(),
  ]);
}