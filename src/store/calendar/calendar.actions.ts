import * as calendarTypes from './calendar.types';

export const toNextMonth: calendarTypes.NextMonthActionCreator = () => ({
  type: calendarTypes.NEXT_MONTH,
});

export const toPrevMonth: calendarTypes.PrevMonthActionCreator = () => ({
  type: calendarTypes.PREV_MONTH,
});

export const changeDate: calendarTypes.ChangeDateActionCreator = (year: string) => ({
  type: calendarTypes.CHANGE_DATE,
  payload: year,
});
