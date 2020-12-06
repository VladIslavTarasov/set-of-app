import React from 'react';

import { useTheme } from 'theme/theme';

import { useStyles } from './Main.styles';

interface Main {
  header?: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
  withCalendar?: boolean;
}

const Main: React.FC<Main> = ({ header, main, footer }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container}>
      {header && <header className={classes.header}>{header}</header>}
      <main className={classes.main}>{main}</main>
      {footer && <footer className={classes.footer}>{footer}</footer>}
    </div>
  );
};

export default Main;
