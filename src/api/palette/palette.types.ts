export type CommonFailure = {
  success: false;
  error: string;
  body: null;
};

export type PalleteSuccessBody = {
  custom: Record<'dark' | 'main' | 'light', string>;
};

export type PalleteSuccess = {
  success: true;
  error: null;
  body: PalleteSuccessBody;
};

export type PalleteResponse = PalleteSuccess | CommonFailure;

export type NewTaskSuccess = {
  success: true;
  error: null;
  body: null;
};
