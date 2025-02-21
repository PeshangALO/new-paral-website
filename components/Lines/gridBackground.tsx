'use client'
import React, { useRef, useState, useEffect, useMemo } from 'react';

interface AnimatedGridBackgroundProps {
  lineColor?: string;
  glowColor?: string;
  lineSpacing?: number;
  dotSize?: number;
  animationDuration?: number;
  dotCount?: number;
  parallaxFactor?: number;
  parallaxDirection?: 'horizontal' | 'vertical' | 'diagonal';
  layerCount?: number;
  depthFactor?: number;
  mouseSensitivity?: number;
}

interface Path {
  start: { x: number; y: number };
  end: { x: number; y: number };
  delay: number;
  speed: number;
  opacity: number;
  size: number;
}

interface Layer {
  paths: Path[];
  depth: number;
  parallaxMultiplier: number;
}

// Wrap the main component in a client-side only wrapper
const Lines: React.FC<AnimatedGridBackgroundProps> = ({
  lineColor = '#000000',
  glowColor = '#000000',
  lineSpacing = 40,
  dotSize = 2,
  animationDuration = 20,
  dotCount = 8,
  parallaxFactor = 10,
  parallaxDirection = 'diagonal',
  layerCount = 2,
  depthFactor = 0.1,
  mouseSensitivity = 5
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isMounted, setIsMounted] = useState(false);

  // Only run client-side code after mount
  useEffect(() => {
    setIsMounted(true);
    
    // Initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  // Device detection - only runs client-side
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, [isMounted]);

  // Settings adjusted for mobile
  const settings = useMemo(() => ({
    dotCount: isMobile ? Math.min(6, dotCount) : dotCount,
    layerCount: isMobile ? Math.min(2, layerCount) : layerCount,
    lineSpacing: isMobile ? lineSpacing * 1.5 : lineSpacing,
    animationDuration: isMobile ? animationDuration * 1.2 : animationDuration,
    parallaxFactor: isMobile ? parallaxFactor * 0.5 : parallaxFactor
  }), [isMobile, dotCount, layerCount, lineSpacing, animationDuration, parallaxFactor]);

  // Window resize handler
  useEffect(() => {
    if (!isMounted) return;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [isMounted]);

  // Generate layers
  const layers = useMemo(() => {
    if (dimensions.width <= 0 || dimensions.height <= 0) return [];
    
    const generateLayer = (depth: number): Layer => {
      const depthScale = 1 - (depth * depthFactor);
      const layerDotCount = Math.floor(settings.dotCount * depthScale);
      const layerSpacing = settings.lineSpacing * (depthScale * 0.8 + 0.2);
      
      const paths: Path[] = Array.from({ length: layerDotCount }, (_, i) => {
        const isHorizontal = i % 3 === 0;
        const isVertical = i % 3 === 1;
        
        let start, end;
        if (isHorizontal) {
          const y = Math.random() * dimensions.height;
          start = { x: 0, y };
          end = { x: dimensions.width, y };
        } else if (isVertical) {
          const x = Math.random() * dimensions.width;
          start = { x, y: 0 };
          end = { x, y: dimensions.height };
        } else {
          start = { x: 0, y: Math.random() * dimensions.height };
          end = { x: dimensions.width, y: Math.random() * dimensions.height };
        }

        return {
          start,
          end,
          delay: Math.random() * settings.animationDuration,
          speed: 0.5 + Math.random() * 1.5,
          opacity: 0.2 + Math.random() * 0.8,
          size: dotSize * (0.5 + Math.random() * 0.5) * depthScale
        };
      });

      return {
        paths,
        depth,
        parallaxMultiplier: depthScale * 2
      };
    };

    return Array.from(
      { length: settings.layerCount },
      (_, i) => generateLayer(i / (settings.layerCount - 1))
    );
  }, [dimensions, settings, depthFactor, dotSize]);

  // Mouse/touch movement handler
  useEffect(() => {
    if (!isMounted || !settings.parallaxFactor) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches?.[0]) {
        setMousePosition({
          x: e.touches[0].clientX / window.innerWidth,
          y: e.touches[0].clientY / window.innerHeight
        });
      }
    };

    if (isMobile) {
      window.addEventListener('touchmove', handleTouchMove);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isMounted, settings.parallaxFactor, isMobile]);

  // Set ready state
  useEffect(() => {
    if (layers.length > 0 && !isReady) {
      setIsReady(true);
    }
  }, [layers, isReady]);

  // Don't render anything during SSR
  if (!isMounted) {
    return null;
  }

  // Don't render if dimensions aren't set
  if (dimensions.width === 0 || dimensions.height === 0) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 transition-opacity duration-1000 overflow-hidden"
      style={{ 
        opacity: isReady ? 1 : 0
      }}
    >
      {layers.map((layer, layerIndex) => {
        const offset = {
          x: parallaxDirection !== 'vertical' ? 
            (mousePosition.x - 0.5) * 2 * settings.parallaxFactor * layer.parallaxMultiplier * mouseSensitivity : 0,
          y: parallaxDirection !== 'horizontal' ? 
            (mousePosition.y - 0.5) * 2 * settings.parallaxFactor * layer.parallaxMultiplier * mouseSensitivity : 0
        };

        return (
          <svg
            key={`layer-${layerIndex}`}
            className="absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
              transition: isMobile ? 'transform 0.4s ease-out' : 'transform 0.2s ease-out'
            }}
          >
            {layer.paths.map((path, i) => (
              <g key={`dot-${layerIndex}-${i}`}>
                <line
                  x1={path.start.x}
                  y1={path.start.y}
                  x2={path.end.x}
                  y2={path.end.y}
                  stroke={lineColor}
                  strokeWidth={0.1}
                />
                <circle
                  r={path.size}
                  fill={glowColor}
                >
                  <animate
                    attributeName="cx"
                    from={path.start.x}
                    to={path.end.x}
                    dur={`${settings.animationDuration / path.speed}s`}
                    repeatCount="indefinite"
                    begin={`${path.delay}s`}
                  />
                  <animate
                    attributeName="cy"
                    from={path.start.y}
                    to={path.end.y}
                    dur={`${settings.animationDuration / path.speed}s`}
                    repeatCount="indefinite"
                    begin={`${path.delay}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur={`${settings.animationDuration / path.speed}s`}
                    repeatCount="indefinite"
                    begin={`${path.delay}s`}
                  />
                </circle>
              </g>
            ))}
          </svg>
        );
      })}
    </div>
  );
};

export default Lines;
