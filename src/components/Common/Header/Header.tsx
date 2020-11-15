import React, { memo, useRef, useEffect, useCallback, useState } from 'react';

import cn from 'classnames';

import LanguageSwitcher from 'components/Common/LanguageSwitcher';
import { debounce } from 'utils/debounce';

import style from './Header.module.scss';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [transparent, setTransparent] = useState<boolean>(false);
  const prevVal = useRef<number>(0);

  const handleScroll = useCallback(
    debounce(() => {
      const { pageYOffset } = window;

      setTransparent(!!pageYOffset);
      setShowHeader(pageYOffset < prevVal.current);

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
    <div className={style.container}>
      <div
        className={cn(style.header, {
          [style.showHeader]: showHeader,
          [style.transparent]: transparent,
        })}
      >
        <div className={style.wrapper}>
          <h1 className={style.title}>{title}</h1>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);