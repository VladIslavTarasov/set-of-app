import { takeEvery, put, all, call } from 'redux-saga/effects';

import * as paletteApi from 'api/palette/palette.api';
import * as paletteActions from 'store/palette/palette.actions';
import * as paletteTypes from 'store/palette/palette.types';
import { ResponseStatuses } from 'store/types';

export function* paletteRequest() {
  try {
    yield put(paletteActions.setGetPaletteRequestStatus(ResponseStatuses.PENDING));

    const { data } = yield call(paletteApi.getPalette);

    yield put(paletteActions.setPallete(data.body?.palette as paletteTypes.Palette));
    yield put(paletteActions.setGetPaletteRequestStatus(ResponseStatuses.SUCCESS));
  } catch (error) {
    if (error.isAxiosError) {
      yield put(paletteActions.setGetPaletteRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

export function* createPaletteRequest(action: paletteTypes.CreatePaletteAction) {
  try {
    yield put(paletteActions.setCreateRequestStatus(ResponseStatuses.PENDING));

    yield call(paletteApi.createPalette, action.payload);
    yield put(paletteActions.setCreateRequestStatus(ResponseStatuses.SUCCESS));
  } catch (err) {
    if (err.isAxiosError) {
      yield put(paletteActions.setCreateRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

export function* editPaletteRequest(action: paletteTypes.CreatePaletteAction) {
  try {
    yield put(paletteActions.setCreateRequestStatus(ResponseStatuses.PENDING));

    yield call(paletteApi.createPalette, action.payload);
    yield put(paletteActions.setCreateRequestStatus(ResponseStatuses.SUCCESS));
  } catch (err) {
    if (err.isAxiosError) {
      yield put(paletteActions.setCreateRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

function* tasksSaga() {
  yield all([
    takeEvery(paletteTypes.GET_PALETTE, paletteRequest),
    takeEvery(paletteTypes.CREATE_PALETTE, createPaletteRequest),
    takeEvery(paletteTypes.EDIT_PALETTE, editPaletteRequest),
  ]);
}

export default tasksSaga;
