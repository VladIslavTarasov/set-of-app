import { ResponseStatuses } from 'store/types';

import paletteReducer, { initial } from '../palette.reducer';
import * as paletteTypes from '../palette.types';

const names = ['getPaletteRequestStatus', 'createPaletteRequestStatus', 'editPaletteRequestStatus'];

describe('palette.reducer', () => {
  it('SET_PALETTE', () => {
    const action = {
      type: paletteTypes.SET_PALETTE,
      payload: {
        main: 'color',
        dark: 'color',
        light: 'color',
      },
    } as paletteTypes.Actions;

    expect(paletteReducer(initial, action)).toEqual({
      ...initial,
      palette: action.payload as paletteTypes.Actions,
    });
  });

  it('GET_PALETTE', () => {
    const action = {
      type: paletteTypes.GET_PALETTE,
    } as paletteTypes.Actions;

    expect(paletteReducer(initial, action)).toEqual(initial);
  });

  it('SET_REQUEST_STATUS_PENDING', () => {
    const actions = [
      {
        type: paletteTypes.GET_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as paletteTypes.Actions,
      {
        type: paletteTypes.CREATE_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as paletteTypes.Actions,
      {
        type: paletteTypes.EDIT_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.PENDING,
      } as paletteTypes.Actions,
    ];

    actions.forEach((action, i) => {
      expect(paletteReducer(initial, action)).toEqual({
        ...initial,
        [names[i]]: action.payload as ResponseStatuses,
      });
    });
  });

  it('SET_REQUEST_STATUS_SUCCESS', () => {
    const actions = [
      {
        type: paletteTypes.GET_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as paletteTypes.Actions,
      {
        type: paletteTypes.CREATE_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as paletteTypes.Actions,
      {
        type: paletteTypes.EDIT_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.SUCCESS,
      } as paletteTypes.Actions,
    ];

    actions.forEach((action, i) => {
      expect(paletteReducer(initial, action)).toEqual({
        ...initial,
        [names[i]]: action.payload as ResponseStatuses,
      });
    });
  });

  it('SET_REQUEST_STATUS_FAILURE', () => {
    const actions = [
      {
        type: paletteTypes.GET_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as paletteTypes.Actions,
      {
        type: paletteTypes.CREATE_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as paletteTypes.Actions,
      {
        type: paletteTypes.EDIT_PALETTE_REQUEST_STATUS,
        payload: ResponseStatuses.FAILURE,
      } as paletteTypes.Actions,
    ];

    actions.forEach((action, i) => {
      expect(paletteReducer(initial, action)).toEqual({
        ...initial,
        [names[i]]: action.payload as ResponseStatuses,
      });
    });
  });
});
