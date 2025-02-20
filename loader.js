export default function customImageLoader({ src }) {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/test-website' : '';
    if (src.startsWith('http') || src.startsWith('https')) {
      return src;
    }
    return `${baseUrl}${src}`;
  }