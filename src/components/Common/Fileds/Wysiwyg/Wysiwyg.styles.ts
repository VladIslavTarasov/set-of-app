import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme }: { theme: Theme }) => ({
      marginBottom: theme.offsets.sm,
      '& .ql-toolbar.ql-snow, & .ql-container.ql-snow': {
        borderColor: theme.palette.primary.main,
        borderRadius: theme.borderRadius.sm,
      },

      '& .ql-toolbar.ql-snow + .ql-container.ql-snow': {
        marginTop: theme.offsets.xs,
        borderTop: `1px solid ${theme.palette.primary.main}`,
      },

      '& .ql-editor': {
        minHeight: 150,
      },
    }),
    label: ({ theme }: { theme: Theme }) => ({
      marginBottom: theme.offsets.xs,
      fontSize: theme.fontSize.xs,
    }),
    errorText: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.xs,
      color: theme.palette.error.dark,
    }),
  },
  { name: 'Wysiwyg' }
);
