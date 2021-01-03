import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    calendar: ({ theme, maxWidth }: { theme: Theme; maxWidth: number }) => ({
      maxWidth: maxWidth || '100%',
      minWidth: maxWidth || '100%',
      alignSelf: 'flex-start',
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.borderRadius.sm,
      boxShadow: theme.shadows.xs,
      transition: 'box-shadow 0.3s',

      '&:hover': {
        boxShadow: theme.shadows.sm,
      },
    }),
  },
  { name: 'Calendar' }
);
