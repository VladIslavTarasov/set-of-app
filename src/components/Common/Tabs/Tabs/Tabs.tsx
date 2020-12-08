import React, { memo, useCallback } from 'react';

import cn from 'classnames';

import { useTheme } from 'theme/theme';

import Button from '../Button';
import { useStyles } from './Tabs.styles';

export interface TabsContainerProps {
  children: React.ReactNode;
  values: string[];
  value: string;
  onChange: (e: React.MouseEvent, value: string) => void;
  classNames?: {
    container?: string;
    tablist?: string;
    button?: string;
    content?: string;
  };
}

const TabsContainer: React.FC<TabsContainerProps> = ({
  children,
  value: activeValue,
  values,
  onChange,
  classNames,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleClick = useCallback(
    (e: React.MouseEvent, value: string) => {
      onChange?.(e, value);
    },
    [onChange]
  );

  return (
    <div className={cn(classes.container, classNames?.container)}>
      <div className={classes.tablist} role="tablist">
        {values.map(value => (
          <Button
            key={value}
            value={value}
            onClick={handleClick}
            selected={value === activeValue}
            classNames={classNames?.button}
          />
        ))}
      </div>

      {children}
    </div>
  );
};

export default memo(TabsContainer);
