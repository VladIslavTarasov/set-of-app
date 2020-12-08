import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    label: ({ theme, uppercase }: { theme: Theme; uppercase: boolean }) => ({
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.offsets.md,

      '&:last-child': {
        marginBottom: '0',
      },

      '&:hover': {
        cursor: 'pointer',
      },

      '& > span:first-child': {
        marginBottom: theme.offsets.xs,
        fontSize: theme.fontSize.sm,
        color: theme.palette.common.black,
        textTransform: uppercase ? 'uppercase' : 'none',
      },
    }),
    errorText: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.xs,
      color: theme.palette.error.dark,
    }),
  },
  { name: 'Label' }
);
