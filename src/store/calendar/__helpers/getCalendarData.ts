import moment from 'moment';

import { CalendarDay } from '../calendar.types';

type FormatCalendarData = (arr: CalendarDay[]) => CalendarDay[][] | Function;
type FormatCalendarDataNext = FormatCalendarData;

export const formatCalendarData: FormatCalendarData = array => {
  let res: CalendarDay[][] | [] = [];

  const next: FormatCalendarDataNext = arr => {
    res = [...res, arr.splice(0, 7)];

    if (arr.length) {
      return next(arr);
    }
    return res;
  };

  return next(array);
};

export const getPrevMonth = (date: string): CalendarDay[] => {
  const localDate = moment(date);
  const startDayOfMonth = Number(localDate.format('d'));
  const prevMonth = localDate.subtract(1, 'months');
  const dayInPrevMonth = prevMonth.daysInMonth();
  const prevMonthFormat = prevMonth.format('YYYY-MM');

  return Array.from(Array(startDayOfMonth), (_, i) => ({
    day: dayInPrevMonth - (startDayOfMonth - (i + 1)),
    date: `${prevMonthFormat}-${dayInPrevMonth - (startDayOfMonth - (i + 1))}`,
    isActiveMonth: false,
    action: 'prev',
  }));
};

export const getNextMonth = (date: string, arrayLength: number): CalendarDay[] => {
  let maxArraySize: number;

  if (arrayLength > 35) {
    maxArraySize = 42;
  } else if (arrayLength === 28) {
    maxArraySize = 28;
  } else {
    maxArraySize = 35;
  }

  const nextMonthFormat = moment(date).subtract(-1, 'months').format('YYYY-MM');

  return Array.from(Array(maxArraySize - arrayLength), (_, i) => ({
    day: i + 1,
    date: `${nextMonthFormat}-${i + 1}`,
    isActiveMonth: false,
    action: 'next',
  }));
};

export const getCurrentMonth = (date: string): CalendarDay[] => {
  const momentDate = moment(date);
  const dayInMonth = momentDate.daysInMonth();
  const month = momentDate.format('YYYY-MM');
  const dayNow = moment().format('YYYY-MM-D');

  return Array.from(Array(dayInMonth), (_, i) => ({
    day: i + 1,
    isActiveMonth: true,
    date: `${month}-${i + 1}`,
    isToday: dayNow === `${month}-${i + 1}`,
  }));
};

export const getCalendarData = (function memo() {
  const cache: Record<string, CalendarDay[][]> = {};

  return (date: string = moment().format('YYYY-MM')): CalendarDay[][] => {
    if (cache[date]) {
      return cache[date];
    }

    const prevMonth = getPrevMonth(date);
    const currentMonth = getCurrentMonth(date);
    const nextMonth = getNextMonth(date, prevMonth.length + currentMonth.length);

    cache[date] = formatCalendarData([
      ...prevMonth,
      ...currentMonth,
      ...nextMonth,
    ]) as CalendarDay[][];
    return cache[date];
  };
})();
