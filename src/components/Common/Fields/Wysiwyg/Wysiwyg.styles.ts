import { createUseStyles } from 'react-jss';

import { Theme } from 'theme/types/theme.types';

export const useStyles = createUseStyles(
  {
    container: ({ theme, error }: { theme: Theme; error: boolean }) => ({
      marginBottom: theme.offsets.sm,
      '& .ql-toolbar.ql-snow, & .ql-container.ql-snow': {
        borderColor: error ? theme.palette.error.dark : theme.palette.common.gray,
        borderRadius: theme.borderRadius.sm,
      },

      '& .ql-toolbar.ql-snow + .ql-container.ql-snow': {
        marginTop: theme.offsets.xs,
        borderTop: `1px solid ${error ? theme.palette.error.dark : theme.palette.common.gray}`,
      },

      '& .ql-editor': {
        minHeight: 150,
      },
    }),
    label: ({ theme }: { theme: Theme }) => ({
      marginBottom: theme.offsets.xs,
      fontSize: theme.fontSize.sm,
    }),
    errorText: ({ theme }: { theme: Theme }) => ({
      marginTop: theme.offsets.xs,
      color: theme.palette.error.dark,
    }),
  },
  { name: 'Wysiwyg' }
);
