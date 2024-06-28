import { useFirstRender } from '@shared/lib/react';
import { Nullable } from '@shared/types/nullable';
import { useEffect, useLayoutEffect } from 'react';

export const useScrollToBottomByContainerRef = <T extends HTMLElement>(
  containerRef: React.MutableRefObject<Nullable<T>>,
  dependecies: unknown
) => {
  const isFirstRender = useFirstRender();

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.scrollTop =
      containerRef.current.scrollHeight - containerRef.current.clientHeight;
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    if (isFirstRender) return;

    containerRef.current.scrollBy({
      top:
        containerRef.current.scrollHeight - containerRef.current.clientHeight,
      behavior: 'smooth',
    });
  }, [dependecies]);
};
