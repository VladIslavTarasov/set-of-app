import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme }: { theme: Theme }) => ({
      width: '100%',
      backgroundColor: theme.palette.common.gray,
    }),
    header: {
      width: '100%',
      minHeight: 60,
    },
    footer: {},
    main: ({ theme }: { theme: Theme }) => ({
      boxSizing: 'border-box',
      position: 'relative',
      width: '100%',
      maxWidth: 1440,
      minHeight: 'calc(100vh - 80px)',
      padding: `0 ${theme.offsets.sm}px`,
      margin: '0 auto',
    }),
  },
  { name: 'MainLayout' }
);
