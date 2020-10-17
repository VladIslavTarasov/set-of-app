import { combineReducers } from 'redux';

import tasksReducer from 'store/tasks/tasks.reducer';
import { RootState } from 'store/types';

export default combineReducers<RootState>({
  tasks: tasksReducer,
});
