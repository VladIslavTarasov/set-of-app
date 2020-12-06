export const setColorTheme = (value: string) => {
  window.localStorage.setItem('colorTheme', value);
};

export const getColorTheme = (defaultValue?: string) => {
  return window.localStorage.getItem('colorTheme') || defaultValue;
};
