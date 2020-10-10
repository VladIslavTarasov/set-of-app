import React, { memo, useRef, useEffect, useCallback, useState } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { debounce } from 'utils/debounce';

import LanguageSwitcher from 'components/LanguageSwitcher';

import style from './Header.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation('todo');
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
          <h1 className={style.title}>{t('title')}</h1>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
