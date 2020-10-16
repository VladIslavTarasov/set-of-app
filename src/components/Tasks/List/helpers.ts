import { Task } from 'store/tasks/tasks.types';

export const makeTasksMap = (propsTasks: Task[] | null) =>
  propsTasks?.reduce(
    (a: Record<'complete' | 'uncomplete' | 'important', Task[] | null>, c: Task) => {
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
    },
    {
      important: [],
      complete: [],
      uncomplete: [],
    }
  );

export const filterTasks = (
  filterValue: string,
  tasks?: Task[] | null
): Task[] | null | undefined => {
  if (!filterValue) {
    return tasks;
  }

  return (
    tasks?.filter(({ title }) => title.toLowerCase().includes(filterValue.toLowerCase())) ?? null
  );
};
