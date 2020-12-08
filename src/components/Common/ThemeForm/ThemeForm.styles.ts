import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    form: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.lg,
      boxSizing: 'border-box',
      padding: theme.offsets.md2,
    }),
    submit: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.lg,
    }),
    openForm: ({ theme }: { theme: Theme }) => ({
      width: 35,
      height: 35,
      border: `2px solid ${theme.palette.common.gray}`,
      backgroundColor: theme.palette.common.black,
      borderRadius: theme.borderRadius.md2,
      marginLeft: theme.offsets.xs,

      '&:hover, &:focus': {
        cursor: 'pointer',
        borderColor: theme.palette.common.white,
      },
    }),
  },
  { name: 'ThemeForm' }
);
