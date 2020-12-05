import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme }: { theme: Light }) => ({
      width: '100%',
      backgroundColor: theme.palette.common.gray,
    }),
    header: {
      width: '100%',
      minHeight: 60,
    },
    footer: {},
    main: ({ theme }: { theme: Light }) => ({
      position: 'relative',
      width: '100%',
      maxWidth: 1440,
      minHeight: '100vh',
      padding: `0 ${theme.offsets.sm}`,
      margin: '0 auto',
    }),
  },
  { name: 'MainLayout' }
);
