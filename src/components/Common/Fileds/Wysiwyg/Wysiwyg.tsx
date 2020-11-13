import React, { memo, useMemo, useRef, useCallback } from 'react';

import { renderToString } from 'react-dom/server';
import { MdUndo, MdRedo } from 'react-icons/md';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { modules, formats } from './Wysiwyg.config';
import style from './Wysiwyg.module.scss';

const icons = Quill.import('ui/icons');
icons.undo = renderToString(<MdUndo />);
icons.redo = renderToString(<MdRedo />);

interface WysiwygProps {
  value: string;
  label?: string;
  onChange: (value: string) => void;
  touched?: boolean;
  error?: string;
}

const Wysiwyg: React.FC<WysiwygProps> = ({ value, label, touched, error, onChange }) => {
  const quill = useRef<any>(null);

  const handleChange = useCallback(
    (html: string) => {
      onChange(html);
    },
    [onChange]
  );

  const quillModules = useMemo(
    () => ({
      ...modules,
      toolbar: {
        ...modules.toolbar,
        handlers: {
          undo: () => quill.current?.getEditor().history.undo(),
          redo: () => quill.current?.getEditor().history.redo(),
        },
      },
    }),
    []
  );

  return (
    <>
      <div className={style.container}>
        {label && <p className={style.label}>{label}</p>}
        <ReactQuill
          ref={quill}
          theme="snow"
          value={value}
          onChange={handleChange}
          modules={quillModules}
          formats={formats}
        />
      </div>
      {touched && error && <span className={style.errorText}>{error}</span>}
    </>
  );
};

export default memo(Wysiwyg);
