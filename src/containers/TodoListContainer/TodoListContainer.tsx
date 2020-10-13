import React, { useReducer, useCallback, useMemo } from 'react';

import { deleteTask, completeTask } from 'api/tasks/tasks.api';
import Calendar from 'components/Calendar';
import TasksErrorModal from 'components/Tasks/ErrorModal';
import TasksList from 'components/Tasks/List';
import TodoListEffects from 'containers/TodoListEffects';
import TodoListFormsContainer from 'containers/TodoListFormsContainer';
import { CalendarDispatch } from 'context/calendarDispatch';
import { TasksDispatch } from 'context/tasksDispatch';
import caledarReducer, { initial as initialCalendar } from 'store/calendar/calendar.reducer';
import * as tasksActions from 'store/tasks/tasks.actions';
import tasksReducer, { initial } from 'store/tasks/tasks.reducer';
import { ResponseStatuses } from 'types';

interface TodoListContainerProps {}

const TodoListContainer: React.FC<TodoListContainerProps> = () => {
  const [calendarState, calendarDispatch] = useReducer(caledarReducer, initialCalendar);
  const [tasksState, tasksDispatch] = useReducer(tasksReducer, initial);

  const handleChangeDate = useCallback(
    (date: string) => {
      tasksDispatch(tasksActions.changeDate(date));
    },
    [tasksDispatch]
  );

  const handleDeleteTask = useCallback(
    async (id: string) => {
      tasksDispatch(tasksActions.setRequestStatusPending('delete'));
      try {
        await deleteTask(tasksState.choosenDate, id);
        tasksDispatch(tasksActions.setRequestStatusSuccess('delete'));
      } catch (err) {
        if (err.isAxiosError) {
          // TODO stubs errors codes
          tasksDispatch(tasksActions.setRequestStatusFailure('delete'));
        }
      }
    },
    [tasksState.choosenDate, tasksDispatch]
  );

  const handleCompleteTask = useCallback(
    async (id: string) => {
      tasksDispatch(tasksActions.setRequestStatusPending('edit'));
      try {
        await completeTask(tasksState.choosenDate, id);
        tasksDispatch(tasksActions.setRequestStatusSuccess('edit'));
      } catch (err) {
        if (err.isAxiosError) {
          // TODO stubs errors codes
          tasksDispatch(tasksActions.setRequestStatusFailure('edit'));
        }
      }
    },
    [tasksState.choosenDate, tasksDispatch]
  );

  const loading = useMemo(
    () =>
      [tasksState.deleteTaskRequestStatus, tasksState.getTasksRequestStatus].includes(
        ResponseStatuses.PENDING
      ),
    [tasksState.deleteTaskRequestStatus, tasksState.getTasksRequestStatus]
  );

  const tasks = useMemo(() => tasksState.tasks?.[tasksState.choosenDate] ?? null, [
    tasksState.tasks,
    tasksState.choosenDate,
  ]);

  return (
    <>
      <CalendarDispatch.Provider value={calendarDispatch}>
        <Calendar
          state={calendarState}
          dates={tasksState.datesWithTasks}
          loading={loading}
          onChangeDate={handleChangeDate}
        />
      </CalendarDispatch.Provider>

      <TasksDispatch.Provider value={tasksDispatch}>
        <TodoListEffects
          createTaskRequestStatus={tasksState.createTaskRequestStatus}
          editTaskRequestStatus={tasksState.editTaskRequestStatus}
          deleteTaskRequestStatus={tasksState.deleteTaskRequestStatus}
          currentMonth={calendarState.currentMonth[1]}
        />
        <TodoListFormsContainer
          editTask={tasksState.editTask}
          choosenDate={tasksState.choosenDate}
          currentDate={calendarState.currentDay}
          createTaskRequestStatus={tasksState.createTaskRequestStatus}
          editTaskRequestStatus={tasksState.editTaskRequestStatus}
        />
        <TasksList
          tasks={tasks}
          loading={loading}
          onDelete={handleDeleteTask}
          onComplete={handleCompleteTask}
        />
        <TasksErrorModal
          createTaskRequestStatus={tasksState.createTaskRequestStatus}
          editTaskRequestStatus={tasksState.editTaskRequestStatus}
          deleteTaskRequestStatus={tasksState.deleteTaskRequestStatus}
          getTasksRequestStatus={tasksState.getTasksRequestStatus}
        />
      </TasksDispatch.Provider>
    </>
  );
};

export default TodoListContainer;
