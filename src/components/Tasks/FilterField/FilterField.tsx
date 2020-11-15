import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { MdClear } from 'react-icons/md';

import Button from 'components/Common/Button';
import { Input } from 'components/Common/Fileds';

import style from './FilterField.module.scss';

interface FilterFieldProps {
  onChange: (e: React.ChangeEvent<{ value: string }>, value: string) => void;
  onReset: () => void;
  showButton: boolean;
}

const FilterField: React.FC<FilterFieldProps> = ({ onChange, onReset, showButton }) => {
  const { t } = useTranslation(['tasks', 'buttons']);

  const handleChange = useCallback(
    (e: React.ChangeEvent<{ value: string }>) => {
      onChange(e, e.target.value);
    },
    [onChange]
  );

  return (
    <form className={style.form} onReset={onReset}>
      <Input
        maxLength={15}
        classNames={style.input}
        placeholder={t('filter')}
        type="text"
        name="filter"
        onChange={handleChange}
      />
      {showButton && (
        <Button
          type="reset"
          mode="icon"
          size="sm"
          title={t('buttons:reset')}
          className={style.reset}
        >
          <MdClear />
        </Button>
      )}
    </form>
  );
};

export default memo(FilterField);
