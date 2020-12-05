import React, { memo } from 'react';

import cn from 'classnames';

import { useTheme } from 'styles/theme';

import { useStyles } from './Button.styles';

interface ButtonProps {
  onClick: (e: React.MouseEvent, value: string) => void;
  value: string;
  selected: boolean;
  classNames?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value, selected, classNames, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleChange = (e: React.MouseEvent) => {
    if (!selected) onClick(e, value);
  };

  return (
    <button
      onClick={handleChange}
      className={cn(classes.button, { [classes.selected]: selected }, classNames)}
      type="button"
      role="tab"
      aria-selected={selected}
      {...props}
    >
      {value}
    </button>
  );
};

export default memo(Button);
