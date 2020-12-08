import blue from './blue';
import custom from './custom';
import red from './red';
import yellow from './yellow';

export type PaletteNames = 'blue' | 'red' | 'yellow' | 'custom';

export const palettesValues = ['blue', 'red', 'yellow', 'custom'];
export const palettes: Array<{ value: PaletteNames; color: string }> = [
  { value: 'blue', color: blue.palette.primary.main },
  { value: 'red', color: red.palette.primary.main },
  { value: 'yellow', color: yellow.palette.primary.main },
];

export default {
  blue,
  red,
  yellow,
  custom,
};
