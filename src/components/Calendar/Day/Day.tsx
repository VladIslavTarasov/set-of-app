import React, { memo, useCallback, useContext } from 'react';

import cn from 'classnames';

import * as calendarActions from 'store/calendar/calendar.actions';
import { useTheme } from 'theme/theme';

import { CalendarDispatch } from '../Calendar';
import { useStyles } from './Day.styles';

const methods = {
  next: calendarActions.toNextMonth,
  prev: calendarActions.toPrevMonth,
};

interface DayProps {
  onChangeDate: (date: string) => void;
  day: number;
  date: string;
  isChoosenDate: boolean;
  isActiveMonth: boolean;
  isToday?: boolean;
  loading?: boolean;
  action?: 'next' | 'prev';
}

const Day: React.FC<DayProps> = ({
  onChangeDate,
  isActiveMonth,
  date,
  isChoosenDate,
  day,
  loading,
  isToday,
  action,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
      className={cn(classes.button, {
        [classes.activeMonth]: isActiveMonth,
        [classes.today]: isToday,
        [classes.choosen]: isChoosenDate,
      })}
    >
      <span>{day}</span>
    </button>
  );
};

export default memo(Day);
