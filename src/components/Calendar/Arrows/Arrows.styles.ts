import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    wrapper: () => ({
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }),

    arrow: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.common.gray,
      maxWidth: 70,
      border: 'none',
      backgroundColor: 'transparent',
      fontSize: theme.fontSize.lg,
      transition: theme.transition.xs,

      '&:hover, &:focus': {
        color: theme.palette.common.black,
        cursor: 'pointer',
      },
    }),
  },
  { name: 'Arrows' }
);
