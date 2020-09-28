import * as tasksTypes from './tasks.types';

export const setTasks: tasksTypes.SetTasksActionCreator = (
  tasks: Record<string, tasksTypes.Task[]>
) => ({
  type: tasksTypes.SET_TASKS,
  payload: tasks,
});

export const changeDate: tasksTypes.ChangeDateActionCreator = (date: string) => ({
  type: tasksTypes.CHANGE_DATE,
  payload: date,
});

export const setEditTask: tasksTypes.EditTaskActionCreator = (task: tasksTypes.Task | null) => ({
  type: tasksTypes.SET_EDIT_TASK,
  payload: task,
});

export const setRequestStatusPending: tasksTypes.SetRequestStatusPendingActionCreator = (
  name: tasksTypes.SetRequestStatusPendingActionPayload
) => ({
  type: tasksTypes.SET_REQUEST_STATUS_PENDING,
  payload: name,
});

export const setRequestStatusSuccess: tasksTypes.SetRequestStatusSuccessActionCreator = (
  name: tasksTypes.SetRequestStatusSuccessActionPayload
) => ({
  type: tasksTypes.SET_REQUEST_STATUS_SUCCESS,
  payload: name,
});

export const setRequestStatusFailure: tasksTypes.SetRequestStatusFailureActionCreator = (
  name: tasksTypes.SetRequestStatusFailureActionPayload
) => ({
  type: tasksTypes.SET_REQUEST_STATUS_FAILURE,
  payload: name,
});

export const setRequestStatusUncalled: tasksTypes.SetRequestStatusUncalledActionCreator = () => ({
  type: tasksTypes.SET_REQUEST_STATUS_UNCALLED,
});
