# GitHub Workflow Guidelines

## Repository Overview
**Repository Purpose:** Marga Adventure web application — high-end Himalayan trekking, spiritual retreats, and cultural immersion travel platform built with Astro v5, React v19, Tailwind CSS v4, and TypeScript.

## Branching Strategy & Workflow
- **Main Branch:** `main` (Production deployment target).
- **Feature Branches:** Use descriptive names for feature/fix branches, e.g., `feature/contact-modal-hardening` or `fix/i18n-locale-sync`.
- **Pull Requests:** All non-trivial changes should be reviewed via Pull Requests before merging into `main`.

## Commit Conventions
Commit messages must be concise, descriptive, and accurately state the change made.
- Preferred format: `<type>: <short summary>` (e.g., `fix: sanitize image alt attributes and sanitize modal inputs`, `docs: add GITHUB.md and SECURITY.md`).
- Never use generic messages like `update`, `changes`, `fix`, or `stuff`.

## Code & Security Review Requirements
1. **Frontend Input Validation:** All forms (e.g. contact modals) must validate user input client-side before submission.
2. **XSS & Content Handling:** Avoid raw HTML rendering (`dangerouslySetInnerHTML`) unless explicitly required and sanitized. Never inject HTML tags inside HTML attributes (e.g., `alt`, `value`).
3. **External Link Safety:** All external links opening in a new tab (`target="_blank"`) MUST include `rel="noopener noreferrer"`.
4. **Secret Hygiene:** Never commit secrets, private tokens, API keys (unless public site keys like Web3Forms/hCaptcha site key), or `.env` files.

## Environment & Secret Management
- Development configuration should rely on local environment variables where necessary.
- Keep sensitive third-party service tokens strictly in secure environment settings (e.g., Netlify/Vercel environment variables).

## Release & Deployment Workflow
- Builds are validated with `npm run build` prior to deployment.
- Site is hosted via static build output (`dist/`) managed by Astro & Netlify (`netlify.toml`).
