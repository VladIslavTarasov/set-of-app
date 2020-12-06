import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    button: ({ theme }: { theme: Theme }) => ({
      minWidth: 150,
      boxSizing: 'border-box',
      padding: theme.offsets.sm,
      borderBottom: '2px solid transparent',
      backgroundColor: 'transparent',
      color: theme.palette.common.gray,
      fontSize: theme.fontSize.sm,
      textAlign: 'center',
      transition: theme.transition.xs,

      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.dark,
        borderBottom: `2px solid ${theme.palette.primary.dark}`,
        textDecoration: 'underline',
      },
    }),
    selected: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.primary.main,
      borderBottom: `2px solid ${theme.palette.primary.dark}`,
      color: theme.palette.common.white,
    }),
  },
  { name: 'TabsButton' }
);
