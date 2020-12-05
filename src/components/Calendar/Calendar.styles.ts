import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    calendar: ({ theme, maxWidth }: { theme: Light; maxWidth: number }) => ({
      maxWidth: maxWidth || '100%',
      alignSelf: 'flex-start',
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.borderRadius.sm,
      overflow: 'hidden',
      boxShadow: theme.shadows.xs,
      transition: 'box-shadow 0.3s',

      '&:hover': {
        boxShadow: theme.shadows.sm,
      },
    }),
  },
  { name: 'Calendar' }
);
