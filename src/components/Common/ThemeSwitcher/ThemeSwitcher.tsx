import React, { memo, useContext } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { useTheme } from 'theme/theme';
import { ThemeSwitcherContext } from 'theme/Theme';
import { palettes, PaletteNames } from 'theme/themes';

import { useStyles } from './ThemeSwitcher.styles';

const ThemeSwitcher: React.FC = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { t } = useTranslation('tasks');
  const [activeTheme, setTheme] = useContext(ThemeSwitcherContext);

  const makeHandleClick = (value: PaletteNames) => () => {
    setTheme(value);
    window.localStorage.setItem('palette', value);
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
    </div>
  );
};

export default memo(ThemeSwitcher);
