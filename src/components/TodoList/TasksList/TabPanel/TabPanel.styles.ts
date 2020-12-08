import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    list: ({ theme, hidden }: { theme: Theme; hidden: boolean }) => ({
      display: hidden ? 'none' : 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '0',
      marginTop: theme.offsets.xs,
      marginRight: -8,
    }),
    paragraph: ({ hidden }) => ({ display: hidden ? 'none' : 'block' }),
  },
  { name: 'TabPanel' }
);
