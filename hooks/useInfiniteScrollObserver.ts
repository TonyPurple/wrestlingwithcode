import { useEffect, useRef } from "react";

export function useInfiniteScrollObserver(
  callback: () => void,
  isActive: boolean
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && isActive) {
          callback();
        }
      },
      { rootMargin: "100px" }
    );

    if (sentinelRef.current) {
      observer.current.observe(sentinelRef.current);
    }

    return () => observer.current?.disconnect();
  }, [callback, isActive]);

  return sentinelRef;
}
