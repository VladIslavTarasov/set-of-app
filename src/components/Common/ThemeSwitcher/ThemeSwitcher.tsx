import React, { memo, useContext } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ThemeSwitcherContext } from 'components/Common/Theme/Theme';
import { getSlice } from 'store/palette/palette.selectors';
import { useTheme } from 'theme/theme';
import { palettes, PaletteNames } from 'theme/themes';
import { setColorTheme } from 'utils/localStorage';

import ThemeForm from '../ThemeForm/ThemeForm';
import { useStyles } from './ThemeSwitcher.styles';

const ThemeSwitcher: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation('tasks');
  const [activeTheme, setTheme] = useContext(ThemeSwitcherContext);
  const { palette: customPallete } = useSelector(getSlice);

  const makeHandleClick = (value: PaletteNames) => () => {
    setTheme(value);
    setColorTheme(value);
  };

  return (
    <div className={classes.palettes}>
      {activeTheme &&
        palettes.map(palette => (
          <button
            key={palette.value}
            type="button"
            title={palette.color}
            aria-label={t('changeColor', { name: palette.value })}
            className={cn(classes.palette, {
              [classes.selected]: activeTheme === palette.value,
            })}
            style={{ backgroundColor: palette.color }}
            onClick={makeHandleClick(palette.value)}
          />
        ))}

      {customPallete && (
        <button
          type="button"
          title="custom"
          aria-label={t('changeColor', { name: 'custom' })}
          className={cn(classes.palette, {
            [classes.selected]: activeTheme === 'custom',
          })}
          style={{ backgroundColor: customPallete.main }}
          onClick={makeHandleClick('custom')}
        />
      )}

      <ThemeForm />
    </div>
  );
};

export default memo(ThemeSwitcher);
