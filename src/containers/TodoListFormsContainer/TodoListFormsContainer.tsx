import React, { memo, useMemo, useEffect, useState, useCallback } from 'react';

import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/Common/Button';
import Drawer from 'components/Common/Drawer';
import TaskForm from 'components/TodoList/Form';
import * as tasksActions from 'store/tasks/tasks.actions';
import { getSlice } from 'store/tasks/tasks.selectors';

interface TodoListFormsContainerProps {}

enum ActiveForm {
  CREATE,
  EDIT,
  NULL,
}

const TodoListFormsContainer: React.FC<TodoListFormsContainerProps> = () => {
  const { t } = useTranslation('todo');
  const [activeForm, setActiveForm] = useState<ActiveForm>(ActiveForm.NULL);
  const dispatch = useDispatch();
  const { choosenDate, editTask } = useSelector(getSlice);

  useEffect(() => {
    if (editTask) {
      setActiveForm(ActiveForm.EDIT);
    }
  }, [editTask]);

  const handleCloseForm = useCallback(() => {
    dispatch(tasksActions.setEditTask(null));
    setActiveForm(ActiveForm.NULL);
  }, [dispatch]);

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
    () => moment().subtract(1, 'days').unix() > moment(new Date(choosenDate)).unix(),
    [choosenDate]
  );

  return (
    <>
      <Button
        disabled={isDisabled}
        onClick={handleOpenForm}
        aria-label={t('create')}
        title={t('create')}
        type="button"
        mode="icon"
      >
        <AiOutlineFileAdd />
      </Button>
      <Drawer open={activeForm !== ActiveForm.NULL} onClose={handleCloseForm}>
        {activeForm === ActiveForm.CREATE && <TaskForm mode="create" onSubmit={handleCreateTask} />}

        {activeForm === ActiveForm.EDIT && (
          <TaskForm mode="edit" task={editTask} onSubmit={handleEditTask} />
        )}
      </Drawer>
    </>
  );
};

export default memo(TodoListFormsContainer);
