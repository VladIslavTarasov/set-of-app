import { useCallback, useEffect, RefObject } from 'react';

type UseClickOutside = (element: RefObject<HTMLElement>, callback: () => void) => void;

export const useClickOutside: UseClickOutside = (element, callback) => {
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
