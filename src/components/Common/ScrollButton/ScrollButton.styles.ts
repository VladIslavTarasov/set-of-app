import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    backToStart: ({ theme }: { theme: Light }) => ({
      position: 'fixed',
      zIndex: -1,
      right: 50,
      bottom: 50,
      opacity: 0,
      transition: theme.transition.xs,
    }),
    show: ({ theme }: { theme: Light }) => ({
      zIndex: theme.zIndex.modal,
      opacity: 1,
    }),
  },
  { name: 'ScrollButton' }
);
