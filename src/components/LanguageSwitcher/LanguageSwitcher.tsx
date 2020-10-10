import React, { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';

import Select from 'components/Select';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = useCallback(
    value => {
      i18n.changeLanguage(value);
      window.localStorage.setItem('language', value);
    },
    [i18n]
  );

  return <Select onChange={handleChange} value={i18n.language} options={i18n.languages} />;
};

export default memo(LanguageSwitcher);
