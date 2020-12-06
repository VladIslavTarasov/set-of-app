import { Theme } from '../types/theme.types';
import common from './common';

const redTheme: Theme = {
  ...common,
  palette: {
    common: {
      black: '#222',
      white: '#fff',
      gray: '#e5e5e5',
    },
    primary: {
      button: {
        light: '#fff',
        main: '#eee',
        dark: '#bbb',
      },
      bg: '#fff',
      border: '#fef',
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
  },
};

export default redTheme;
