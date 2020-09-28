import React, { memo, useContext, useCallback } from 'react';

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

import { CalendarDispatch } from 'context/calendarDispatch';
import * as actions from 'store/calendar/calendar.actions';

import style from './Arrows.module.scss';

interface ArrowsProps {
  children: JSX.Element;
}

const Arrows: React.FC<ArrowsProps> = props => {
  const dispatch = useContext(CalendarDispatch);

  const handleClickNext = useCallback(() => {
    dispatch(actions.toNextMonth());
  }, [dispatch]);

  const handleClickPrev = useCallback(() => {
    dispatch(actions.toPrevMonth());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <button type="button" className={style.arrow} onClick={handleClickPrev}>
        <AiOutlineDoubleLeft />
      </button>
      {props.children}
      <button type="button" className={style.arrow} onClick={handleClickNext}>
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
};

export default memo(Arrows);
