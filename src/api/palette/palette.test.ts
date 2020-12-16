import client from 'api/client';
import { Palette } from 'store/palette/palette.types';

import * as paletteApi from './palette.api';

describe('palette.api', () => {
  describe('getPalette', () => {
    it('getPalette successResponse', async () => {
      const successResponse = {};
      const requestStub = jest
        .spyOn(client, 'request')
        .mockImplementationOnce(() => Promise.resolve(successResponse));
      const result = await paletteApi.getPalette();

      expect(requestStub).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'GET',
          url: `/palette`,
        })
      );
      expect(result).toBe(successResponse);
    });
  });

  describe('createPalette', () => {
    it('createPalette successResponse', async () => {
      const successResponse = {};
      const requestStub = jest
        .spyOn(client, 'request')
        .mockImplementationOnce(() => Promise.resolve(successResponse));

      const data: Palette = {
        dark: 'color',
        main: 'color',
        light: 'color',
      };
      const result = await paletteApi.createPalette(data);

      expect(requestStub).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'POST',
          url: `/palette`,
          data,
        })
      );
      expect(result).toBe(successResponse);
    });
  });

  describe('editPalette', () => {
    it('editPalette successResponse', async () => {
      const successResponse = {};
      const requestStub = jest
        .spyOn(client, 'request')
        .mockImplementationOnce(() => Promise.resolve(successResponse));

      const data: Palette = {
        dark: 'color',
        main: 'color',
        light: 'color',
      };
      const result = await paletteApi.editPalette(data);

      expect(requestStub).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'PUT',
          url: `/palette`,
          data,
        })
      );
      expect(result).toBe(successResponse);
    });
  });
});
