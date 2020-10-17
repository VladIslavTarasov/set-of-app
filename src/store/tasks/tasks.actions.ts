import { ResponseStatuses } from 'store/types';

import * as tasksTypes from './tasks.types';

export const getTasksRequest: tasksTypes.GetTasksActionCreator = () => ({
  type: tasksTypes.GET_TASKS_REQUEST,
});

export const createTaskRequest: tasksTypes.CreateTaskActionCreator = (
  task: Omit<tasksTypes.Task, 'id' | 'complete'>
) => ({
  type: tasksTypes.CREATE_TASK_REQUEST,
  payload: task,
});

export const editTaskRequest: tasksTypes.PutTaskActionCreator = (
  task: Omit<tasksTypes.Task, 'id' | 'complete'>
) => ({
  type: tasksTypes.PUT_TASK_REQUEST,
  payload: task,
});

export const deleteTaskRequest: tasksTypes.DeleteTaskActionCreator = (id: string) => ({
  type: tasksTypes.DELETE_TASK_REQUEST,
  payload: id,
});

export const completeTaskRequest: tasksTypes.CompleteTaskActionCreator = (id: string) => ({
  type: tasksTypes.COMPLETE_TASK_REQUEST,
  payload: id,
});

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

export const setGetRequestStatus: tasksTypes.SetGetRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: tasksTypes.SET_GET_REQUEST_STATUS,
  payload: status,
});

export const setCreateRequestStatus: tasksTypes.SetCreateRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: tasksTypes.SET_CREATE_REQUEST_STATUS,
  payload: status,
});

export const setEditRequestStatus: tasksTypes.SetEditRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: tasksTypes.SET_EDIT_REQUEST_STATUS,
  payload: status,
});

export const setDeleteRequestStatus: tasksTypes.SetDeleteRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: tasksTypes.SET_DELETE_REQUEST_STATUS,
  payload: status,
});

export const setCompleteRequestStatus: tasksTypes.SetCompleteRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: tasksTypes.SET_COMPLETE_REQUEST_STATUS,
  payload: status,
});
