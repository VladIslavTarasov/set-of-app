import { Theme } from '../types/theme.types';
import common from './common';

const yellowTheme: Theme = {
  ...common,
  palette: {
    ...common.palette,
    primary: {
      ...common.palette.primary,
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
  },
};

export default yellowTheme;
