import { ResponseStatuses } from 'store/types';

import tasksReducer, { initial } from '../tasks.reducer';
import * as tasksTypes from '../tasks.types';

const names = [
  'getTasksRequestStatus',
  'createTaskRequestStatus',
  'editTaskRequestStatus',
  'deleteTaskRequestStatus',
  'completeTaskRequestStatus',
];

describe('tasks.reducer', () => {
  it('SET_TASKS', () => {
    const action = {
      type: tasksTypes.SET_TASKS,
      payload: {
        '2020-05-11': [
          {
            title: 'title',
            description: ['description'],
            important: false,
            complete: false,
            id: 'id',
          },
        ],
      },
    } as tasksTypes.Actions;

    expect(tasksReducer(initial, action)).toEqual({
      ...initial,
      tasks: action.payload,
      datesWithTasks: Object.keys(action.payload),
    });
  });

  it('CHANGE_DATE', () => {
    const action = {
      type: tasksTypes.CHANGE_DATE,
      payload: '2020-02-02',
    } as tasksTypes.Actions;

    expect(tasksReducer(initial, action)).toEqual({
      ...initial,
      choosenDate: action.payload,
    });
  });

  it('SET_EDIT_TASK', () => {
    const actions = [
      {
        type: tasksTypes.SET_EDIT_TASK,
        payload: {
          title: 'title',
          description: ['description'],
          important: false,
          complete: false,
          id: 'id',
        },
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_EDIT_TASK,
        payload: null,
      } as tasksTypes.Actions,
    ];

    actions.forEach(action => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        editTask: action.payload,
      });
    });
  });

  it('SET_REQUEST_STATUS_PENDING', () => {
    const actions = [
      {
        type: tasksTypes.SET_GET_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_CREATE_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_EDIT_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_DELETE_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_COMPLETE_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as tasksTypes.Actions,
    ];

    actions.forEach((action, i) => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        [names[i]]: action.payload as ResponseStatuses,
      });
    });
  });

  it('SET_REQUEST_STATUS_SUCCESS', () => {
    const actions = [
      {
        type: tasksTypes.SET_GET_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_CREATE_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_EDIT_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_DELETE_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_COMPLETE_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as tasksTypes.Actions,
    ];

    actions.forEach((action, i) => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        [names[i]]: action.payload as ResponseStatuses,
      });
    });
  });

  it('SET_REQUEST_STATUS_FAILURE', () => {
    const actions = [
      {
        type: tasksTypes.SET_GET_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_CREATE_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_EDIT_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_DELETE_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as tasksTypes.Actions,
      {
        type: tasksTypes.SET_COMPLETE_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as tasksTypes.Actions,
    ];

    actions.forEach((action, i) => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        [names[i]]: action.payload as ResponseStatuses,
      });
    });
  });
});
