import React, { memo, useRef, useEffect, useCallback, useState } from 'react';

import LanguageSwitcher from 'components/Common/LanguageSwitcher';
import ThemeSwitcher from 'components/Common/ThemeSwitcher';
import { useTheme } from 'theme/theme';
import { debounce } from 'utils/debounce';

import { useStyles } from './Header.styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [transparent, setTransparent] = useState<boolean>(false);
  const prevVal = useRef<number>(0);

  const theme = useTheme();
  const classes = useStyles({ theme, transparent, showHeader });

  const handleScroll = useCallback(
    debounce(() => {
      const { pageYOffset } = window;

      setTransparent(!!pageYOffset);
      setShowHeader(pageYOffset <= prevVal.current);

      prevVal.current = pageYOffset;
    }, 50),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>{title}</h1>
        <div className={classes.switchers}>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
