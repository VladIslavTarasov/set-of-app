import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    field: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.md2,
      display: 'flex',
      alignItems: 'center',
      paddingBottom: theme.offsets.md2,
      borderBottom: `1px solid ${theme.palette.common.gray}`,
    }),
    label: ({ theme }: { theme: Theme }) => ({
      flexGrow: 1,
      marginRight: theme.offsets.sm,
    }),
    slider: {
      flexGrow: 3,
    },
  },
  { name: 'ThemeSlider' }
);
