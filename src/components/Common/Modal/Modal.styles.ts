import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme }: { theme: Theme }) => ({
      position: 'fixed',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: theme.palette.primary.dark,
    }),
    modal: ({ theme }: { theme: Theme }) => ({
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: '50%',
      left: '50%',
      overflow: 'hidden',
      minWidth: 400,
      maxWidth: 600,
      boxSizing: 'border-box',
      padding: `${theme.offsets.sm}px ${theme.offsets.md}px`,
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.borderRadius.md,
      boxShadow: theme.shadows.xs,
      transform: 'translate(-50%, -50%)',
    }),
    header: ({ theme }: { theme: Theme }) => ({
      padding: theme.offsets.md,
      margin: `-${theme.offsets.sm}px -${theme.offsets.md}px 0`,
      backgroundColor: theme.palette.primary.main,
    }),
    title: ({ theme }: { theme: Theme }) => ({
      padding: '0',
      margin: '0',
      fontSize: theme.fontSize.xl,
      fontWeight: 600,
    }),
    content: ({ theme }: { theme: Theme }) => ({
      margin: theme.offsets.md,
    }),
    text: ({ theme }: { theme: Theme }) => ({
      padding: '0',
      margin: '0',
      fontSize: theme.fontSize.sm,
      fontWeight: 400,

      '&:not(:first-child)': {
        marginBottom: theme.offsets.xs,
      },
    }),
  },
  { name: 'Modal' }
);
