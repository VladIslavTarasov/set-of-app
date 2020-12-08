import { Theme } from '../types/theme.types';
import common from './common';

const blueTheme: Theme = {
  ...common,
  palette: {
    ...common.palette,
    primary: {
      ...common.palette.primary,
      light: '#4791db',
      main: '#1976d2',
      dark: '#115293',
    },
  },
};

export default blueTheme;
