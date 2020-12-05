import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { MdClear } from 'react-icons/md';

import Button from 'components/Common/Button';
import { Input } from 'components/Common/Fileds';
import { useTheme } from 'styles/theme';

import { useStyles } from './FilterField.styles';

interface FilterFieldProps {
  onChange: (e: React.ChangeEvent<{ value: string }>, value: string) => void;
  onReset: () => void;
  showButton: boolean;
  disabled?: boolean;
}

const FilterField: React.FC<FilterFieldProps> = ({ onChange, onReset, showButton, disabled }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation(['tasks', 'buttons']);

  const handleChange = useCallback(
    (e: React.ChangeEvent<{ value: string }>) => {
      onChange(e, e.target.value);
    },
    [onChange]
  );

  return (
    <form className={classes.form} onReset={onReset}>
      <Input
        maxLength={15}
        classNames={classes.input}
        disabled={!!disabled}
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
          className={classes.reset}
        >
          <MdClear />
        </Button>
      )}
    </form>
  );
};

export default memo(FilterField);
