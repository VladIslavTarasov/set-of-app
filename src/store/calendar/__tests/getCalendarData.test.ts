import moment from 'moment';

import {
  getCurrentMonth,
  getPrevMonth,
  getNextMonth,
  getCalendarData,
  formatCalendarData,
} from '../__helpers/getCalendarData';
import calendar from './stubs';

describe('__helpres', () => {
  it('getCurrentMonth', () => {
    [
      ['2020-06-1', 1, { date: '2020-06-1', day: 1, isActiveMonth: true, isToday: false }],
      ['2020-06-12', 12, { date: '2020-06-12', day: 12, isActiveMonth: true, isToday: false }],
      [
        moment().format('YYYY-MM-D'),
        Number(moment().format('D')),
        {
          date: moment().format('YYYY-MM-D'),
          day: Number(moment().format('D')),
          isActiveMonth: true,
          isToday: true,
        },
      ],
    ].forEach(([input, num, output]) => {
      const currentMonth = getCurrentMonth(input as string);
      expect(currentMonth[(num as number) - 1]).toEqual(output);
    });
  });

  it('getPrevMonth', () => {
    [
      ['2020-05', 1, { action: 'prev', date: '2020-04-26', day: 26, isActiveMonth: false }],
      ['2020-05', 2, { action: 'prev', date: '2020-04-27', day: 27, isActiveMonth: false }],
      ['2020-05', 3, { action: 'prev', date: '2020-04-28', day: 28, isActiveMonth: false }],
      ['2020-05', 4, { action: 'prev', date: '2020-04-29', day: 29, isActiveMonth: false }],
      ['2020-05', 5, { action: 'prev', date: '2020-04-30', day: 30, isActiveMonth: false }],
    ].forEach(([input, num, output]) => {
      const prevMonth = getPrevMonth(input as string);
      expect(prevMonth[(num as number) - 1]).toEqual(output);
    });
  });

  it('getNextMonth', () => {
    [
      ['2020-05', 28, 28],
      ['2020-05', 40, 42],
      ['2020-05', 30, 35],
      ['2020-05', 36, 42],
      ['2020-05', 33, 35],
      ['2020-05', 41, 42],
      ['2020-05', 22, 35],
    ].forEach(([date, length, output]) => {
      expect(getNextMonth(date as string, length as number).length).toEqual(output - length);
    });

    [
      ['2020-05', 1, { action: 'next', date: '2020-06-1', day: 1, isActiveMonth: false }],
      ['2020-05', 2, { action: 'next', date: '2020-06-2', day: 2, isActiveMonth: false }],
      ['2020-05', 3, { action: 'next', date: '2020-06-3', day: 3, isActiveMonth: false }],
      ['2020-05', 4, { action: 'next', date: '2020-06-4', day: 4, isActiveMonth: false }],
      ['2020-05', 5, { action: 'next', date: '2020-06-5', day: 5, isActiveMonth: false }],
    ].forEach(([input, num, output]) => {
      const nextMonth = getNextMonth(input as string, 36);
      expect(nextMonth[(num as number) - 1]).toEqual(output);
    });
  });

  it('formatCalendarData', () => {
    ['2020-05', '2020-06'].forEach(input => {
      const prevMonth = getPrevMonth(input);
      const currentMonth = getCurrentMonth(input);
      const nextMonth = getNextMonth(input, prevMonth.length + currentMonth.length);

      expect(formatCalendarData([...prevMonth, ...currentMonth, ...nextMonth])).toEqual(
        calendar[input]
      );
    });
  });

  it('getCalendarData', () => {
    ['2020-05', '2020-06'].forEach(input => {
      expect(getCalendarData(input as string)).toEqual(calendar[input]);
    });
  });
});
