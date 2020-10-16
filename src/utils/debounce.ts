// eslint-disable-next-line
type Debounce = (func: Function, ms: number) => (...args: any[]) => void;

export const debounce: Debounce = (func, ms) => {
  let timer: number;

  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), ms);
  };
};
