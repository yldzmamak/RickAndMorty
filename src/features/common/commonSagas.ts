import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { CommonApi } from "@/api/dashboard";
import { IGlobalAPIResponse } from "@/types/global";
import { ICharacter, IEpisode } from "@/types/interfaces/dashboard/dashboard";

import { CommonActions } from "./commonSlices";
import { sleep } from "../system/systemSagas";


function* getEpisodeList (action: PayloadAction<number>) {
  try {
    const response: IGlobalAPIResponse<IEpisode[]> = yield call(CommonApi.getEpisodeList, { page: action.payload });
    yield call(sleep, 1500);

    yield put(CommonActions.getEpisodeListSuccess(response));

  } catch (error) {
    yield put(CommonActions.getEpisodeListError(error));
  }
}

function* getEpisode (action: PayloadAction<string>) {
  try {
    const response: IEpisode = yield call(CommonApi.GetEpisodeDetail, { id: action.payload });
    yield call(sleep, 1500);

    yield put(CommonActions.getEpisodeSuccess(response));

  } catch (error) {
    yield put(CommonActions.getEpisodeError(error));
  }
}

function* getCharacterList (action: PayloadAction<string[]>) {
  try {
    const response: ICharacter[] = yield call(CommonApi.GetCharacters, { urlList: action.payload });
    yield call(sleep, 1500);

    yield put(CommonActions.getCharacterListSuccess(response));

  } catch (error) {
    yield put(CommonActions.getCharacterListError(error));
  }
}

export default function* watchCommon () {
  yield all([
    takeLatest(CommonActions.getEpisodeList.type, getEpisodeList),
    takeLatest(CommonActions.getEpisode.type, getEpisode),
    takeLatest(CommonActions.getCharacterList.type, getCharacterList),
  ]);
}