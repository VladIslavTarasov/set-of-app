import i18n from 'i18next';

import en from 'locales/en';
import ru from 'locales/ru';

const locales = {
  en,
  ru,
};

i18n.init({
  debug: process.env.NODE_ENV === 'development',
  lng: window.localStorage.getItem('language') || 'en',
  fallbackLng: ['en', 'ru'],
  keySeparator: '.',
  interpolation: {
    escapeValue: false,
  },
  resources: locales,
  ns: ['common'],
  defaultNS: 'common',
});
