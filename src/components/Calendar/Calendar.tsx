import React, { memo, createContext, useReducer, forwardRef } from 'react';

import Header from 'components/Calendar/Header';
import Month from 'components/Calendar/Month';
import caledarReducer, { initial as initialCalendar } from 'store/calendar/calendar.reducer';
import * as calendarTypes from 'store/calendar/calendar.types';
import { useTheme } from 'styles/theme';

import { useStyles } from './Calendar.styles';

interface CalendarProps {
  dates: string[] | null;
  loading?: boolean;
  maxWidth?: number;
  withScroll?: boolean;
  onChange: (date: string) => void;
}

export const CalendarDispatch = createContext<React.Dispatch<calendarTypes.Actions>>(null!);

const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  ({ loading, dates, onChange, maxWidth }, ref) => {
    const theme = useTheme();
    const classes = useStyles({ maxWidth, theme });

    const [state, dispatch] = useReducer(caledarReducer, initialCalendar);

    return (
      <CalendarDispatch.Provider value={dispatch}>
        <div className={classes.calendar} ref={ref}>
          <Header currentDate={state.currentDay} currentMonth={state.currentMonth[0]} />
          <Month
            currentDate={state.currentDay}
            calendar={state.calendar}
            loading={loading}
            dates={dates}
            onChangeDate={onChange}
          />
        </div>
      </CalendarDispatch.Provider>
    );
  }
);

export default memo(Calendar);
