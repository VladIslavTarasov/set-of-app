import React from 'react';

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import AppRouter from 'router/AppRouter';
import store from 'store';
import lightTheme from 'styles/light';
import { ThemeProvider } from 'styles/theme';

import 'locales/init';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={lightTheme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
