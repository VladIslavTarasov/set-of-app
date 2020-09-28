import { Task } from 'store/tasks/tasks.types';

export type CommonFailure = {
  success: false;
  error: string;
  body: null;
};

export type TaskDataSuccessBody = {
  tasks: Record<string, Task[]>;
};

export type TaskSuccess = {
  success: true;
  error: null;
  body: TaskDataSuccessBody;
};

export type TaskResponse = TaskSuccess | CommonFailure;

export type NewTaskSuccess = {
  success: true;
  error: null;
  body: null;
};
