
import { useState, useEffect, RefObject } from 'react';

interface InViewOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useInView(
  elementRef: RefObject<HTMLElement>,
  options: InViewOptions = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  const { threshold = 0.1, rootMargin = '0px', once = true } = options;

  useEffect(() => {
    const element = elementRef.current;
    
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, threshold, rootMargin, once]);

  return isInView;
}
