"use client";
import React, { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    TidyCal?: {
      init: () => void;
    };
  }
}

const CalendlyEmbed = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: MutationObserver;
    let script: HTMLScriptElement;

    const initializeEmbed = () => {
      // Remove any existing script
      const existingScript = document.querySelector('script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }

      // Create and append new script
      script = document.createElement("script");
      script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
      script.async = true;

      script.onload = () => {
        setIsScriptLoaded(true);
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          if (window.TidyCal) {
            window.TidyCal.init();
          }
        }, 100);
      };

      document.body.appendChild(script);
    };

    // Initialize immediately
    initializeEmbed();

    // Set up observer to watch for container visibility
    if (containerRef.current) {
      observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            const element = mutation.target as HTMLElement;
            if (element.style.display !== 'none') {
              // Container is visible, reinitialize
              initializeEmbed();
            }
          }
        });
      });

      observer.observe(containerRef.current, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
      setIsScriptLoaded(false);
    };
  }, []);

  return (
    <div ref={containerRef} className="tidycal-embed" data-path="gunnar2/30-minute-meeting">
      {!isScriptLoaded && (
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
};

export default CalendlyEmbed;
