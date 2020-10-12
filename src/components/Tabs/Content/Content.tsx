import React, { memo } from 'react';

import cn from 'classnames';

import style from './Content.module.scss';

export interface TabsContentProps {
  value: string;
  classNames?: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, classNames }) => {
  return <div className={cn(style.wrapper, classNames)}>{children}</div>;
};

export default memo(TabsContent);
