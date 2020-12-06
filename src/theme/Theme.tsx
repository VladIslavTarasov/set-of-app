import React, { createContext, useState, useEffect } from 'react';

import { ThemeProvider } from 'theme/theme';
import themes, { PaletteNames, palettesValues } from 'theme/themes';
import { setColorTheme, getColorTheme } from 'utils/localStorage';

export const ThemeSwitcherContext = createContext<
  [PaletteNames, React.Dispatch<React.SetStateAction<PaletteNames>>]
>(null!);

const Theme: React.FC = ({ children }) => {
  const [activeTheme, setTheme] = useState<PaletteNames>(null!);

  useEffect(() => {
    const theme = getColorTheme();
    const hasPalette = !!theme && palettesValues.includes(theme);

    if (!theme && !hasPalette) {
      setColorTheme('blue');
      setTheme('blue');
    }

    if (hasPalette) {
      setTheme(theme as PaletteNames);
    }
  }, [setTheme]);

  return (
    <>
      {activeTheme && (
        <ThemeProvider theme={themes[activeTheme]}>
          <ThemeSwitcherContext.Provider value={[activeTheme, setTheme]}>
            {children}
          </ThemeSwitcherContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
};

export default Theme;
