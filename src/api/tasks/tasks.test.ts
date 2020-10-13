import client from 'api/client';
import { Task } from 'store/tasks/tasks.types';

import * as tasksApi from './tasks.api';

describe('tasks.api', () => {
  describe('getTasks', () => {
    it('getTasks successResponse', async () => {
      const successResponse = {};
      const requestStub = jest
        .spyOn(client, 'request')
        .mockImplementationOnce(() => Promise.resolve(successResponse));

      const date = '2020-06';
      const result = await tasksApi.getTasks(date);

      expect(requestStub).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'GET',
          url: `/tasks/${date}`,
        })
      );
      expect(result).toBe(successResponse);
    });
  });

  describe('createTask', () => {
    it('createTask successResponse', async () => {
      const successResponse = {};
      const requestStub = jest
        .spyOn(client, 'request')
        .mockImplementationOnce(() => Promise.resolve(successResponse));

      const date = '2020-05';
      const data: Omit<Task, 'id' | 'complete'> = {
        title: 'title',
        description: ['description'],
        important: false,
      };
      const result = await tasksApi.createTask(date, data);

      expect(requestStub).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'POST',
          url: `/tasks/${date}`,
          data,
        })
      );
      expect(result).toBe(successResponse);
    });
  });

  describe('editTask', () => {
    it('editTask successResponse', async () => {
      const successResponse = {};
      const requestStub = jest
        .spyOn(client, 'request')
        .mockImplementationOnce(() => Promise.resolve(successResponse));

      const date = '2020-05';
      const data: Task = {
        title: 'title',
        description: ['description'],
        important: false,
        id: 'id',
        complete: false,
      };
      const result = await tasksApi.editTask(date, data);

      expect(requestStub).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'PUT',
          url: `/tasks/${date}`,
          data,
        })
      );
      expect(result).toBe(successResponse);
    });

    describe('deleteTask', () => {
      it('editTask successResponse', async () => {
        const successResponse = {};
        const requestStub = jest
          .spyOn(client, 'request')
          .mockImplementationOnce(() => Promise.resolve(successResponse));

        const date = '2020-05';
        const id = 'id';
        const result = await tasksApi.deleteTask(date, id);

        expect(requestStub).toHaveBeenCalledWith(
          expect.objectContaining({
            method: 'DELETE',
            url: `/tasks/${date}`,
            params: { id },
          })
        );
        expect(result).toBe(successResponse);
      });
    });

    describe('completeTask', () => {
      it('editTask successResponse', async () => {
        const successResponse = {};
        const requestStub = jest
          .spyOn(client, 'request')
          .mockImplementationOnce(() => Promise.resolve(successResponse));

        const date = '2020-05';
        const id = 'id';
        const result = await tasksApi.completeTask(date, id);

        expect(requestStub).toHaveBeenCalledWith(
          expect.objectContaining({
            method: 'PUT',
            url: `/task/compelete/${date}`,
            data: { id },
          })
        );
        expect(result).toBe(successResponse);
      });
    });
  });
});
