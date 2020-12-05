import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
    },
    tablist: ({ theme }: { theme: Light }) => ({
      position: 'relative',
      display: 'flex',
      overflow: 'hidden',
      boxSizing: 'border-box',
      flexWrap: 'nowrap',
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.borderRadius.sm,
      boxShadow: theme.shadows.xs,
    }),
  },
  { name: 'TabsContainer' }
);
