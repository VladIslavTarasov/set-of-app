import React, { memo } from 'react';

import cn from 'classnames';

import { useTheme } from 'theme/theme';

import { useStyles } from './Textarea.styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  touched?: boolean;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, touched, error, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <textarea
      {...props}
      id={name}
      name={name}
      className={cn(classes.textarea, {
        [classes.inputError]: touched && error,
      })}
    />
  );
};

export default memo(Textarea);
