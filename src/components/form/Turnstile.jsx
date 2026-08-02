import { useEffect, useRef } from 'react';

const SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || '';

const Turnstile = ({ onToken, onError }) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!SITE_KEY || !containerRef.current) return;

    let cancelled = false;
    const loadScript = () =>
      new Promise((resolve) => {
        if (window.turnstile) return resolve();
        const existing = document.getElementById('cf-turnstile-api');
        if (existing) {
          existing.addEventListener('load', resolve, { once: true });
          return;
        }
        const script = document.createElement('script');
        script.id = 'cf-turnstile-api';
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.addEventListener('load', resolve, { once: true });
        document.head.appendChild(script);
      });

    loadScript().then(() => {
      if (cancelled || !window.turnstile || !containerRef.current) return;
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY,
        callback: (token) => onToken && onToken(token),
        'expired-callback': () => onToken && onToken(null),
        'error-callback': () => onError && onError(),
      });
    });

    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* noop */
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={containerRef} className="turnstile-widget" aria-hidden="true" />;
};

export default Turnstile;
