import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    formWrapper: ({ theme }: { theme: Theme }) => ({
      width: '90%',
      height: '100%',
      maxWidth: 600,
      margin: `${theme.offsets.md2}px auto 0`,
      padding: `${theme.offsets.xl}px ${theme.offsets.md}px ${theme.offsets.md}px`,
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.borderRadius.md,
    }),
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  { name: 'TasksForm' }
);
