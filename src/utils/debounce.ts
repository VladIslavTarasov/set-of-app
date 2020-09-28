export const debounce = (
  func: (...args: any[]) => void,
  ms: number
): ((...args: any[]) => void) => {
  let timer: NodeJS.Timeout;

  return function (...args: any[]): void {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), ms);
  };
};
