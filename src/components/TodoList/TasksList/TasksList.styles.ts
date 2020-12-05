import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    ul: ({ theme }: { theme: Light }) => ({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '0',
      marginTop: theme.offsets.xs,
      marginRight: -8,
    }),
    li: ({ theme }: { theme: Light }) => ({
      display: 'flex',
      boxSizing: 'border-box',
      flex: '1 1 100%',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: theme.offsets.sm,
      backgroundColor: theme.palette.info.light,
      border: `2px solid ${theme.palette.info.main}`,
      marginRight: theme.offsets.sm,
      marginBottom: theme.offsets.sm,
      borderRadius: theme.borderRadius.md,
      boxShadow: theme.shadows.xs,
      transition: theme.transition.xs,

      '&:hover': {
        boxShadow: theme.shadows.sm,
      },
    }),
    complete: ({ theme }: { theme: Light }) => ({
      backgroundColor: theme.palette.success.light,
      border: `2px solid ${theme.palette.success.main}`,
    }),
    important: ({ theme }: { theme: Light }) => ({
      backgroundColor: theme.palette.error.light,
      border: `2px solid ${theme.palette.error.main}`,
    }),
    tasksLoading: ({ theme }: { theme: Light }) => ({
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: theme.palette.common.white,
      opacity: 0.3,
    }),
  },
  { name: 'TasksList' }
);
