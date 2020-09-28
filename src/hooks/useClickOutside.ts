import { useCallback, useEffect, RefObject } from 'react';

export const useClickOutside = (element: RefObject<HTMLElement>, callback: () => void) => {
  const clickOutSide = useCallback(
    e => {
      if (element.current && !element.current.contains(e.target)) {
        callback();
      }
    },
    [callback, element]
  );

  useEffect(() => {
    window.addEventListener('click', clickOutSide);
    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, [clickOutSide]);
};
