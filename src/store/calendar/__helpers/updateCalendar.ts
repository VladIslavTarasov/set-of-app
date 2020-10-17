import moment from 'moment';

import { State } from '../calendar.types';
import { getCalendarData } from './getCalendarData';

export type Mode = 'next' | 'prev' | 'byDate';

export const updateCalendar = (date: string, mode: Mode): Omit<State, 'currentDay'> => {
  const localMoment = moment(new Date(date));
  let newDate;

  if (mode === 'next') {
    newDate = localMoment.subtract(-1, 'month').format('YYYY-MM');
  } else if (mode === 'prev') {
    newDate = localMoment.subtract(1, 'month').format('YYYY-MM');
  } else {
    newDate = localMoment.format('YYYY-MM');
  }

  return {
    currentMonth: [localMoment.format('YYYY MMMM'), localMoment.format('YYYY-MM')],
    calendar: getCalendarData(newDate),
  };
};
