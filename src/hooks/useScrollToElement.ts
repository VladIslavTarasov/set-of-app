import { useState, useEffect, useCallback } from 'react';

import { debounce } from 'utils/debounce';

type UseScrollToElement = (element: React.RefObject<HTMLElement>) => [boolean, () => void];

export const useScrollToElement: UseScrollToElement = element => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const scrollTo = useCallback(() => {
    if (element.current) {
      element.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  }, [element]);

  const onScroll = useCallback(
    debounce(() => {
      if (element.current) {
        const { height, top } = element.current.getBoundingClientRect();

        setShowBackToTop(() => top + height < 0);
      }
    }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return [showBackToTop, scrollTo];
};
