import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    wrapper: ({ theme }: { theme: Theme }) => ({
      wrapper: {
        boxSizing: 'border-box',
        padding: theme.offsets.sm,
        color: theme.palette.common.white,
      },
    }),
  },
  { name: 'TabsContent' }
);
