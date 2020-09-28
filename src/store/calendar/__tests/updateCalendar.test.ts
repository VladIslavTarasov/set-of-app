import moment from 'moment';

import { updateCalendar, Mode } from '../__helpers/updateCalendar';
import calendar from './stubs';

describe('__helpres', () => {
  it('updateCalendar', () => {
    [
      ['2020-05', 'next', '2020-06'],
      ['2020-06', 'prev', '2020-05'],
    ].forEach(([date, mode, output]) => {
      expect(updateCalendar(date, mode as Mode)).toEqual({
        calendar: calendar[output],
        currentMonth: [moment(output).format('YYYY MMMM'), moment(output).format('YYYY-MM')],
      });
    });
  });
});
