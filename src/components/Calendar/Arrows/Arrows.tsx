import React, { memo, useContext, useCallback } from 'react';

import cn from 'classnames';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';

import * as actions from 'store/calendar/calendar.actions';
import { useTheme } from 'styles/theme';

import { CalendarDispatch } from '../Calendar';
import { useStyles } from './Arrows.styles';

interface ArrowsProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

const Arrows: React.FC<ArrowsProps> = ({ className, children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const dispatch = useContext(CalendarDispatch);

  const handleClickNext = useCallback(() => {
    dispatch(actions.toNextMonth());
  }, [dispatch]);

  const handleClickPrev = useCallback(() => {
    dispatch(actions.toPrevMonth());
  }, [dispatch]);

  return (
    <div className={cn(classes.wrapper, className)}>
      <button type="button" className={classes.arrow} onClick={handleClickPrev}>
        <AiOutlineDoubleLeft />
      </button>
      {children}
      <button type="button" className={classes.arrow} onClick={handleClickNext}>
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
};

export default memo(Arrows);
