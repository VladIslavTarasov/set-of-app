import i18n from 'i18next';

import en from 'locales/en';

const locales = {
  en,
};

i18n.init({
  debug: process.env.NODE_ENV === 'development',
  lng: 'en',
  fallbackLng: 'en',
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  resources: locales,
  ns: ['common'],
  defaultNS: 'common',
});
