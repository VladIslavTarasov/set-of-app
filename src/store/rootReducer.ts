import { combineReducers } from 'redux';

import paletteReducer from 'store/palette/palette.reducer';
import tasksReducer from 'store/tasks/tasks.reducer';
import { RootState } from 'store/types';

export default combineReducers<RootState>({
  tasks: tasksReducer,
  palette: paletteReducer,
});
