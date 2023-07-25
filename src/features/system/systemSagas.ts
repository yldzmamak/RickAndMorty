import { all, call, takeLatest } from "redux-saga/effects";

import { SystemService } from "@/services/system.service";
import { i18n } from "@/translations/helpers/Internationalization";
import { ILanguageSyncAction } from "@/types/system";

import { SystemActions } from "./systemSlices";


export function* sleep (time: number) {
  yield new Promise(resolve => setTimeout(resolve, time));
}

function* getLanguage ({ payload }: ILanguageSyncAction) {
  try {
    yield call(SystemService.updateSystemConfig, "language", payload);
    yield call(i18n.changeLanguage, payload);
  } catch (e) {
    console.warn("SAGA/setLanguage", e);
  }
}

export default function* watchSystem () {
  yield all([
    takeLatest(SystemActions.setLanguage.type, getLanguage),
  ]);
}


