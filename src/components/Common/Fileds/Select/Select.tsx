import React, { memo, useState, useCallback, useRef } from 'react';

import Button from 'components/Common/Button';
import { useClickOutside } from 'hooks';

import Option from './Option';
import style from './Select.module.scss';

export type Option = { value: string; title: string };

interface SelectProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const divElement = useRef<HTMLDivElement>(null);
  const [open, toogle] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    toogle(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    toogle(false);
  }, []);

  const handldeChange = useCallback(
    (val: Option) => {
      toogle(prev => !prev);
      onChange(val.value);
    },
    [onChange]
  );

  useClickOutside(divElement, handleClose);

  return (
    <div ref={divElement} className={style.container}>
      <Button onClick={handleClick} type="button" size="lg" mode="link">
        {value}
      </Button>
      {open && Boolean(options.length) && (
        <ul className={style.list} role="listbox">
          {options.map(option => (
            <Option key={option.value} onChange={handldeChange} value={value} option={option} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Select);
