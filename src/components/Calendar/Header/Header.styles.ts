import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    header: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      padding: theme.offsets.sm,
      borderBottom: `2px solid ${theme.palette.common.gray}`,
      backgroundColor: theme.palette.primary.light,
      margin: `0 0 ${theme.offsets.md}px`,
      fontSize: theme.fontSize.xl,
    }),
    separator: () => ({
      width: 10,
    }),
    title: ({ theme }: { theme: Theme }) => ({
      fontSize: theme.fontSize.lg,
      padding: `${theme.offsets.sm}px 0`,
      color: theme.palette.common.white,
      alightSelf: 'flexStart',
    }),
    month: ({ theme }: { theme: Theme }) => ({
      display: 'flex',
      justifyContent: 'center',
      minWidth: 250,
      margin: `0 ${theme.offsets.sm}px`,
    }),
    arrows: ({ theme }: { theme: Theme }) => ({
      padding: `${theme.offsets.sm}px 0`,
      marginLeft: 'auto',
    }),
  },
  { name: 'Header' }
);
