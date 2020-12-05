import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import cn from 'classnames';

import { useTheme } from 'styles/theme';

import Button from '../Button';
import { TabsContentProps } from '../Content/Content';
import { useStyles } from './Container.styles';

export interface TabsContainerProps {
  active: string;
  pannel?: JSX.Element;
  onChange?: (e: React.MouseEvent, value: string) => void;
  classNames?: {
    container?: string;
    tablist?: string;
    button?: string;
    content?: string;
  };
}

const TabsContainer: React.FC<TabsContainerProps> = ({
  children,
  active,
  pannel,
  onChange,
  classNames,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const [activeValue, setActiveValue] = useState<string>(active);

  useEffect(() => {
    if (active) setActiveValue(active);
  }, [active]);

  const handleClick = useCallback(
    (e: React.MouseEvent, value: string) => {
      onChange?.(e, value);

      setActiveValue(value);
    },
    [onChange]
  );

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
    <div className={cn(classes.container, classNames?.container)}>
      <div className={classes.tablist} role="tablist">
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

      {pannel}
      {tabs.find(({ value }) => value === activeValue)?.component}
    </div>
  );
};

export default memo(TabsContainer);
