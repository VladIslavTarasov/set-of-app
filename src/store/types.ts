import { State as PaletteState } from 'store/palette/palette.types';
import { State as TasksState } from 'store/tasks/tasks.types';

export enum ResponseStatuses {
  UNCALLED,
  PENDING,
  FAILURE,
  SUCCESS,
}

export interface RootState {
  tasks: TasksState;
  palette: PaletteState;
}
