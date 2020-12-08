import { Common } from '../types/common.types';

const common: Common = {
  palette: {
    primary: {
      button: {
        light: '#fff',
        main: '#eee',
        dark: '#bbb',
      },
      bg: '#fff',
      border: '#fef',
    },
    common: {
      black: '#222',
      white: '#fff',
      gray: '#e5e5e5',
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
  fontSize: {
    xs: 12,
    sm: 14,
    md: 20,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    xs: 2,
    sm: 4,
    md: 8,
    md2: 12,
    circle: '50%',
  },
  offsets: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    md2: 24,
    lg: 32,
    xl: 48,
  },
  zIndex: {
    modal: 1000,
  },
  shadows: {
    xs: '0px 0px 4px 0 #222',
    sm: '0px 0px 8px 0 #222',
  },
  transition: {
    xs: '0.3s',
  },
};

export default common;
