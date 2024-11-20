import { useEffect, useRef } from "react";
import debounce from "lodash/debounce";

export function useInfiniteScrollObserver(
  callback: () => void,
  isActive: boolean
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const debouncedCallback = debounce(() => {
      if (isActive) {
        callbackRef.current();
      }
    }, 200);

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          debouncedCallback();
        }
      },
      { rootMargin: "500px" }
    );

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => {
      observer.current?.disconnect();
      debouncedCallback.cancel();
    };
  }, [isActive]);

  return sentinelRef;
}
