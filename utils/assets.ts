export const getAssetPath = (path: string) => {
  const customDomain = 'https://paral.no'; // Your custom domain

  if (path.startsWith('http') || path.startsWith('https')) {
    return path; // If the path is already a full URL, return it as is
  }

  return `${customDomain}${path}`; // Prepend the custom domain
};
