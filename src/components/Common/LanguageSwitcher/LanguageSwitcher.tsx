import React, { memo, useCallback, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { Select } from 'components/Common/Fileds';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = useCallback(
    value => {
      i18n.changeLanguage(value);
      window.localStorage.setItem('language', value);
    },
    [i18n]
  );

  const options = useMemo(() => {
    return i18n.languages.map(lang => ({ value: lang, title: lang }));
  }, [i18n]);

  return <Select onChange={handleChange} value={i18n.language} options={options} />;
};

export default memo(LanguageSwitcher);
