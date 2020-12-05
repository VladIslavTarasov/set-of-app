import { Light } from './light.types';

const lightTheme: Light = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 20,
    lg: 24,
    xl: 32,
  },
  palette: {
    common: {
      black: '#222',
      white: '#fff',
      gray: '#e5e5e5',
    },
    primary: {
      light: '#4791db',
      main: '#1976d2',
      dark: '#115293',
    },
    white: 'rgba(255, 255, 255, 1)',
    red: 'red',
    red2: 'rgba(255, 0, 0, 0.2)',
    gray: 'gray',
    gray1: 'rgba(59, 62, 241, 0.1)',
    black: 'black',
    black05: 'rgba(0, 0, 0, 0.05)',
    black1: 'rgba(0, 0, 0, 0.1)',
    black2: 'rgba(0, 0, 0, 0.2)',
    black3: 'rgba(0, 0, 0, 0.3)',
    green1: 'green',
    green2: 'rgba(64, 255, 46, 0.2)',
    green3: 'rgba(60, 140, 47, 1)',
    green4: 'rgba(60, 140, 47, 0.6)',
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
    xs: 0.3,
  },
};

export default lightTheme;
