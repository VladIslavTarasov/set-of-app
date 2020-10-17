import { State as TasksState } from 'store/tasks/tasks.types';

export enum ResponseStatuses {
  UNCALLED,
  PENDING,
  FAILURE,
  SUCCESS,
}

export interface RootState {
  tasks: TasksState;
}
