import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    table: () => ({
      flexGrow: 1,
    }),
    row: {
      display: 'flex',
    },
    cell: () => ({
      flex: '1 1 calc(100% / 7)',
      position: 'relative',
      textAlign: 'center',
    }),
    hasEvent: ({ theme }: { theme: Theme }) => ({
      position: 'relative',

      '&::before': {
        content: "''",
        position: 'absolute',
        zIndex: 2,
        left: '50%',
        bottom: 10,
        width: 35,
        height: 5,
        boxSizing: 'border-box',
        transform: 'translateX(-50%)',
        backgroundColor: theme.palette.common.gray,
        borderRadius: theme.borderRadius.xs,
      },
    }),
  },
  { name: 'Month' }
);
