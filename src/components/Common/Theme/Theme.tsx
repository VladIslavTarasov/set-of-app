import React, { createContext, useMemo, useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Common/Loader';
import { getPallete } from 'store/palette/palette.actions';
import { getSlice } from 'store/palette/palette.selectors';
import { ResponseStatuses } from 'store/types';
import { ThemeProvider } from 'theme/theme';
import themes, { PaletteNames, palettesValues } from 'theme/themes';
import { setColorTheme, getColorTheme } from 'utils/localStorage';

export const ThemeSwitcherContext = createContext<
  [PaletteNames, React.Dispatch<React.SetStateAction<PaletteNames>>]
>(null!);

const Theme: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const {
    palette,
    createPaletteRequestStatus,
    editPaletteRequestStatus,
    getPaletteRequestStatus,
  } = useSelector(getSlice);
  const [activeTheme, setTheme] = useState<PaletteNames>(null!);

  useEffect(() => {
    dispatch(getPallete());
  }, [dispatch]);

  useEffect(() => {
    if (getPaletteRequestStatus === ResponseStatuses.SUCCESS) {
      const theme = getColorTheme();
      const hasValue = !!theme && palettesValues.includes(theme);

      if ((!theme && !hasValue) || (!palette && theme === 'custom')) {
        setColorTheme('blue');
        setTheme('blue');
        return;
      }

      if (hasValue) {
        setTheme(theme as PaletteNames);
      }
    }
  }, [setTheme, palette, getPaletteRequestStatus]);

  const loading =
    [editPaletteRequestStatus, createPaletteRequestStatus].includes(ResponseStatuses.UNCALLED) &&
    getPaletteRequestStatus === ResponseStatuses.PENDING;

  const theme = useMemo(() => {
    if (!activeTheme) return themes.blue;

    return activeTheme === 'custom' && palette ? themes.custom(palette) : themes[activeTheme];
  }, [activeTheme, palette]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitcherContext.Provider value={[activeTheme, setTheme]}>
        {loading && <Loader size="lg" mode="circle" />}
        <div hidden={!activeTheme || loading}>{children}</div>
      </ThemeSwitcherContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
