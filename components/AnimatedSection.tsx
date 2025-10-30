
import React, { useRef, useState, useEffect, ReactNode, useContext } from 'react';
import { ScrollContainerContext } from '../App';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutIdRef = useRef<number | null>(null);
  const scrollContainerRef = useContext(ScrollContainerContext);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);

        if (entry.isIntersecting) {
          timeoutIdRef.current = window.setTimeout(() => setIsVisible(true), delay);
        } else {
          setIsVisible(false);
        }
      }, { 
        root: scrollContainerRef?.current || null,
        threshold: 0.5 
      }
    );

    observer.observe(element);
    return () => {
      observer.unobserve(element);
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [delay, scrollContainerRef]);
  
  return (
    <div
      ref={ref}
      className={`${className || ''} transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
        {children}
    </div>
  );
};

export default AnimatedSection;
