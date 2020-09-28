import React from 'react';

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';

import AppRouter from 'router/AppRouter';

import 'locales/init';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>
  );
};

export default App;
