import { ResponseStatuses } from 'store/types';

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
  readonly completeTaskRequestStatus: ResponseStatuses;
}

export type TasksMap = Record<'complete' | 'uncomplete' | 'important' | 'all', Task[]>;

export const GET_TASKS_REQUEST = 'TASKS/GET_TASKS_REQUEST';

export type GetTasksAction = {
  type: typeof GET_TASKS_REQUEST;
};

export type GetTasksActionCreator = () => GetTasksAction;

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

export const CREATE_TASK_REQUEST = 'TASKS/CREATE_TASK_REQUEST';

export type CreateTaskActionPayload = Omit<Task, 'id' | 'complete'>;

export type CreateTaskAction = {
  type: typeof CREATE_TASK_REQUEST;
  payload: CreateTaskActionPayload;
};

export type CreateTaskActionCreator = (task: CreateTaskActionPayload) => CreateTaskAction;

export const PUT_TASK_REQUEST = 'TASKS/PUT_TASK_REQUEST';

export type PutTaskActionPayload = Omit<Task, 'id' | 'complete'>;

export type PutTaskAction = {
  type: typeof PUT_TASK_REQUEST;
  payload: PutTaskActionPayload;
};

export type PutTaskActionCreator = (task: PutTaskActionPayload) => PutTaskAction;

export const DELETE_TASK_REQUEST = 'TASKS/DELETE_TASK_REQUEST';

export type DeleteTaskAction = {
  type: typeof DELETE_TASK_REQUEST;
  payload: string;
};

export type DeleteTaskActionCreator = (id: string) => DeleteTaskAction;

export const COMPLETE_TASK_REQUEST = 'TASKS/COMPLETE_TASK_REQUEST';

export type CompleteTaskAction = {
  type: typeof COMPLETE_TASK_REQUEST;
  payload: string;
};

export type CompleteTaskActionCreator = (id: string) => CompleteTaskAction;

export const SET_GET_REQUEST_STATUS = 'TASKS/SET_GET_REQUEST_STATUS';

export type SetGetRequestStatusAction = {
  type: typeof SET_GET_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type SetGetRequestStatusActionCreator = (
  status: ResponseStatuses
) => SetGetRequestStatusAction;

export const SET_CREATE_REQUEST_STATUS = 'TASKS/SET_CREATE_REQUEST_STATUS';

export type SetCreateRequestStatusAction = {
  type: typeof SET_CREATE_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type SetCreateRequestStatusActionCreator = (
  status: ResponseStatuses
) => SetCreateRequestStatusAction;

export const SET_EDIT_REQUEST_STATUS = 'TASKS/SET_EDIT_REQUEST_STATUS';

export type SetEditRequestStatusAction = {
  type: typeof SET_EDIT_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type SetEditRequestStatusActionCreator = (
  status: ResponseStatuses
) => SetEditRequestStatusAction;

export const SET_DELETE_REQUEST_STATUS = 'TASKS/SET_DELETE_REQUEST_STATUS';

export type SetDeleteRequestStatusAction = {
  type: typeof SET_DELETE_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type SetDeleteRequestStatusActionCreator = (
  status: ResponseStatuses
) => SetDeleteRequestStatusAction;

export const SET_COMPLETE_REQUEST_STATUS = 'TASKS/SET_COMPLETE_REQUEST_STATUS';

export type SetCompleteRequestStatusAction = {
  type: typeof SET_COMPLETE_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type SetCompleteRequestStatusActionCreator = (
  status: ResponseStatuses
) => SetCompleteRequestStatusAction;

export type Actions =
  | SetTasksAction
  | ChangeDateAction
  | GetTasksAction
  | EditTaskAction
  | CreateTaskAction
  | DeleteTaskAction
  | PutTaskAction
  | SetGetRequestStatusAction
  | SetCreateRequestStatusAction
  | SetEditRequestStatusAction
  | SetDeleteRequestStatusAction
  | SetCompleteRequestStatusAction;
