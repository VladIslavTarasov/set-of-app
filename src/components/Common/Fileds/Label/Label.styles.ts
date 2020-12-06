import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    label: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.offsets.md,

      '&:last-child': {
        marginBottom: '0',
      },

      '&:hover': {
        cursor: 'pointer',
      },

      '& > span': {
        marginBottom: theme.offsets.xs,
        fontSize: theme.fontSize.xs,
      },
    }),
    errorText: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.xs,
      color: theme.palette.error.dark,
    }),
  },
  { name: 'Label' }
);
