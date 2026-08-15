import { useEffect } from 'react';

export const usePageMeta = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      updateMetaTag('property="og:title"', title);
      updateMetaTag('name="twitter:title"', title);
    }
    if (description) {
      updateMetaTag('name="description"', description);
      updateMetaTag('property="og:description"', description);
      updateMetaTag('name="twitter:description"', description);
    }
  }, [title, description]);

  function updateMetaTag(selector, content) {
    let meta = document.querySelector(`meta[${selector}]`);
    if (!meta) {
      meta = document.createElement('meta');
      const attrMatch = selector.split('=');
      if (attrMatch.length === 2) {
        meta.setAttribute(attrMatch[0], attrMatch[1].replace(/"/g, ''));
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  }
};
