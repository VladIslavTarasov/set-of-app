import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    header: ({
      theme,
      showHeader,
      transparent,
    }: {
      theme: Theme;
      showHeader: boolean;
      transparent: boolean;
    }) => ({
      position: 'fixed',
      zIndex: 1,
      top: showHeader ? 0 : -60,
      opacity: transparent ? 0.5 : 1,
      right: 0,
      left: 0,
      height: 60,
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.light,
      transition: theme.transition.xs,
    }),
    wrapper: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      padding: `0 ${theme.offsets.md2}px`,
      boxSizing: 'border-box',
      maxWidth: 1440,
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: '0 auto',
    }),
    title: ({ theme }: { theme: Theme }) => ({
      fontSize: theme.fontSize.xl,
    }),
    switchers: {
      display: 'flex',
      alignItems: 'center',
    },
  },
  { name: 'CommonHeader' }
);
