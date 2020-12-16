export interface Theme {
  fontSize: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  palette: {
    common: {
      black: string;
      white: string;
      gray: string;
    };
    primary: {
      button: {
        light: string;
        main: string;
        dark: string;
      };
      bg: string;
      border: string;
      light: string;
      main: string;
      dark: string;
    };
    success: {
      light: string;
      main: string;
      dark: string;
    };
    error: {
      light: string;
      main: string;
      dark: string;
    };
    info: {
      light: string;
      main: string;
      dark: string;
    };
  };
  borderRadius: {
    xs: number;
    sm: number;
    md: number;
    md2: number;
    circle: string;
  };
  offsets: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    md2: number;
    lg: number;
    xl: number;
  };
  zIndex: {
    modal: number;
  };
  shadows: {
    xs: string;
    sm: string;
  };
  transition: {
    xs: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}
