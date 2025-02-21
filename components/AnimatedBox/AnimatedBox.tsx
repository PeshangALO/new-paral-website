'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimatedBoxProps {
  children: React.ReactNode;
  fillColor?: string;
  transitionDuration?: number;
}

export const AnimatedBox: React.FC<AnimatedBoxProps> = ({ 
  children, 
  fillColor = '#F7F7F2', 
  transitionDuration = 1500 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Handle mounting to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isMounted]);

  // During SSR or before hydration, render without animation
  if (!isMounted) {
    return (
      <span className="relative inline-block px-2 py-2">
        <span className="relative z-10">
          {children}
        </span>
      </span>
    );
  }

  return (
    <span ref={elementRef} className="relative inline-block px-2 py-2">
      <span 
        className="relative z-10 mix-blend-difference text-white"
      >
        {children}
      </span>
      <span 
        className="absolute inset-0 z-0 transition-all ease-in-out"
        style={{
          transitionDuration: `${transitionDuration}ms`,
          backgroundColor: fillColor,
          clipPath: `inset(0 ${isVisible ? 0 : 100}% 0 0)`
        }}
      />
    </span>
  );
};

export default AnimatedBox;