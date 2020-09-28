import moment from 'moment';

import { ResponseStatuses } from 'types';

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
};
const tasksReducer = (
  state: tasksTypes.State,
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
    case tasksTypes.SET_REQUEST_STATUS_PENDING:
      return { ...state, [`${action.payload}TaskRequestStatus`]: ResponseStatuses.PENDING };
    case tasksTypes.SET_REQUEST_STATUS_SUCCESS:
      return { ...state, [`${action.payload}TaskRequestStatus`]: ResponseStatuses.SUCCESS };
    case tasksTypes.SET_REQUEST_STATUS_FAILURE:
      return { ...state, [`${action.payload}TaskRequestStatus`]: ResponseStatuses.FAILURE };
    case tasksTypes.SET_REQUEST_STATUS_UNCALLED:
      return {
        ...state,
        createTaskRequestStatus: ResponseStatuses.UNCALLED,
        editTaskRequestStatus: ResponseStatuses.UNCALLED,
        deleteTaskRequestStatus: ResponseStatuses.UNCALLED,
        getTasksRequestStatus: ResponseStatuses.UNCALLED,
      };
    default:
      return state;
  }
};

export default tasksReducer;
