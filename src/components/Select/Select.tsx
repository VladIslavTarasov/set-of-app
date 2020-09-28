import React, { memo, useState, useCallback, useRef } from 'react';

import Button from 'components/Button';
import { useClickOutside } from 'hooks/useClickOutside';

import Option from './Option';
import style from './Select.module.scss';

export type Option = { id: string; title: string } | string;

interface SelectProps {
  value: string;
  options: Option[];
  onChange: (value: Option) => void;
}

const Select: React.FC<SelectProps> = ({ value, options, onChange }) => {
  const divElement = useRef<HTMLDivElement>(null);
  const [open, toogle] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    toogle(prev => !prev);
  }, []);

  const handleClose = useCallback(() => {
    toogle(() => false);
  }, []);

  const handldeChange = useCallback(
    (val: Option) => {
      toogle(prev => !prev);
      onChange(val);
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
          {options.map((option, i) => (
            // eslint-disable-next-line
            <Option key={i} onChange={handldeChange} value={value} option={option} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default memo(Select);
