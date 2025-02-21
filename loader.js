export default function customImageLoader({ src }) {
  // Ensure src is a string
  const imageSrc = String(src || '');
  const customDomain = 'https://paral.no'; // Your custom domain

  // Handle absolute URLs
  if (imageSrc.startsWith('http://') || imageSrc.startsWith('https://')) {
    return imageSrc; // If it's already an absolute URL, return it
  }

  // Handle relative paths
  const path = imageSrc.startsWith('/') ? imageSrc : `/${imageSrc}`;
  return `${customDomain}${path}`; // Always prepend the custom domain
}
