import React, { useMemo, useRef, memo } from 'react';

import cn from 'classnames';
import { useFormik } from 'formik';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { AiOutlineClose } from 'react-icons/ai';
import * as Yup from 'yup';

import Button from 'components/Button';
import { useClickOutside } from 'hooks';
import { Task } from 'store/tasks/tasks.types';

import style from './Form.module.scss';

export interface TaskFormFields {
  title: string;
  description: string;
  important: boolean;
}

const initial = {
  title: '',
  description: '',
  important: false,
};

export interface FormProps {
  task?: Task | null;
  mode: 'create' | 'edit';
  onSubmit: (values: TaskFormFields) => void;
  loading?: boolean;
  onClose: () => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, onClose, mode, task, loading }) => {
  const { t } = useTranslation(['tasks', 'buttons', 'errorMessages']);
  const divElement = useRef<HTMLDivElement>(null);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape<Omit<TaskFormFields, 'important'>>({
        title: Yup.string().required(t('errorMessages:required')),
        description: Yup.string().required(t('errorMessages:required')),
      }),
    [t]
  );

  const formik = useFormik<TaskFormFields>({
    initialValues:
      mode === 'edit' && task
        ? {
            title: task.title,
            description: task.description.reduce((a, b, i) => `${a}${i ? '\n' : ''}${b}`, ''),
            important: task.important,
          }
        : initial,
    validationSchema,
    onSubmit,
  });

  useClickOutside(divElement, onClose);

  return createPortal(
    <section className={style.container}>
      <div ref={divElement} className={style.formWrapper}>
        <Button onClick={onClose} type="button" className={style.close} mode="icon">
          <AiOutlineClose />
        </Button>

        <form onSubmit={formik.handleSubmit} className={style.form}>
          <label htmlFor="title" className={style.label}>
            <span>{t('formTitle')}</span>
            <input
              name="title"
              id="title"
              type="text"
              maxLength={40}
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={cn(style.input, {
                [style.inputError]: formik.touched.title && formik.errors.title,
              })}
            />
            {formik.touched.title && formik.errors.title && (
              <span className={style.errorText}>{formik.errors.title}</span>
            )}
          </label>

          <label htmlFor="description" className={style.label}>
            <span>{t('formDescription')}</span>
            <textarea
              name="description"
              id="description"
              maxLength={250}
              value={formik.values.description}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={cn(style.textarea, {
                [style.inputError]: formik.touched.description && formik.errors.description,
              })}
            />
            {formik.touched.description && formik.errors.description && (
              <span className={style.errorText}>{formik.errors.description}</span>
            )}
          </label>

          <label htmlFor="important" className={cn(style.label, style.labelChecbox)}>
            <input
              name="important"
              id="important"
              type="checkbox"
              checked={formik.values.important}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={style.checkbox}
            />
            <span>{t('formCheckbox')}</span>
          </label>

          <Button type="submit" disabled={loading} loading={loading}>
            {t('buttons:submit')}
          </Button>
        </form>
      </div>
    </section>,
    document.body
  );
};

export default memo(Form);
