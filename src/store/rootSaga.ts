import { all, fork } from 'redux-saga/effects';

import tasksSaga from 'store/tasks/tasks.sagas';

export default function* rootSaga() {
  yield all([fork(tasksSaga)]);
}
