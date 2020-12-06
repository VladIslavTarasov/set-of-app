import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    form: ({ theme }: { theme: Theme }) => ({
      position: 'relative',
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.offsets.sm,
      margin: '0 auto',
    }),
    input: ({ theme }: { theme: Theme }) => ({
      width: '100%',
      textAlign: 'center',
      padding: `${theme.offsets.sm}px ${theme.offsets.xl}px ${theme.offsets.sm}px ${theme.offsets.sm}px`,
      border: 'none',
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      fontSize: theme.fontSize.md,
    }),
    reset: {
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
    },
  },
  { name: 'FilterField' }
);
