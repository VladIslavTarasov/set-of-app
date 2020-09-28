import React, { memo, useState, useCallback } from 'react';

import cn from 'classnames';
import moment from 'moment';

import DateButton from 'components/Calendar/Day';
import { CalendarDay } from 'store/calendar/calendar.types';

import style from './Month.module.scss';

interface BodyProps {
  onChangeDate: (date: string) => void;
  dates: string[] | null;
  calendar: CalendarDay[][];
  currentDate: string;
  loading?: boolean;
}

const weekDays = moment.weekdaysShort();

const Table: React.FC<BodyProps> = ({ dates, calendar, currentDate, loading, onChangeDate }) => {
  const [choosenDate, setChoosenDate] = useState<string>(currentDate);

  const handleChangeDate = useCallback(
    (date: string) => {
      onChangeDate(date);

      setChoosenDate(date);
    },
    [onChangeDate]
  );

  return (
    <table className={style.table}>
      <thead>
        <tr>
          {weekDays.map(day => (
            <th key={day} className={style.dayHead}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {calendar.map((weeks, i) => (
          // eslint-disable-next-line
          <tr key={i} className={style.tr}>
            {weeks.map(day => (
              <td
                key={day.date}
                className={cn(style.day, {
                  [style.hasTask]: !loading && dates?.includes(day.date),
                })}
              >
                <DateButton
                  loading={loading}
                  onChangeDate={handleChangeDate}
                  choosenDate={choosenDate}
                  {...day}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default memo(Table);
