import { ResponseStatuses } from 'store/types';

import * as paletteTypes from './palette.types';

export const setPallete: paletteTypes.SetPaletteActionCreator = (
  palette: paletteTypes.Palette
) => ({
  type: paletteTypes.SET_PALETTE,
  payload: palette,
});

export const getPallete: paletteTypes.GetPaletteActionCreator = () => ({
  type: paletteTypes.GET_PALETTE,
});

export const setGetPaletteRequestStatus: paletteTypes.GetPaletteRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: paletteTypes.GET_PALETTE_REQUEST_STATUS,
  payload: status,
});

export const createPalette: paletteTypes.CreatePaletteActionCreator = (
  palette: paletteTypes.Palette
) => ({
  type: paletteTypes.CREATE_PALETTE,
  payload: palette,
});

export const setCreateRequestStatus: paletteTypes.CreatePaletteRequestStatusActionCreator = (
  status: ResponseStatuses
) => ({
  type: paletteTypes.CREATE_PALETTE_REQUEST_STATUS,
  payload: status,
});

export const editPallete: paletteTypes.EditPaletteActionCreator = (
  palette: paletteTypes.Palette
) => ({
  type: paletteTypes.EDIT_PALETTE,
  payload: palette,
});

export const setEditPalleteRequestStatus: paletteTypes.EditPaletteActionRequestStatusCreator = (
  status: ResponseStatuses
) => ({
  type: paletteTypes.EDIT_PALETTE_REQUEST_STATUS,
  payload: status,
});
