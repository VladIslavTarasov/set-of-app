import { Theme } from '../types/theme.types';
import common from './common';

const redTheme: Theme = {
  ...common,
  palette: {
    ...common.palette,
    primary: {
      ...common.palette.primary,
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
    },
  },
};

export default redTheme;
