import { useCallback, useEffect, RefObject } from 'react';

type UseClickOutside = (
  element: RefObject<HTMLElement>,
  callback: () => void,
  permission?: boolean
) => void;

export const useClickOutside: UseClickOutside = (element, callback, permission) => {
  const clickOutSide = useCallback(
    e => {
      if (element.current && !element.current.contains(e.target)) {
        permission && callback();
      }
    },
    [callback, permission, element]
  );

  useEffect(() => {
    window.addEventListener('click', clickOutSide);
    return () => {
      window.removeEventListener('click', clickOutSide);
    };
  }, [clickOutSide]);
};
