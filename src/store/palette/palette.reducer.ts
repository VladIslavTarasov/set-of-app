import { ResponseStatuses } from 'store/types';

import * as palleteTypes from './palette.types';

export const initial: palleteTypes.State = {
  palette: null,
  getPaletteRequestStatus: ResponseStatuses.UNCALLED,
  createPaletteRequestStatus: ResponseStatuses.UNCALLED,
  editPaletteRequestStatus: ResponseStatuses.UNCALLED,
};

const paletteReducer = (
  state: palleteTypes.State = initial,
  action: palleteTypes.Actions
): palleteTypes.State => {
  switch (action.type) {
    case palleteTypes.SET_PALETTE:
      return { ...state, palette: action.payload };
    case palleteTypes.GET_PALETTE_REQUEST_STATUS:
      return { ...state, getPaletteRequestStatus: action.payload };
    case palleteTypes.CREATE_PALETTE_REQUEST_STATUS:
      return { ...state, createPaletteRequestStatus: action.payload };
    case palleteTypes.EDIT_PALETTE_REQUEST_STATUS:
      return { ...state, editPaletteRequestStatus: action.payload };
    default:
      return state;
  }
};

export default paletteReducer;
