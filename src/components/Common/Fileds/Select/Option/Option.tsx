import React, { memo, useRef, useEffect } from 'react';

import cn from 'classnames';

import { useTheme } from 'theme/theme';

import { Option as OptionType } from '../Select';
import { useStyles } from './Option.styles';

interface OptionProps {
  option: OptionType;
  value: string;
  onChange: (value: OptionType) => void;
}

const Option: React.FC<OptionProps> = ({ onChange, option, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const ref = useRef<HTMLLIElement>(null);
  const selected = option.value === value;

  const handleClick = () => {
    onChange(option);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onChange(option);
    }
  };

  useEffect(() => {
    if (selected) {
      ref.current?.scrollIntoView({ block: 'center' });
      ref.current?.focus();
    }
  }, [selected]);

  return (
    <li
      ref={ref}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={cn(classes.item, { [classes.selected]: selected })}
      title={option.title}
      role="option"
      aria-selected={selected}
      tabIndex={0}
    >
      {option.title}
    </li>
  );
};

export default memo(Option);
