import React, { memo } from 'react';

import cn from 'classnames';

import style from './Textarea.module.scss';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  touched?: boolean;
  error?: string;
}

const Textarea: React.FC<TextareaProps> = ({ name, touched, error, ...props }) => {
  return (
    <textarea
      {...props}
      name={name}
      className={cn(style.textarea, {
        [style.inputError]: touched && error,
      })}
    />
  );
};

export default memo(Textarea);
