'use client';

import { useEffect } from 'react';

const sendConversion = (eventType?: string) => {
  fetch('/api/linkedin-conversion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ eventType }),
  }).catch(error => {
    console.error('Failed to send LinkedIn conversion:', error);
  });
};

export const trackLinkedInConversion = (eventType?: string) => {
  sendConversion(eventType);
};

export const LinkedInPageviewTracker = () => {
  useEffect(() => {
    // Send a page view conversion on initial load
    trackLinkedInConversion();
  }, []);

  return null; // This component does not render anything
};
