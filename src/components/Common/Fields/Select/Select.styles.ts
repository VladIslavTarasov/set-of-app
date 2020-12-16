import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: {
      position: 'relative',
    },
    list: ({ theme }: { theme: Theme }) => ({
      position: 'absolute',
      zIndex: theme.zIndex.modal,
      backgroundColor: theme.palette.common.white,
      top: -12,
      left: -24,
      minWidth: 150,
      maxWidth: 300,
      maxHeight: 200,
      padding: 0,
      borderRadius: theme.borderRadius.sm,
      boxShadow: theme.shadows.xs,
      overflowX: 'hidden',
      overflowY: 'auto',
      scrollPaddingRight: 10,

      '&::-webkit-scrollbar': {
        width: 4,
      },

      '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.common.gray,
        borderRadius: theme.borderRadius.sm,
      },
    }),
  },
  { name: 'Select' }
);
