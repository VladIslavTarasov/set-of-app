import { createContext } from 'react';

import { Actions } from 'store/tasks/tasks.types';

export const TasksDispatch = createContext<Function | React.Dispatch<Actions>>(() => ({}));
