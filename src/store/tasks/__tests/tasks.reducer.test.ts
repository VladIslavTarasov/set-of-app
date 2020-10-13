import { ResponseStatuses } from 'types';

import tasksReducer, { initial } from '../tasks.reducer';
import * as tasksTypes from '../tasks.types';

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
      { type: tasksTypes.SET_REQUEST_STATUS_PENDING, payload: 'delete' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_PENDING, payload: 'create' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_PENDING, payload: 'edit' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_PENDING, payload: 'get' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_PENDING, payload: 'complete' } as tasksTypes.Actions,
    ];

    actions.forEach(action => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        [`${action.payload}TaskRequestStatus`]: ResponseStatuses.PENDING,
      });
    });
  });

  it('SET_REQUEST_STATUS_SUCCESS', () => {
    const actions = [
      { type: tasksTypes.SET_REQUEST_STATUS_SUCCESS, payload: 'delete' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_SUCCESS, payload: 'create' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_SUCCESS, payload: 'edit' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_SUCCESS, payload: 'get' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_SUCCESS, payload: 'complete' } as tasksTypes.Actions,
    ];

    actions.forEach(action => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        [`${action.payload}TaskRequestStatus`]: ResponseStatuses.SUCCESS,
      });
    });
  });

  it('SET_REQUEST_STATUS_FAILURE', () => {
    const actions = [
      { type: tasksTypes.SET_REQUEST_STATUS_FAILURE, payload: 'delete' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_FAILURE, payload: 'create' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_FAILURE, payload: 'edit' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_FAILURE, payload: 'get' } as tasksTypes.Actions,
      { type: tasksTypes.SET_REQUEST_STATUS_FAILURE, payload: 'complete' } as tasksTypes.Actions,
    ];

    actions.forEach(action => {
      expect(tasksReducer(initial, action)).toEqual({
        ...initial,
        [`${action.payload}TaskRequestStatus`]: ResponseStatuses.FAILURE,
      });
    });
  });

  it('SET_REQUEST_STATUS_UNCALLED', () => {
    const action = {
      type: tasksTypes.SET_REQUEST_STATUS_UNCALLED,
      payload: 'delete',
    } as tasksTypes.Actions;

    expect(tasksReducer(initial, action)).toEqual(initial);
  });
});
