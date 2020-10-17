import moment from 'moment';

import { ResponseStatuses } from 'store/types';

import * as tasksTypes from './tasks.types';

export const initial: tasksTypes.State = {
  tasks: null,
  editTask: null,
  datesWithTasks: [],
  choosenDate: moment().format('YYYY-MM-D'),
  createTaskRequestStatus: ResponseStatuses.UNCALLED,
  editTaskRequestStatus: ResponseStatuses.UNCALLED,
  deleteTaskRequestStatus: ResponseStatuses.UNCALLED,
  getTasksRequestStatus: ResponseStatuses.UNCALLED,
  completeTaskRequestStatus: ResponseStatuses.UNCALLED,
};

const tasksReducer = (
  state: tasksTypes.State = initial,
  action: tasksTypes.Actions
): tasksTypes.State => {
  switch (action.type) {
    case tasksTypes.SET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        datesWithTasks: Object.keys(action.payload),
        editTask: initial.editTask,
      };
    case tasksTypes.CHANGE_DATE:
      return { ...state, choosenDate: action.payload };
    case tasksTypes.SET_EDIT_TASK:
      return { ...state, editTask: action.payload };
    case tasksTypes.SET_GET_REQUEST_STATUS:
      return { ...state, getTasksRequestStatus: action.payload };
    case tasksTypes.SET_EDIT_REQUEST_STATUS:
      return { ...state, editTaskRequestStatus: action.payload };
    case tasksTypes.SET_CREATE_REQUEST_STATUS:
      return { ...state, createTaskRequestStatus: action.payload };
    case tasksTypes.SET_DELETE_REQUEST_STATUS:
      return { ...state, deleteTaskRequestStatus: action.payload };
    case tasksTypes.SET_COMPLETE_REQUEST_STATUS:
      return {
        ...state,
        completeTaskRequestStatus: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
