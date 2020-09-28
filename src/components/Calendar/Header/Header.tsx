import React, { memo, useMemo, useCallback, useContext } from 'react';

import moment from 'moment';

import Select from 'components/Select';
import { CalendarDispatch } from 'context/calendarDispatch';
import * as calendarActions from 'store/calendar/calendar.actions';

import style from './Header.module.scss';

interface HeaderProps {
  currentMonth: string;
}

const months = moment.months();

const Header: React.FC<HeaderProps> = ({ currentMonth }) => {
  const dispatch = useContext(CalendarDispatch);
  const [year, month] = useMemo(() => currentMonth.split(' '), [currentMonth]);

  const handleChangeYear = useCallback(
    newYear => {
      dispatch(calendarActions.changeDate(`${newYear} ${month}`));
    },
    [dispatch, month]
  );

  const handleChangeMonth = useCallback(
    newMonth => {
      dispatch(calendarActions.changeDate(`${year} ${newMonth}`));
    },
    [dispatch, year]
  );

  const yearsOptions = useMemo(() => {
    return Array.from(Array(21), (_, i) => `${Number(year) + 10 - i}`);
  }, [year]);

  return (
    <>
      <header className={style.header}>
        <Select value={year} options={yearsOptions} onChange={handleChangeYear} />
        <Select value={month} options={months} onChange={handleChangeMonth} />
      </header>
    </>
  );
};

export default memo(Header);
