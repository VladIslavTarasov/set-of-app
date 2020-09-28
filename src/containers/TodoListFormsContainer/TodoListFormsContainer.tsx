import React, { memo, useContext, useMemo, useEffect, useState, useCallback } from 'react';

import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { AiOutlineFileAdd } from 'react-icons/ai';

import * as apiTasks from 'api/tasks/tasks.api';
import Button from 'components/Button';
import TaskForm from 'components/Tasks/Form';
import { TasksDispatch } from 'context/tasksDispatch';
import * as tasksActions from 'store/tasks/tasks.actions';
import * as tasksTypes from 'store/tasks/tasks.types';
import { ResponseStatuses } from 'types';

import style from './TodoListFormsContainer.module.scss';

interface TodoListFormsContainerProps {
  choosenDate: string;
  currentDate: string;
  editTask: tasksTypes.Task | null;
  createTaskRequestStatus: ResponseStatuses;
  editTaskRequestStatus: ResponseStatuses;
}

enum ActiveForm {
  CREATE,
  EDIT,
  NULL,
}

const TodoListFormsContainer: React.FC<TodoListFormsContainerProps> = ({
  choosenDate,
  currentDate,
  editTask,
  createTaskRequestStatus,
  editTaskRequestStatus,
}) => {
  const { t } = useTranslation('todo');
  const dispatch = useContext(TasksDispatch);
  const [activeForm, setActiveForm] = useState<ActiveForm>(ActiveForm.NULL);

  useEffect(() => {
    if (editTask) {
      setActiveForm(() => ActiveForm.EDIT);
    }
  }, [editTask]);

  const handleCloseForm = useCallback(() => {
    setActiveForm(() => ActiveForm.NULL);
  }, []);

  const handleOpenForm = useCallback(() => {
    setActiveForm(() => ActiveForm.CREATE);
  }, []);

  const handleSubmit = useCallback(
    async values => {
      const request = editTask ? apiTasks.editTask : apiTasks.createTask;
      const nameRequest = editTask ? 'edit' : 'create';
      const submitValues = editTask
        ? {
            ...editTask,
            ...values,
          }
        : values;

      dispatch(tasksActions.setRequestStatusPending(nameRequest));
      try {
        await request(choosenDate, submitValues);
        dispatch(tasksActions.setRequestStatusSuccess(nameRequest));
      } catch (err) {
        // TODO stubs errors codes
        if (err.isAxiosError) {
          dispatch(tasksActions.setRequestStatusFailure(nameRequest));
        }
      } finally {
        handleCloseForm();
      }
    },
    [choosenDate, editTask, dispatch, handleCloseForm]
  );

  const isDisabled = useMemo(() => moment(currentDate).unix() > moment(choosenDate).unix(), [
    choosenDate,
    currentDate,
  ]);

  const isSubmitingForm = useMemo(
    () => [createTaskRequestStatus, editTaskRequestStatus].includes(ResponseStatuses.PENDING),
    [createTaskRequestStatus, editTaskRequestStatus]
  );

  return (
    <>
      <Button
        disabled={isDisabled}
        onClick={handleOpenForm}
        className={style.openForm}
        aria-label={t('create')}
        title={t('create')}
        type="button"
        mode="icon"
      >
        <AiOutlineFileAdd />
      </Button>

      {activeForm === ActiveForm.CREATE && (
        <TaskForm
          mode="create"
          loading={isSubmitingForm}
          onClose={handleCloseForm}
          onSubmit={handleSubmit}
        />
      )}

      {activeForm === ActiveForm.EDIT && (
        <TaskForm
          mode="edit"
          task={editTask}
          loading={isSubmitingForm}
          onClose={handleCloseForm}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default memo(TodoListFormsContainer);
