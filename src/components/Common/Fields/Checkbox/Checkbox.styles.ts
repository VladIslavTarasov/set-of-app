import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    labelChecbox: {
      flexDirection: 'row',
      alignItems: 'center',

      '> span': {
        marginBottom: '0',
      },
    },
    checkbox: ({ theme }: { theme: Theme }) => ({
      marginRight: theme.offsets.sm,
    }),
  },
  { name: 'Checkbox' }
);
