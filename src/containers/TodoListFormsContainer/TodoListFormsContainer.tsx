import React, { memo, useMemo, useEffect, useState, useCallback } from 'react';

import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Button';
import TaskForm from 'components/Tasks/Form';
import * as tasksActions from 'store/tasks/tasks.actions';
import { getSlice } from 'store/tasks/tasks.selectors';
import { ResponseStatuses } from 'store/types';

import style from './TodoListFormsContainer.module.scss';

interface TodoListFormsContainerProps {
  currentDate: string;
}

enum ActiveForm {
  CREATE,
  EDIT,
  NULL,
}

const TodoListFormsContainer: React.FC<TodoListFormsContainerProps> = ({ currentDate }) => {
  const { t } = useTranslation('todo');
  const [activeForm, setActiveForm] = useState<ActiveForm>(ActiveForm.NULL);
  const dispatch = useDispatch();
  const { choosenDate, createTaskRequestStatus, editTaskRequestStatus, editTask } = useSelector(
    getSlice
  );

  useEffect(() => {
    if (editTask) {
      setActiveForm(ActiveForm.EDIT);
    }
  }, [editTask]);

  const handleCloseForm = useCallback(() => {
    setActiveForm(ActiveForm.NULL);
  }, []);

  const handleOpenForm = useCallback(() => {
    setActiveForm(ActiveForm.CREATE);
  }, []);

  const handleCreateTask = useCallback(
    values => {
      dispatch(tasksActions.createTaskRequest(values));
      setActiveForm(ActiveForm.NULL);
    },
    [dispatch]
  );
  const handleEditTask = useCallback(
    values => {
      dispatch(tasksActions.editTaskRequest(values));
      setActiveForm(ActiveForm.NULL);
    },
    [dispatch]
  );

  const isDisabled = useMemo(
    () => moment(new Date(currentDate)).unix() > moment(new Date(choosenDate)).unix(),
    [choosenDate, currentDate]
  );

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
          onSubmit={handleCreateTask}
        />
      )}

      {activeForm === ActiveForm.EDIT && (
        <TaskForm
          mode="edit"
          task={editTask}
          loading={isSubmitingForm}
          onClose={handleCloseForm}
          onSubmit={handleEditTask}
        />
      )}
    </>
  );
};

export default memo(TodoListFormsContainer);
