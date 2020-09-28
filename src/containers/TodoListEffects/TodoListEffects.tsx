import React, { memo, useEffect, useCallback, useContext } from 'react';

import { getTasks } from 'api/tasks/tasks.api';
import { TasksDispatch } from 'context/tasksDispatch';
import * as tasksActions from 'store/tasks/tasks.actions';
import * as tasksTypes from 'store/tasks/tasks.types';
import { ResponseStatuses } from 'types';

interface TodoListEffectsProps {
  createTaskRequestStatus: ResponseStatuses;
  editTaskRequestStatus: ResponseStatuses;
  deleteTaskRequestStatus: ResponseStatuses;
  currentMonth: string;
}

const TodoListEffects: React.FC<TodoListEffectsProps> = ({
  createTaskRequestStatus,
  editTaskRequestStatus,
  deleteTaskRequestStatus,
  currentMonth,
}) => {
  const dispatch = useContext(TasksDispatch);

  const boundTasks = useCallback(async () => {
    dispatch(tasksActions.setRequestStatusUncalled());
    dispatch(tasksActions.setRequestStatusPending('get'));

    try {
      const { data } = await getTasks(currentMonth);
      dispatch(tasksActions.setTasks(data.body?.tasks as Record<string, tasksTypes.Task[]>));
      dispatch(tasksActions.setRequestStatusSuccess('get'));
    } catch (err) {
      if (err.isAxiosError) {
        dispatch(tasksActions.setRequestStatusFailure('get'));
      }
    }
  }, [dispatch, currentMonth]);

  useEffect(() => {
    if (createTaskRequestStatus === ResponseStatuses.SUCCESS) {
      boundTasks();
    }
  }, [createTaskRequestStatus, boundTasks]);

  useEffect(() => {
    if (editTaskRequestStatus === ResponseStatuses.SUCCESS) {
      boundTasks();
    }
  }, [editTaskRequestStatus, boundTasks]);

  useEffect(() => {
    if (deleteTaskRequestStatus === ResponseStatuses.SUCCESS) {
      boundTasks();
    }
  }, [deleteTaskRequestStatus, boundTasks]);

  useEffect(() => {
    boundTasks();
  }, [boundTasks]);

  return null;
};

export default memo(TodoListEffects);
