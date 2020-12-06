import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    palettes: {
      display: 'flex',
    },
    palette: ({ theme }: { theme: Theme }) => ({
      width: 35,
      height: 35,
      boxSizing: 'border-box',
      border: `2px solid ${theme.palette.common.gray}`,
      marginLeft: theme.offsets.xs,
      borderRadius: theme.borderRadius.md2,
      opacity: 0.8,

      '&:hover, &:focus': {
        cursor: 'pointer',
        opacity: 0.9,
        borderColor: theme.palette.common.white,
      },
    }),
    selected: ({ theme }: { theme: Theme }) => ({
      opacity: 1,
      border: `4px solid ${theme.palette.common.gray}`,
    }),
  },
  { name: 'ThemeSwitcher' }
);
