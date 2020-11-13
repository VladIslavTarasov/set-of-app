import React, { memo } from 'react';

import cn from 'classnames';

import style from './Label.module.scss';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  name: string;
  touched?: boolean;
  error?: string;
  title?: string;
  classNames?: string;
}

const Label: React.FC<LabelProps> = ({
  name,
  title,
  children,
  touched,
  error,
  classNames,
  ...props
}) => {
  return (
    <label {...props} htmlFor={name} className={cn(style.label, classNames)}>
      <span>{title}</span>
      {children}
      {touched && error && <span className={style.errorText}>{error}</span>}
    </label>
  );
};

export default memo(Label);
