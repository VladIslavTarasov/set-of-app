import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

type Props = {
  theme: Theme;
  transparent: boolean;
  fs: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white';
};

export const useStyles = createUseStyles(
  {
    button: ({ theme, transparent, fs, color }: Props) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: transparent ? 0 : '0.75rem',
      border: transparent ? 'none' : `2px solid ${theme.palette.primary.main}`,
      backgroundColor: transparent ? 'transparent' : theme.palette.primary.light,
      borderRadius: theme.borderRadius.sm,
      transition: theme.transition.xs,
      fontSize: theme.fontSize[fs],
      textTransform: 'uppercase',
      color: theme.palette.common[color || 'white'],

      '&:focus,  &:hover': {
        backgroundColor: transparent ? 'transparent' : theme.palette.primary.main,
      },

      '&:active': {
        backgroundColor: transparent ? 'transparent' : theme.palette.primary.main,
      },

      '&:hover': {
        '&:disabled': {
          cursor: 'not-allowed',
        },
      },
    }),
    icon: ({ theme }: { theme: Theme }) => ({
      borderRadius: theme.borderRadius.circle,
    }),
    link: {
      padding: '0',
      border: 'none',

      '&:focus,  &:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
      },
    },
    fullWidth: {
      width: '100%',
    },
    resetMargin: {
      margin: '0',
    },
  },
  { name: 'Button' }
);
