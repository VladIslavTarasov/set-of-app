import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    list: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '0',
      marginTop: theme.offsets.xs,
      marginRight: -8,
    }),
    tasksLoading: ({ theme }: { theme: Theme }) => ({
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
