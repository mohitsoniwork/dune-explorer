# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Security & deployment

- **Contact form** submits to the `api/contact.js` serverless proxy (Vercel). The proxy performs server-side validation/sanitization, Cloudflare Turnstile verification, rate limiting, origin checks, then forwards to EmailJS + Google Sheets. No service keys are embedded in the client bundle.
- Set environment variables from `.env.example` in Vercel (Settings > Environment Variables). `VITE_TURNSTILE_SITE_KEY` is public; `TURNSTILE_SECRET_KEY`, `EMAILJS_*`, `GAS_SHEETS_URL`, and `GAS_SHARED_TOKEN` must remain server-only.
- In the EmailJS dashboard, enable the domain allow-list and restrict it to the production origin. In the Google Apps Script, verify the `x-inquiry-token` header (or `Origin`) before writing rows.
- Security headers (CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`) are applied via `vercel.json`.
- `vercel.json` also rewrites unknown paths to `index.html` for client-side routing (excluding `/api/*`).
