import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    '@keyframes loader': {
      '0%': {
        transform: 'rotate(0deg) scale(.8)',
      },

      '50%': {
        transform: 'rotate(360deg)  scale(1.2)',
      },

      '100%': {
        transform: 'rotate(720deg)  scale(0.8)',
      },
    },
    loader: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',

      '& > span': {
        animation: '$loader 2s infinite',
      },
    }),
  },
  { name: 'Loader' }
);
