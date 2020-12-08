import { all, fork } from 'redux-saga/effects';

import paletteSaga from 'store/palette/palette.sagas';
import tasksSaga from 'store/tasks/tasks.sagas';

export default function* rootSaga() {
  yield all([fork(tasksSaga), fork(paletteSaga)]);
}
