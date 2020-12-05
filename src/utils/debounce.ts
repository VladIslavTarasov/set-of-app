interface Debounce {
  <T extends unknown>(func: (...args: any[]) => void, ms: number): (...args: T[]) => void;
}

export const debounce: Debounce = (func, ms) => {
  let timer: number;

  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => func(...args), ms);
  };
};
