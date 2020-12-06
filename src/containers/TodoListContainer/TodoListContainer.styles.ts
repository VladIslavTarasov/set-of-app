import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: () => ({
      display: 'flex',
      alignItem: 'flex-start',
    }),
    todolist: ({ theme }: { theme: Theme }) => ({
      flexGrow: 1,
      marginLeft: theme.offsets.sm,
    }),
    formWrapper: ({ theme }: { theme: Theme }) => ({
      margin: `${theme.offsets.md}px 0px`,
      display: 'flex',
      justifyContent: 'center',
    }),
  },
  { name: 'TodoListContainer' }
);
