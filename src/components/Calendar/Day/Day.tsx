import React, { memo, useCallback, useContext } from 'react';

import cn from 'classnames';
import moment from 'moment';

import { CalendarDispatch } from 'context/calendarDispatch';
import * as calendarActions from 'store/calendar/calendar.actions';

import style from './Day.module.scss';

const now = moment().unix();

const methods = {
  next: calendarActions.toNextMonth,
  prev: calendarActions.toPrevMonth,
};

interface DayProps {
  onChangeDate: (date: string) => void;
  day: number;
  date: string;
  choosenDate: string;
  isActiveMonth: boolean;
  isToday?: boolean;
  loading?: boolean;
  action?: 'next' | 'prev';
}

const Day: React.FC<DayProps> = ({
  onChangeDate,
  isActiveMonth,
  date,
  choosenDate,
  day,
  loading,
  isToday,
  action,
}) => {
  const dispatch = useContext(CalendarDispatch);

  const handleClick = useCallback(() => {
    if (action) {
      dispatch(methods[action]());
    }

    onChangeDate(date);
  }, [date, action, dispatch, onChangeDate]);

  return (
    <button
      type="button"
      onClick={handleClick}
      title={date}
      disabled={loading}
      className={cn(style.button, {
        [style.activeMonth]: isActiveMonth,
        [style.today]: isToday,
        [style.past]: moment(new Date(date)).unix() <= now && !isToday,
        [style.choosen]: choosenDate === date,
        [style.disabled]: loading,
      })}
    >
      {day}
    </button>
  );
};

export default memo(Day);
