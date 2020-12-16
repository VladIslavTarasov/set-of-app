import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    item: ({ theme }: { theme: Theme }) => ({
      overflow: 'hidden',
      padding: `${theme.offsets.xs}px ${theme.offsets.sm}px`,
      color: theme.palette.common.black,
      fontSize: theme.fontSize.sm,
      textOverflow: 'ellipsis',
      transition: theme.transition.xs,
      whiteSpace: 'nowrap',

      '&:focus,  &:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.gray,
        cursor: 'pointer',
      },

      '&:first-child': {
        marginTop: theme.offsets.xs,
      },

      '&:last-child': {
        marginBottom: theme.offsets.xs,
      },
    }),
    selected: ({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,

      '&:focus,  &:hover': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        cursor: 'pointer',
      },
    }),
  },
  { name: 'Option' }
);
