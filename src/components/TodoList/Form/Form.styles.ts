import { createUseStyles } from 'react-jss';

import { Light } from 'styles/light.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme }: { theme: Light }) => ({
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: theme.palette.common.black,
    }),
    formWrapper: ({ theme }: { theme: Light }) => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '80%',
      maxWidth: 600,
      padding: `${theme.offsets.xl} ${theme.offsets.md} ${theme.offsets.md}`,
      backgroundColor: theme.palette.common.white,
      borderRadius: theme.borderRadius.md,
      transform: 'translate(-50%, -50%)',
    }),
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    close: {
      position: 'absolute',
      top: '12px',
      right: '12px',
    },
    label: ({ theme }: { theme: Light }) => ({
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.offsets.md,

      '&:last-child': {
        marginBottom: '0',
      },

      '&:hover': {
        cursor: 'pointer',
      },

      '& > span': {
        marginBottom: theme.offsets.xs,
        fontSize: theme.fontSize.xs,
      },
    }),
    labelChecbox: {
      flexDirection: 'row',
      alignItems: 'center',

      '& > span': {
        marginBottom: '0',
      },
    },
    input: ({ theme }: { theme: Light }) => ({
      flex: '1 1 100%',
      padding: theme.offsets.xs,
      border: `1px solid ${theme.palette.common.black}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.fontSize.sm,
      transition: theme.transition.xs,

      '&:focus': {
        borderColor: theme.palette.common.black,
      },
    }),
    textarea: ({ theme }: { theme: Light }) => ({
      minHeight: '80px',
      flex: '1 1 100%',
      padding: theme.offsets.xs,
      border: `2px solid ${theme.palette.common.black}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.offsets.sm,
      resize: 'none',
      transition: theme.transition.xs,

      '&:focus': {
        borderColor: theme.palette.common.black,
      },
    }),
    checkbox: ({ theme }: { theme: Light }) => ({
      marginRight: theme.offsets.sm,
    }),
    inputError: ({ theme }: { theme: Light }) => ({
      borderColor: theme.palette.error.dark,
    }),
    errorText: ({ theme }: { theme: Light }) => ({
      marginTop: theme.offsets.xs,
      color: theme.palette.error.dark,
    }),
  },
  { name: 'TasksForm' }
);
