// eslint-disable-next-line
export const throttle = (func: Function, ms: number): ((...args: any[]) => void) => {
  let isThrottled = false;

  // eslint-disable-next-line
  return (...args: any[]): void => {
    if (!isThrottled) {
      func(...args);

      isThrottled = true;

      window.setTimeout(() => {
        isThrottled = false;
      }, ms);
    }
  };
};
