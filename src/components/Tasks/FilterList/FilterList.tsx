import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { MdClear } from 'react-icons/md';

import Button from 'components/Button';

import style from './FilterList.module.scss';

interface FiterListProps {
  onChange: (e: React.ChangeEvent<{ value: string }>, value: string) => void;
  onReset: () => void;
  showButton: boolean;
}

const FiterList: React.FC<FiterListProps> = ({ onChange, onReset, showButton }) => {
  const { t } = useTranslation(['tasks', 'buttons']);

  const handleChange = (e: React.ChangeEvent<{ value: string }>) => {
    onChange(e, e.target.value);
  };

  return (
    <form className={style.form} onReset={onReset}>
      <input
        maxLength={15}
        className={style.input}
        placeholder={t('filter')}
        type="text"
        id="filter"
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

export default memo(FiterList);
