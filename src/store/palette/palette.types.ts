import { ResponseStatuses } from 'store/types';

export interface Palette {
  dark: string;
  main: string;
  light: string;
}

export interface State {
  readonly palette: Palette | null;
  readonly getPaletteRequestStatus: ResponseStatuses;
  readonly createPaletteRequestStatus: ResponseStatuses;
  readonly editPaletteRequestStatus: ResponseStatuses;
}

export const SET_PALETTE = 'PALETTE/SET_PALETTE';

export type SetPaletteAction = {
  type: typeof SET_PALETTE;
  payload: Palette;
};

export type SetPaletteActionCreator = (status: Palette) => SetPaletteAction;

export const GET_PALETTE = 'PALETTE/GET_PALETTE';

export type GetPaletteAction = {
  type: typeof GET_PALETTE;
};

export type GetPaletteActionCreator = () => GetPaletteAction;

export const GET_PALETTE_REQUEST_STATUS = 'PALETTE/GET_PALETTE_REQUEST_STATUS';

export type GetPaletteRequestStatusAction = {
  type: typeof GET_PALETTE_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type GetPaletteRequestStatusActionCreator = (
  status: ResponseStatuses
) => GetPaletteRequestStatusAction;

export const CREATE_PALETTE = 'PALETTE/CREATE_PALETTE';

export type CreatePaletteAction = {
  type: typeof CREATE_PALETTE;
  payload: Palette;
};

export type CreatePaletteActionCreator = (palette: Palette) => CreatePaletteAction;

export const CREATE_PALETTE_REQUEST_STATUS = 'PALETTE/CREATE_PALETTE_REQUEST_STATUS';

export type CreatePaletteRequestStatusAction = {
  type: typeof CREATE_PALETTE_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type CreatePaletteRequestStatusActionCreator = (
  status: ResponseStatuses
) => CreatePaletteRequestStatusAction;

export const EDIT_PALETTE = 'PALETTE/EDIT_PALETTE';

export type EditPaletteAction = {
  type: typeof EDIT_PALETTE;
  payload: Palette;
};

export type EditPaletteActionCreator = (palette: Palette) => EditPaletteAction;

export const EDIT_PALETTE_REQUEST_STATUS = 'PALETTE/EDIT_PALETTE_REQUEST_STATUS';

export type EditPaletteRequestStatusAction = {
  type: typeof EDIT_PALETTE_REQUEST_STATUS;
  payload: ResponseStatuses;
};

export type EditPaletteActionRequestStatusCreator = (
  palette: ResponseStatuses
) => EditPaletteRequestStatusAction;

export type Actions =
  | SetPaletteAction
  | GetPaletteAction
  | GetPaletteRequestStatusAction
  | CreatePaletteAction
  | CreatePaletteRequestStatusAction
  | EditPaletteAction
  | EditPaletteRequestStatusAction;
