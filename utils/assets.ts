export const getAssetPath = (path: string) => {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/test-website' : '';
    if (path.startsWith('http') || path.startsWith('https')) {
      return path;
    }
    return `${baseUrl}${path}`;
  };