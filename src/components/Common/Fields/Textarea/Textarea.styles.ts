import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    textarea: ({ theme }: { theme: Theme }) => ({
      minHeight: '80px',
      flex: '1 1 100%',
      padding: theme.offsets.xs,
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.offsets.sm,
      resize: 'none',
      transition: theme.transition.xs,

      '&:focus': {
        borderColor: theme.palette.primary.dark,
      },
    }),
    inputError: ({ theme }: { theme: Theme }) => ({
      borderColor: theme.palette.error.dark,
    }),
  },
  { name: 'Textarea' }
);
