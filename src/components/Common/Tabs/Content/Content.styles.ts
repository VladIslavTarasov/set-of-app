import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    wrapper: ({ theme }: { theme: Light }) => ({
      wrapper: {
        boxSizing: 'border-box',
        padding: theme.offsets.sm,
        color: theme.palette.common.white,
      },
    }),
  },
  { name: 'TabsContent' }
);
