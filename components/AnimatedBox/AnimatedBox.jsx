'use client'
import React, { useEffect, useState, useRef } from 'react';

const AnimatedBox = ({ children, fillColor = '#F7F7F2', transitionDuration = 1500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
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
  }, []);

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

export default AnimatedBox