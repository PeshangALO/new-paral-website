export default function customImageLoader({ src }) {
    // Ensure src is a string
    const imageSrc = String(src || '');
    const baseUrl = process.env.NODE_ENV === 'production' ? '/test-website' : '';
    
    // Handle absolute URLs
    if (imageSrc.startsWith('http://') || imageSrc.startsWith('https://')) {
      return imageSrc;
    }
    
    // Handle relative paths
    const path = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
    return `${baseUrl}${path}`;
  }