import React, { useReducer, useCallback, useMemo, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Calendar from 'components/Calendar';
import TasksErrorModal from 'components/Tasks/ErrorModal';
import TasksList from 'components/Tasks/List';
import TodoListFormsContainer from 'containers/TodoListFormsContainer';
import { CalendarDispatch } from 'context/calendarDispatch';
import caledarReducer, { initial as initialCalendar } from 'store/calendar/calendar.reducer';
import * as tasksActions from 'store/tasks/tasks.actions';
import { getSlice } from 'store/tasks/tasks.selectors';
import { ResponseStatuses } from 'store/types';

interface TodoListContainerProps {}

const TodoListContainer: React.FC<TodoListContainerProps> = () => {
  const [calendarState, calendarDispatch] = useReducer(caledarReducer, initialCalendar);
  const { deleteTaskRequestStatus, getTasksRequestStatus, datesWithTasks } = useSelector(getSlice);
  const dispatch = useDispatch();

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
      <CalendarDispatch.Provider value={calendarDispatch}>
        <Calendar
          state={calendarState}
          dates={datesWithTasks}
          loading={loading}
          onChangeDate={handleChangeDate}
        />
      </CalendarDispatch.Provider>

      <TodoListFormsContainer currentDate={calendarState.currentDay} />
      <TasksList loading={loading} />
      <TasksErrorModal />
    </>
  );
};

export default TodoListContainer;
