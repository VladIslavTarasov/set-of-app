import React, { memo } from 'react';

import cn from 'classnames';

import { useTheme } from 'theme/theme';

import { useStyles } from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  touched?: boolean;
  error?: string;
  classNames?: string;
  borderColor?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  touched,
  error,
  classNames,
  borderColor,
  ...props
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme, borderColor });
  return (
    <input
      {...props}
      name={name}
      id={name}
      className={cn(
        classes.input,
        {
          [classes.inputError]: touched && error,
        },
        classNames
      )}
    />
  );
};

export default memo(Input);
