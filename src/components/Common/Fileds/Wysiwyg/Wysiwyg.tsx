import React, { memo, useMemo, useRef, useCallback } from 'react';

import { renderToString } from 'react-dom/server';
import { MdUndo, MdRedo } from 'react-icons/md';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useTheme } from 'theme/theme';

import { modules, formats } from './Wysiwyg.config';
import { useStyles } from './Wysiwyg.styles';

const icons = Quill.import('ui/icons');
icons.undo = renderToString(<MdUndo />);
icons.redo = renderToString(<MdRedo />);

interface WysiwygProps {
  value: string;
  label?: string;
  readonly?: boolean;
  onChange: (value: string) => void;
  touched?: boolean;
  error?: string;
}

const Wysiwyg: React.FC<WysiwygProps> = ({ value, label, touched, error, readonly, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const quill = useRef<any>(null);

  const handleChange = useCallback(
    (html: string) => {
      onChange(html);
    },
    [onChange]
  );

  const quillModules = useMemo(
    () => ({
      formats,
      modules: {
        ...modules,
        toolbar: {
          ...modules.toolbar,
          handlers: {
            undo: () => quill.current?.getEditor().history.undo(),
            redo: () => quill.current?.getEditor().history.redo(),
          },
        },
      },
    }),
    []
  );

  return (
    <>
      <div className={classes.container}>
        {label && <p className={classes.label}>{label}</p>}
        <ReactQuill
          ref={quill}
          theme="snow"
          value={value}
          onChange={handleChange}
          {...quillModules}
        />
      </div>
      {touched && error && <span className={classes.errorText}>{error}</span>}
    </>
  );
};

export default memo(Wysiwyg);
