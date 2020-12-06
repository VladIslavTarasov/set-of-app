import React, { memo } from 'react';

import cn from 'classnames';

import { useTheme } from 'theme/theme';

import { useStyles } from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  touched?: boolean;
  error?: string;
  classNames?: string;
}

const Input: React.FC<InputProps> = ({ name, touched, error, classNames, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
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
