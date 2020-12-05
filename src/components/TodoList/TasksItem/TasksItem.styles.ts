import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    content: ({ theme }: { theme: Light }) => ({
      display: 'flex',
      overflow: 'hidden',
      flexDirection: 'column',
      flexGrow: 1,
      transition: theme.transition.xs,
    }),
    show: {
      height: '100%',
      maxHeight: '300px',
    },
    reset: {
      '& .ql-toolbar': {
        display: 'none',
      },
    },
    hide: {
      maxHeight: 50,
    },
    titleWrapper: {
      display: 'flex',
    },
    title: ({ theme }: { theme: Light }) => ({
      overflow: 'hidden',
      maxWidth: '300px',
      margin: `0 ${theme.offsets.sm} ${theme.offsets.sm}`,
      fontSize: theme.fontSize.lg,
      textOverflow: 'ellipsis',
    }),
    paragraph: ({ theme }: { theme: Light }) => ({
      marginBottom: theme.offsets.xxs,
      fontSize: theme.fontSize.sm,

      '&:last-child': {
        marginBottom: '0',
      },
    }),
  },
  { name: 'TasksItem' }
);
