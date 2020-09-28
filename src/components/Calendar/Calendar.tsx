import React, { memo, useRef } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { AiFillCaretUp } from 'react-icons/ai';

import Button from 'components/Button';
import Arrows from 'components/Calendar/Arrows';
import Header from 'components/Calendar/Header';
import Month from 'components/Calendar/Month';
import { useScrollToElement } from 'hooks/useScrollToElement';
import { State } from 'store/calendar/calendar.types';

import style from './Calendar.module.scss';

interface CalendarProps {
  state: State;
  dates: string[] | null;
  loading?: boolean;
  onChangeDate: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ state, loading, dates, onChangeDate }) => {
  const { t } = useTranslation('buttons');
  const calendar = useRef<HTMLDivElement>(null);
  const [show, handleScroll] = useScrollToElement(calendar);

  return (
    <>
      <Button
        onClick={handleScroll}
        className={cn(style.backToStart, { [style.show]: show })}
        size="xl"
        role="scrollbar"
        aria-label={t('scrollToTop')}
        title={t('scrollToTop')}
        mode="icon"
      >
        <AiFillCaretUp />
      </Button>
      <div ref={calendar}>
        <Header currentMonth={state.currentMonth[0]} />
        <Arrows>
          <Month
            currentDate={state.currentDay}
            calendar={state.calendar}
            loading={loading}
            dates={dates}
            onChangeDate={onChangeDate}
          />
        </Arrows>
      </div>
    </>
  );
};

export default memo(Calendar);
