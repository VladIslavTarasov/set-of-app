import * as palettesTypes from 'store/palette/palette.types';
import { RootState } from 'store/types';

export const getSlice = (state: RootState): palettesTypes.State => state.palette;
