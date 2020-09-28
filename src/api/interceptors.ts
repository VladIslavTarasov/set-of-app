import { AxiosError, AxiosResponse } from 'axios';

export const responseError = (response: AxiosResponse) => {
  if (!response.data.success) {
    const error: AxiosError<{ code: string }> = {
      response,
      code: response.data.error,
      isAxiosError: true,
      config: response.config,
      message: response.statusText,
      name: 'FAILURE',
      toJSON: () => ({ name: 'FAILURE' }),
    };
    return Promise.reject(error);
  }

  return response;
};
