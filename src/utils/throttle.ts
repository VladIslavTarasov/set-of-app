// eslint-disable-next-line
type Throttle = (func: Function, ms: number) => (...args: any[]) => void;

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
