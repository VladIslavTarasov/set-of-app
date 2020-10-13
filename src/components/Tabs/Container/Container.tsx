import React, { memo, useCallback, useMemo, useState } from 'react';

import cn from 'classnames';

import Button from '../Button';
import { TabsContentProps } from '../Content/Content';
import style from './Container.module.scss';

export interface TabsContainerProps {
  active: string;
  classNames?: {
    container?: string;
    tablist?: string;
    button?: string;
    content?: string;
  };
}

const TabsContainer: React.FC<TabsContainerProps> = ({ children, active, classNames }) => {
  const [activeValue, setActiveValue] = useState<string>(active);

  const handleClick = useCallback(value => {
    setActiveValue(value);
  }, []);

  const tabs = useMemo(() => {
    return React.Children.map(children, child => {
      if (!React.isValidElement<TabsContentProps>(child)) {
        throw new Error('Tabs.Container must include only Tabs.Content');
      }

      return {
        value: child.props.value,
        component: child,
      };
    });
  }, [children]);

  return (
    <div className={cn(style.container, classNames?.container)}>
      <div className={style.tablist} role="tablist">
        {tabs.map(({ value }) => (
          <Button
            key={value}
            value={value}
            onClick={handleClick}
            selected={value === activeValue}
            classNames={classNames?.button}
          />
        ))}
      </div>

      {tabs.find(({ value }) => value === activeValue)?.component}
    </div>
  );
};

export default memo(TabsContainer);
