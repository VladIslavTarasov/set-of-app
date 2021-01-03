import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    content: ({ theme }: { theme: Theme }) => ({
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
    title: ({ theme }: { theme: Theme }) => ({
      overflow: 'hidden',
      maxWidth: '300px',
      margin: `0 ${theme.offsets.sm}px ${theme.offsets.sm}px`,
      fontSize: theme.fontSize.lg,
      textOverflow: 'ellipsis',
    }),
    paragraph: ({ theme }: { theme: Theme }) => ({
      marginBottom: theme.offsets.xxs,
      fontSize: theme.fontSize.sm,

      '&:last-child': {
        marginBottom: '0',
      },
    }),
    task: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      boxSizing: 'border-box',
      flex: '1 1 100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: theme.offsets.sm,
      backgroundColor: theme.palette.primary.light,
      border: `2px solid ${theme.palette.primary.main}`,
      marginRight: theme.offsets.sm,
      marginBottom: theme.offsets.sm,
      borderRadius: theme.borderRadius.md,
      boxShadow: theme.shadows.xs,
      transition: theme.transition.xs,

      '&:hover': {
        boxShadow: theme.shadows.sm,
      },
    }),
    complete: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.success.light,
      border: `2px solid ${theme.palette.success.main}`,
    }),
    important: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.error.light,
      border: `2px solid ${theme.palette.error.main}`,
    }),
  },
  { name: 'TasksItem' }
);
