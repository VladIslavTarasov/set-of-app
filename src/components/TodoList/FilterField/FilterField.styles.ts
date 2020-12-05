import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    form: ({ theme }: { theme: Light }) => ({
      position: 'relative',
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.offsets.sm,
      margin: '0 auto',
    }),
    input: ({ theme }: { theme: Light }) => ({
      width: '100%',
      textAlign: 'center',
      padding: `${theme.offsets.sm} ${theme.offsets.xl} ${theme.offsets.sm} ${theme.offsets.sm}`,
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
