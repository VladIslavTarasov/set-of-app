import React, { memo } from 'react';

import Input from '../Input';
import Label from '../Label';
import style from './Checkbox.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  checked: boolean;
  title: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, title, name, ...props }) => {
  return (
    <Label name={name} classNames={style.labelChecbox}>
      <Input
        {...props}
        name={name}
        id={name}
        type="checkbox"
        checked={checked}
        classNames={style.checkbox}
      />
      <span>{title}</span>
    </Label>
  );
};

export default memo(Checkbox);
