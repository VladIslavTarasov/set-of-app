import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    input: ({ theme, borderColor }: { theme: Theme; borderColor: string }) => ({
      flex: '1 1 100%',
      padding: theme.offsets.xs,
      border: `1px solid ${borderColor || theme.palette.common.gray}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.fontSize.sm,
      transition: theme.transition.xs,

      '&:focus': {
        borderColor: borderColor || theme.palette.common.black,
      },
    }),
    inputError: ({ theme }: { theme: Theme }) => ({
      borderColor: theme.palette.error.dark,
    }),
  },
  { name: 'Input' }
);
