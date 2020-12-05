import React, { memo, useState, useMemo, useCallback } from 'react';

import cn from 'classnames';
import moment from 'moment';

import Day from 'components/Calendar/Day';
import { CalendarDay } from 'store/calendar/calendar.types';
import { useTheme } from 'styles/theme';

import { useStyles } from './Month.styles';

interface BodyProps {
  onChangeDate: (date: string) => void;
  dates: string[] | null;
  calendar: CalendarDay[][];
  currentDate: string;
  loading?: boolean;
}

const weekDays = moment.weekdaysShort();

const Month: React.FC<BodyProps> = ({ dates, calendar, currentDate, loading, onChangeDate }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [choosenDate, setChoosenDate] = useState<string>(currentDate);

  const handleChangeDate = useCallback(
    (date: string) => {
      onChangeDate(date);

      setChoosenDate(date);
    },
    [onChangeDate]
  );

  const thead = useMemo(
    () => (
      <div className={classes.row} role="row">
        {weekDays.map(day => (
          <div key={day} role="cell" className={classes.cell}>
            {day}
          </div>
        ))}
      </div>
    ),
    [classes]
  );

  return (
    <div role="table" className={classes.table}>
      <div role="rowgroup">
        {thead}
        {calendar.map((weeks, i) => (
          // eslint-disable-next-line
          <div role="row" className={classes.row} key={i}>
            {weeks.map(day => (
              <div
                key={day.date}
                role="cell"
                className={cn(classes.cell, {
                  [classes.hasEvent]: !loading && dates?.includes(day.date),
                })}
              >
                <Day
                  loading={loading}
                  onChangeDate={handleChangeDate}
                  isChoosenDate={choosenDate === day.date}
                  {...day}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Month);
