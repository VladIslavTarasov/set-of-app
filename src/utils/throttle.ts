export const throttle = (func: Function, ms: number): ((...args: any[]) => void) => {
  let isThrottled: boolean = false;

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
