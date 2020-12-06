import React, { useCallback, useMemo, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Calendar from 'components/Calendar';
import ScrollButton from 'components/Common/ScrollButton';
import TasksErrorModal from 'components/TodoList/ErrorModal';
import TasksList from 'components/TodoList/TasksList';
import TodoListFormsContainer from 'containers/TodoListFormsContainer';
import * as tasksActions from 'store/tasks/tasks.actions';
import { getSlice } from 'store/tasks/tasks.selectors';
import { ResponseStatuses } from 'store/types';
import { useTheme } from 'theme/theme';

import { useStyles } from './TodoListContainer.styles';

interface TodoListContainerProps {}

const TodoListContainer: React.FC<TodoListContainerProps> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { deleteTaskRequestStatus, getTasksRequestStatus, datesWithTasks } = useSelector(getSlice);
  const dispatch = useDispatch();

  const calendar = useRef<HTMLDivElement>(null);

  const handleChangeDate = useCallback(
    (date: string) => {
      dispatch(tasksActions.changeDate(date));
    },
    [dispatch]
  );

  const loading = useMemo(
    () => [deleteTaskRequestStatus, getTasksRequestStatus].includes(ResponseStatuses.PENDING),
    [deleteTaskRequestStatus, getTasksRequestStatus]
  );

  useEffect(() => {
    dispatch(tasksActions.getTasksRequest());
  }, [dispatch]);

  return (
    <>
      <div className={classes.formWrapper}>
        <TodoListFormsContainer />
      </div>

      <section className={classes.container}>
        <Calendar
          ref={calendar}
          maxWidth={500}
          dates={datesWithTasks}
          loading={loading}
          onChange={handleChangeDate}
        />

        <div className={classes.todolist}>
          <TasksList loading={loading} />
        </div>
      </section>

      <TasksErrorModal />
      <ScrollButton element={calendar} />
    </>
  );
};

export default TodoListContainer;
