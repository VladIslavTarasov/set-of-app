import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme }: { theme: Theme }) => ({
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      right: 0,
      bottom: 0,
      height: '100vh',
      boxShadow: theme.shadows.sm,
      backgroundColor: theme.palette.primary.bg,
      width: 600,

      '&::before': {
        content: "''",
        position: 'fixed',
        top: 0,
        right: 600,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, .5)',
      },
    }),
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
    close: {
      position: 'absolute',
      top: '12px',
      right: '12px',
    },
  },
  { name: 'TasksForm' }
);
