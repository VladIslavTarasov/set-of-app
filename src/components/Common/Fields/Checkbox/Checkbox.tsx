import React, { memo } from 'react';

import { useTheme } from 'theme/theme';

import Input from '../Input';
import Label from '../Label';
import { useStyles } from './Checkbox.styles';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  checked: boolean;
  title: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, title, name, ...props }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Label name={name} className={classes.labelChecbox}>
      <Input
        {...props}
        name={name}
        id={name}
        type="checkbox"
        checked={checked}
        classNames={classes.checkbox}
      />
      <span>{title}</span>
    </Label>
  );
};

export default memo(Checkbox);
