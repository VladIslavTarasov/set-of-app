import React from 'react';

import style from './Main.module.scss';

interface Main {
  header?: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
  withCalendar?: boolean;
}

const Main: React.FC<Main> = ({ header, main, footer }) => {
  return (
    <div className={style.container}>
      {header && <header className={style.header}>{header}</header>}
      <main className={style.main}>{main}</main>
      {footer && <footer className={style.footer}>{footer}</footer>}
    </div>
  );
};

export default Main;
