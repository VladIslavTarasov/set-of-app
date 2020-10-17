import { createSelector } from 'reselect';

import * as tasksTypes from 'store/tasks/tasks.types';
import { RootState } from 'store/types';

export const getSlice = (state: RootState): tasksTypes.State => state.tasks;

export const makeGetMapTasks = () => {
  return createSelector(
    getSlice,
    (_: tasksTypes.State, filterValue: string) => filterValue,
    ({ tasks, choosenDate }, filterValue) => {
      const tasksByDate = tasks?.[choosenDate] ?? [];

      const filteredTasksList = filterValue.length
        ? tasksByDate.filter(({ title }) => title.toLowerCase().includes(filterValue.toLowerCase()))
        : tasksByDate;

      const initial = {
        all: filteredTasksList,
        important: [],
        complete: [],
        uncomplete: [],
      };

      if (!filteredTasksList.length) {
        return initial;
      }

      return filteredTasksList.reduce((a: tasksTypes.TasksMap, c: tasksTypes.Task) => {
        if (c.important && !c.complete) {
          return { ...a, important: (a.important || []).concat(c) };
        }

        if (c.complete) {
          return { ...a, complete: (a.complete || []).concat(c) };
        }

        if (!c.complete) {
          return { ...a, uncomplete: (a.uncomplete || []).concat(c) };
        }

        return a;
      }, initial);
    }
  );
};
