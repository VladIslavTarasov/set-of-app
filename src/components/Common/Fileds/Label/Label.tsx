import React, { memo } from 'react';

import cn from 'classnames';

import { useTheme } from 'theme/theme';

import { useStyles } from './Label.styles';

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
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <label {...props} htmlFor={name} className={cn(classes.label, classNames)}>
      <span>{title}</span>
      {children}
      {touched && error && <span className={classes.errorText}>{error}</span>}
    </label>
  );
};

export default memo(Label);
