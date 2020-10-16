import React, { memo } from 'react';

import cn from 'classnames';

import style from './Button.module.scss';

interface ButtonProps {
  onClick: (e: React.MouseEvent, value: string) => void;
  value: string;
  selected: boolean;
  classNames?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, value, selected, classNames, ...props }) => {
  const handleChange = (e: React.MouseEvent) => {
    if (!selected) onClick(e, value);
  };

  return (
    <button
      onClick={handleChange}
      className={cn(style.button, { [style.selected]: selected }, classNames)}
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
