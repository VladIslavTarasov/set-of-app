import client from 'api/client';
import { TaskResponse } from 'api/tasks/tasks.types';
import { Task } from 'store/tasks/tasks.types';

export const getTasks = (date: string) =>
  client.request<TaskResponse>({
    method: 'GET',
    url: `/tasks/${date}`,
  });

export const createTask = (date: string, data: Omit<Task, 'id' | 'complete'>) =>
  client.request<TaskResponse>({
    method: 'POST',
    url: `/tasks/${date}`,
    data,
  });

export const editTask = (date: string, data: Task) =>
  client.request<TaskResponse>({
    method: 'PUT',
    url: `/tasks/${date}`,
    data,
  });

export const deleteTask = (date: string, id: string) =>
  client.request<TaskResponse>({
    method: 'DELETE',
    url: `/tasks/${date}`,
    params: { id },
  });

export const completeTask = (date: string, id: string) =>
  client.request<TaskResponse>({
    method: 'PUT',
    url: `/task/compelete/${date}`,
    data: { id },
  });
