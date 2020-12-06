import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    backToStart: ({ theme }: { theme: Theme }) => ({
      position: 'fixed',
      zIndex: -1,
      right: 50,
      bottom: 50,
      opacity: 0,
      transition: theme.transition.xs,
    }),
    show: ({ theme }: { theme: Theme }) => ({
      zIndex: theme.zIndex.modal,
      opacity: 1,
    }),
  },
  { name: 'ScrollButton' }
);
