export interface Light {
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
      light: string;
      main: string;
      dark: string;
    };
    white: string;
    red: string;
    red2: string;
    gray: string;
    gray1: string;
    black: string;
    black05: string;
    black1: string;
    black2: string;
    black3: string;
    green1: string;
    green2: string;
    green3: string;
    green4: string;
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
    xs: number;
  };
}
