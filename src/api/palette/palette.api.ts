import client from 'api/client';
import { PalleteResponse } from 'api/palette/palette.types';
import { Palette } from 'store/palette/palette.types';

export const getPalette = () =>
  client.request<PalleteResponse>({
    method: 'GET',
    url: `/palette`,
  });

export const createPalette = (data: Palette) =>
  client.request<PalleteResponse>({
    method: 'POST',
    url: `/palette`,
    data,
  });

export const editPalette = (data: Palette) =>
  client.request<PalleteResponse>({
    method: 'PUT',
    url: `/palette`,
    data,
  });
