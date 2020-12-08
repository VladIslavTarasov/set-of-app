import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    substrate: ({ theme }: { theme: Theme }) => ({
      height: '100vh',
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, .5)',
    }),
    wrapper: ({ theme, open }: { theme: Theme; open: boolean }) => ({
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      right: open ? 0 : -600,
      bottom: 0,
      height: '100vh',
      boxShadow: theme.shadows.sm,
      backgroundColor: theme.palette.primary.bg,
      width: 600,
      transition: theme.transition.xs,
    }),
    hide: {
      right: -600,
    },
    close: {
      position: 'absolute',
      top: '12px',
      right: '12px',
    },
  },
  { name: 'Drawer' }
);
