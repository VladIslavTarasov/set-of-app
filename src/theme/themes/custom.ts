import { Theme } from '../types/theme.types';
import common from './common';

const customTheme = (custom: { main: string; dark: string; light: string }): Theme => ({
  ...common,
  palette: {
    ...common.palette,
    primary: {
      ...common.palette.primary,
      ...custom,
    },
  },
});

export default customTheme;
