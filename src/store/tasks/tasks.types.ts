import { ResponseStatuses } from 'types';

export interface Task {
  id: string;
  important: boolean;
  complete: boolean;
  title: string;
  description: string[];
}

export interface State {
  readonly datesWithTasks: string[];
  readonly tasks: Record<string, Task[]> | null;
  readonly editTask: Task | null;
  readonly choosenDate: string;
  readonly createTaskRequestStatus: ResponseStatuses;
  readonly editTaskRequestStatus: ResponseStatuses;
  readonly deleteTaskRequestStatus: ResponseStatuses;
  readonly getTasksRequestStatus: ResponseStatuses;
  readonly completeTasksRequestStatus: ResponseStatuses;
}

export const SET_TASKS = 'TASKS/SET_TASKS';

export type SetTasksAction = {
  type: typeof SET_TASKS;
  payload: Record<string, Task[]>;
};

export type SetTasksActionCreator = (tasks: Record<string, Task[]>) => SetTasksAction;

export const CHANGE_DATE = 'TASKS/CHANGE_DATE';

export type ChangeDateAction = {
  type: typeof CHANGE_DATE;
  payload: string;
};

export type ChangeDateActionCreator = (date: string) => ChangeDateAction;

export const SET_EDIT_TASK = 'TASKS/SET_EDIT_TASK';

export type EditTaskAction = {
  type: typeof SET_EDIT_TASK;
  payload: Task | null;
};

export type EditTaskActionCreator = (task: Task | null) => EditTaskAction;

export const SET_REQUEST_STATUS_PENDING = 'TASKS/SET_REQUEST_STATUS_PENDING';

export type SetRequestStatusPendingActionPayload =
  | 'delete'
  | 'create'
  | 'edit'
  | 'get'
  | 'complete';

export type SetRequestStatusPendingAction = {
  type: typeof SET_REQUEST_STATUS_PENDING;
  payload: SetRequestStatusPendingActionPayload;
};

export type SetRequestStatusPendingActionCreator = (
  name: SetRequestStatusPendingActionPayload
) => SetRequestStatusPendingAction;

export const SET_REQUEST_STATUS_SUCCESS = 'TASKS/SET_REQUEST_STATUS_SUCCESS';

export type SetRequestStatusSuccessActionPayload = SetRequestStatusPendingActionPayload;

export type SetRequestStatusSuccessAction = {
  type: typeof SET_REQUEST_STATUS_SUCCESS;
  payload: SetRequestStatusPendingActionPayload;
};

export type SetRequestStatusSuccessActionCreator = (
  name: SetRequestStatusSuccessActionPayload
) => SetRequestStatusSuccessAction;

export const SET_REQUEST_STATUS_FAILURE = 'TASKS/SET_REQUEST_STATUS_FAILURE';

export type SetRequestStatusFailureActionPayload = SetRequestStatusPendingActionPayload;

export type SetRequestStatusFailureAction = {
  type: typeof SET_REQUEST_STATUS_FAILURE;
  payload: SetRequestStatusPendingActionPayload;
};

export type SetRequestStatusFailureActionCreator = (
  name: SetRequestStatusFailureActionPayload
) => SetRequestStatusFailureAction;

export const SET_REQUEST_STATUS_UNCALLED = 'TASKS/SET_REQUEST_STATUS_UNCALLED';

export type SetRequestStatusUncalledAction = {
  type: typeof SET_REQUEST_STATUS_UNCALLED;
};

export type SetRequestStatusUncalledActionCreator = () => SetRequestStatusUncalledAction;

export type Actions =
  | SetTasksAction
  | ChangeDateAction
  | EditTaskAction
  | SetRequestStatusPendingAction
  | SetRequestStatusSuccessAction
  | SetRequestStatusFailureAction
  | SetRequestStatusUncalledAction;
