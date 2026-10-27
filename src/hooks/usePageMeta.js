import { useEffect } from 'react';

export const usePageMeta = ({ title, description, canonical }) => {
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

    // Dynamic canonical URL update for Googlebot & SEO
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const canonicalUrl = canonical || (currentPath === '/' ? 'https://duneexplorer.com/' : `https://duneexplorer.com${currentPath}`);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
    updateMetaTag('property="og:url"', canonicalUrl);
  }, [title, description, canonical]);

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
