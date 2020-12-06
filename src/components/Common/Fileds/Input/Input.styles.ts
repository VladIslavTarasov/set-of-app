import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    input: ({ theme }: { theme: Theme }) => ({
      flex: '1 1 100%',
      padding: theme.offsets.xs,
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.fontSize.sm,
      transition: theme.transition.xs,

      '&:focus': {
        borderColor: theme.palette.primary.dark,
      },
    }),
    inputError: ({ theme }: { theme: Theme }) => ({
      borderColor: theme.palette.error.dark,
    }),
  },
  { name: 'Input' }
);
