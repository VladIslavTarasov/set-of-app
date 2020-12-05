import React, { memo, createContext } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { AiFillCaretUp } from 'react-icons/ai';

import Button from 'components/Common/Button';
import { useScrollToElement } from 'hooks/useScrollToElement';
import * as calendarTypes from 'store/calendar/calendar.types';
import { useTheme } from 'styles/theme';

import { useStyles } from './ScrollButton.styles';

interface ScrollButtonProps {
  element: React.RefObject<HTMLDivElement>;
}

export const CalendarDispatch = createContext<React.Dispatch<calendarTypes.Actions>>(null!);

const ScrollButton: React.FC<ScrollButtonProps> = ({ element }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation('buttons');

  const [show, handleScroll] = useScrollToElement(element);

  return (
    <Button
      onClick={handleScroll}
      className={cn(classes.backToStart, { [classes.show]: show })}
      size="xl"
      role="scrollbar"
      aria-label={t('scrollToTop')}
      title={t('scrollToTop')}
      mode="icon"
    >
      <AiFillCaretUp />
    </Button>
  );
};

export default memo(ScrollButton);
