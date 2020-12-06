import React, { createContext, useState, useEffect } from 'react';

import { ThemeProvider } from 'theme/theme';
import themes, { PaletteNames, palettesValues } from 'theme/themes';

export const ThemeSwitcherContext = createContext<
  [PaletteNames, React.Dispatch<React.SetStateAction<PaletteNames>>]
>(null!);

const Theme: React.FC = ({ children }) => {
  const [activeTheme, setTheme] = useState<PaletteNames>(null!);

  useEffect(() => {
    const palette = window.localStorage.getItem('palette');
    const hasPalette = !!palette && palettesValues.includes(palette);

    if (!palette || !hasPalette) {
      window.localStorage.setItem('palette', 'blue');
      setTheme('blue');
      return;
    }

    if (hasPalette) {
      setTheme(palette as PaletteNames);
    }
  }, [setTheme]);

  return (
    <ThemeProvider theme={themes[activeTheme]}>
      <ThemeSwitcherContext.Provider value={[activeTheme, setTheme]}>
        {activeTheme && children}
      </ThemeSwitcherContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
