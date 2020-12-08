import React, { memo, useState, useCallback, useMemo } from 'react';

import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { MdCreate } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import Button from 'components/Common/Button';
import Drawer from 'components/Common/Drawer';
import { createPalette, editPallete, setPallete } from 'store/palette/palette.actions';
import { getSlice } from 'store/palette/palette.selectors';
import { Palette } from 'store/palette/palette.types';
import { useTheme } from 'theme/theme';

import Slider from './Slider';
import { useStyles } from './ThemeForm.styles';

interface ThemeFormProps {}

interface ThemeForm extends Palette {}

const initial = {
  dark: '',
  main: '',
  light: '',
};

const fileds = Object.keys(initial) as ['dark', 'main', 'light'];

const ThemeForm: React.FC<ThemeFormProps> = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation(['errorMessages', 'buttons', 'palette']);
  const { palette } = useSelector(getSlice);
  const dispatch = useDispatch();

  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleOpenForm = useCallback(() => {
    setOpenForm(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpenForm(false);
  }, []);

  const validationSchema = useMemo(
    () =>
      Yup.object().shape<ThemeForm>({
        dark: Yup.string().required(t('required')),
        main: Yup.string().required(t('required')),
        light: Yup.string().required(t('required')),
      }),
    [t]
  );

  const handleSubmit = useCallback(
    (values: ThemeForm) => {
      dispatch(setPallete(values));
      dispatch(palette ? editPallete(values) : createPalette(values));
      setOpenForm(false);
    },
    [dispatch, palette]
  );

  const formik = useFormik<ThemeForm>({
    initialValues: palette || initial,
    initialTouched: Object.keys(initial).reduce((a, c) => ({ ...a, [c]: true }), {}),
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <button
        title={t(`palette:${palette ? 'edit' : 'create'}`)}
        type="button"
        className={classes.openForm}
        onClick={handleOpenForm}
      >
        <MdCreate color="white" fontSize="20" />
      </button>
      <Drawer open={openForm} onClose={handleClose}>
        {openForm && (
          <form onSubmit={formik.handleSubmit} className={classes.form}>
            {fileds.map(field => (
              <Slider
                key={field}
                name={field}
                color={formik.values[field]}
                error={formik.errors[field] || ''}
                onChange={formik.handleChange}
              />
            ))}
            <Button type="submit" className={classes.submit}>
              {t(`palette:${palette ? 'edit' : 'create'}`)}
            </Button>
          </form>
        )}
      </Drawer>
    </>
  );
};

export default memo(ThemeForm);
