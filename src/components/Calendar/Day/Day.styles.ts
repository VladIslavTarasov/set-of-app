import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    '@keyframes buttonAnimation': {
      '0%': {
        transform: 'translate(-50%, -50%) scale(0.8)',
      },

      '50%': {
        transform: 'translate(-50%, -50%) scale(0.9)',
      },

      '100%': {
        transform: 'translate(-50%, -50%) scale(0.8)',
      },
    },
    button: ({ theme }: { theme: Theme }) => ({
      position: 'relative',
      width: 60,
      height: 60,
      padding: `${theme.offsets.md} 0px`,
      border: 'none',
      backgroundColor: 'transparent',
      color: theme.palette.common.gray,
      fontSize: theme.fontSize.lg,
      textAlign: 'center',

      '& > span': {
        position: 'relative',
        zIndex: 2,
      },

      '&::after': {
        content: "''",
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        borderRadius: theme.borderRadius.md,
        transform: 'translate(-50%, -50%) scale(0.7)',
        transition: theme.transition.xs,
      },

      '&:focus, &:hover': {
        color: theme.palette.common.white,
        '&::after': {
          borderRadius: theme.borderRadius.md2,
          backgroundColor: theme.palette.primary.light,
        },
      },

      '&:hover': {
        '&::after': {
          animation: '$buttonAnimation 4s infinite',
          cursor: 'pointer',
        },
      },

      '&:disabled': {
        '&::after': {
          cursor: 'wait',
        },
      },
    }),
    activeMonth: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.common.black,
    }),
    today: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.common.white,

      '&::after': {
        border: `1px solid ${theme.palette.common.gray}`,
        borderRadius: theme.borderRadius.md2,
        backgroundColor: theme.palette.primary.light,
        transform: 'translate(-50%, -50%) scale(0.8)',
      },
    }),
    choosen: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.common.white,

      '&::after': {
        backgroundColor: theme.palette.primary.main,
        borderRadius: theme.borderRadius.md2,
        transform: 'translate(-50%, -50%) scale(0.8)',
      },

      '&:hover, &:focus': {
        '&::after': {
          boxSizing: 'border-box',
          border: `1px solid ${theme.palette.common.gray}`,
          animation: 'none',
          backgroundColor: theme.palette.primary.main,
          transform: 'translate(-50%, -50%) scale(0.8)',
        },
      },
    }),
  },
  { name: 'Day' }
);
