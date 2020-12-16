import React, { memo, useMemo, useCallback, useContext } from 'react';

import moment from 'moment';

import Arrows from 'components/Calendar/Arrows';
import { Select } from 'components/Common/Fields';
import * as calendarActions from 'store/calendar/calendar.actions';
import { useTheme } from 'theme/theme';

import { CalendarDispatch } from '../Calendar';
import { useStyles } from './Header.styles';

interface HeaderProps {
  currentMonth: string;
  currentDate: string;
}

const months = moment.months().map(month => ({
  value: month,
  title: month,
}));

const Header: React.FC<HeaderProps> = ({ currentMonth, currentDate }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useContext(CalendarDispatch);
  const [year, month] = useMemo(() => currentMonth.split(' '), [currentMonth]);

  const handleChangeYear = useCallback(
    (newYear: string) => {
      dispatch(calendarActions.changeDate(`${newYear} ${month}`));
    },
    [dispatch, month]
  );

  const handleChangeMonth = useCallback(
    (newMonth: string) => {
      dispatch(calendarActions.changeDate(`${year} ${newMonth}`));
    },
    [dispatch, year]
  );

  const yearsOptions = useMemo(
    () =>
      Array.from(Array(21), (_, i) => {
        const value = `${Number(year) + 10 - i}`;
        return {
          value,
          title: value,
        };
      }),
    [year]
  );

  return (
    <>
      <header className={classes.header}>
        <h3 className={classes.title}>{moment(currentDate).format('dddd, D MMMM YYYY')}</h3>
        <Arrows className={classes.arrows}>
          <div className={classes.month}>
            <Select value={month} options={months} onChange={handleChangeMonth} />
            <span className={classes.separator} />
            <Select value={year} options={yearsOptions} onChange={handleChangeYear} />
          </div>
        </Arrows>
      </header>
    </>
  );
};

export default memo(Header);
