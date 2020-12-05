import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    container: () => ({
      display: 'flex',
      alignItem: 'flex-start',
    }),
    todolist: ({ theme }: { theme: Light }) => ({
      flexGrow: 1,
      marginLeft: theme.offsets.sm,
    }),
  },
  { name: 'TodoListContainer' }
);
