import React, { memo } from 'react';

import cn from 'classnames';

import style from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  touched?: boolean;
  error?: string;
  classNames?: string;
}

const Input: React.FC<InputProps> = ({ name, value, touched, error, classNames, ...props }) => {
  return (
    <input
      {...props}
      name={name}
      id={name}
      className={cn(
        style.input,
        {
          [style.inputError]: touched && error,
        },
        classNames
      )}
    />
  );
};

export default memo(Input);
