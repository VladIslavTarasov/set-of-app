interface Throttle {
  <T extends unknown>(func: Function, ms: number): (...args: T[]) => void;
}

export const throttle: Throttle = (func, ms) => {
  let isThrottled = false;

  return (...args) => {
    if (!isThrottled) {
      func(...args);

      isThrottled = true;

      window.setTimeout(() => {
        isThrottled = false;
      }, ms);
    }
  };
};
