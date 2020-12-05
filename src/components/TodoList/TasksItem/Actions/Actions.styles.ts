import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    actions: ({ theme }: { theme: Light }) => ({
      display: 'flex',

      '& > button:not(:first-child)': {
        marginLeft: theme.offsets.sm,
      },
    }),
  },
  { name: 'TasksItemActions' }
);
