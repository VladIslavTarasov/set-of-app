import moment from 'moment';
import { takeEvery, put, all, call, select } from 'redux-saga/effects';

import * as tasksApi from 'api/tasks/tasks.api';
import * as tasksActions from 'store/tasks/tasks.actions';
import * as tasksTypes from 'store/tasks/tasks.types';
import { ResponseStatuses } from 'store/types';

export function* tasksRequest() {
  try {
    yield put(tasksActions.setGetRequestStatus(ResponseStatuses.PENDING));

    const choosenDate = yield select((state: tasksTypes.State) =>
      moment(state.choosenDate).format('YYYY-MM')
    );
    const { data } = yield call(tasksApi.getTasks, choosenDate);

    yield put(tasksActions.setTasks(data.body?.tasks as Record<string, tasksTypes.Task[]>));
    yield put(tasksActions.setGetRequestStatus(ResponseStatuses.SUCCESS));
  } catch (error) {
    if (error.isAxiosError) {
      yield put(tasksActions.setGetRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

export function* createTaskRequest(action: tasksTypes.CreateTaskAction) {
  try {
    yield put(tasksActions.setCreateRequestStatus(ResponseStatuses.PENDING));

    const choosenDate = yield select((state: tasksTypes.State) =>
      moment(state.choosenDate).format('YYYY-MM')
    );

    yield call(tasksApi.createTask, choosenDate, action.payload);
    yield put(tasksActions.setCreateRequestStatus(ResponseStatuses.SUCCESS));
    yield put(tasksActions.getTasksRequest());
  } catch (err) {
    if (err.isAxiosError) {
      yield put(tasksActions.setCreateRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

export function* putTaskRequest(action: tasksTypes.PutTaskAction) {
  try {
    yield put(tasksActions.setEditRequestStatus(ResponseStatuses.PENDING));

    const { choosenDate, editTask } = yield select((state: tasksTypes.State) => ({
      choosenDate: moment(state.choosenDate).format('YYYY-MM'),
      editTask: state.editTask,
    }));

    yield call(tasksApi.editTask, choosenDate, { ...editTask, ...action.payload });
    yield put(tasksActions.setEditRequestStatus(ResponseStatuses.SUCCESS));
    yield put(tasksActions.getTasksRequest());
  } catch (err) {
    if (err.isAxiosError) {
      yield put(tasksActions.setEditRequestStatus(ResponseStatuses.UNCALLED));
    }
  }
}

export function* deleteTaskRequest(action: tasksTypes.DeleteTaskAction) {
  try {
    yield put(tasksActions.setDeleteRequestStatus(ResponseStatuses.PENDING));

    const choosenDate = yield select((state: tasksTypes.State) =>
      moment(state.choosenDate).format('YYYY-MM')
    );

    yield call(tasksApi.deleteTask, choosenDate, action.payload);
    yield put(tasksActions.setDeleteRequestStatus(ResponseStatuses.SUCCESS));
    yield put(tasksActions.getTasksRequest());
  } catch (err) {
    if (err.isAxiosError) {
      yield put(tasksActions.setDeleteRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

export function* completeTaskRequest(action: tasksTypes.DeleteTaskAction) {
  try {
    yield put(tasksActions.setCompleteRequestStatus(ResponseStatuses.PENDING));

    const choosenDate = yield select((state: tasksTypes.State) =>
      moment(state.choosenDate).format('YYYY-MM')
    );

    yield call(tasksApi.completeTask, choosenDate, action.payload);
    yield put(tasksActions.setCompleteRequestStatus(ResponseStatuses.SUCCESS));
    yield put(tasksActions.getTasksRequest());
  } catch (err) {
    if (err.isAxiosError) {
      yield put(tasksActions.setCompleteRequestStatus(ResponseStatuses.FAILURE));
    }
  }
}

function* tasksSaga() {
  yield all([
    takeEvery(tasksTypes.GET_TASKS_REQUEST, tasksRequest),
    takeEvery(tasksTypes.CREATE_TASK_REQUEST, createTaskRequest),
    takeEvery(tasksTypes.PUT_TASK_REQUEST, putTaskRequest),
    takeEvery(tasksTypes.DELETE_TASK_REQUEST, deleteTaskRequest),
    takeEvery(tasksTypes.COMPLETE_TASK_REQUEST, completeTaskRequest),
  ]);
}

export default tasksSaga;
