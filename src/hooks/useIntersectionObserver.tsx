import { useEffect, useRef, useState } from 'react';

type Callback = () => void;

export default function useIntersectionObserver(
  callback: Callback,
  isLoading: boolean
): [(element: Element | null) => void, (element: Element | null) => void] {
  const observer = useRef<IntersectionObserver | null>(null);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isLoading && entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1, rootMargin: '100px' }
    );

    if (element) {
      observer.current.observe(element);
    }
  }, [callback, isLoading, element]);

  const observe = (element: Element | null) => {
    setElement(element);
  };

  const unobserve = (element: Element | null) => {
    if (observer.current && element) {
      observer.current.unobserve(element);
    }
  };

  return [observe, unobserve];
}
