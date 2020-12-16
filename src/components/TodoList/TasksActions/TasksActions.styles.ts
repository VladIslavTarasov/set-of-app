import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    actions: ({ theme }: { theme: Theme }) => ({
      display: 'flex',

      '& > button:not(:first-child)': {
        marginLeft: theme.offsets.sm,
      },
    }),
  },
  { name: 'TasksItemActions' }
);
