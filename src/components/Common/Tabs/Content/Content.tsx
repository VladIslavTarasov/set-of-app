import React, { memo } from 'react';

import cn from 'classnames';

import { useTheme } from 'styles/theme';

import { useStyles } from './Content.styles';

export interface TabsContentProps {
  value: string;
  classNames?: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, classNames }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <div className={cn(classes.wrapper, classNames)}>{children}</div>;
};

export default memo(TabsContent);
