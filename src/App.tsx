import React from 'react';

import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import Theme from 'components/Common/Theme/Theme';
import AppRouter from 'router/AppRouter';
import store from 'store';

import 'locales/init';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Theme>
          <AppRouter />
        </Theme>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
