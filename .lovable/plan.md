## Convert "The Freudian Trip" from TanStack Start to Next.js

Rebuild the entire project as a plain Next.js 15 App Router app, removing all TanStack dependencies while preserving every page, asset, style, and animation 1:1.

### Important caveat
This Lovable workspace is configured for TanStack Start (Vite + Cloudflare Workers). Swapping to Next.js means replacing the build system itself — Lovable's preview/build pipeline expects the TanStack stack and may not run a Next.js app in-preview. I'll deliver a fully working Next.js codebase that you can `npm run dev` locally, but the in-Lovable preview will likely break. If you'd rather keep the Lovable preview working, say the word and I'll skip this.

### Scope of conversion

**Remove**
- `@tanstack/*` packages, `vite`, `vite.config.ts`, `src/router.tsx`, `src/start.ts`, `src/routeTree.gen.ts`, `src/routes/**`, `src/styles.css` import path
- TanStack-specific files (`__root.tsx`, `sitemap[.]xml.ts`, etc.)

**Add (Next.js 15, App Router, React 19, Tailwind v4)**
- `package.json` with `next`, `react`, `react-dom`, `framer-motion`, `sonner`, `tailwindcss@4`, `@tailwindcss/postcss`
- `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `next-env.d.ts`
- `app/layout.tsx` — root layout with Navbar, Footer, Toaster, SEO metadata (replaces `__root.tsx`)
- `app/globals.css` — copy of current `src/styles.css` watercolor design tokens
- `app/page.tsx` — home
- `app/about/page.tsx`
- `app/therapy/page.tsx`
- `app/assessment/page.tsx`
- `app/workshops/page.tsx`
- `app/populations/page.tsx`
- `app/crocus-diaries/page.tsx`
- `app/enquiry/page.tsx`
- `app/sitemap.ts` — Next's built-in sitemap convention
- `app/robots.ts`
- `public/` — move existing `public/robots.txt` assets; keep watercolor images in `src/assets` or move to `public/assets`

**Rewrite patterns**
- `createFileRoute(...)` → plain default-exported React components
- `<Link to="/x">` from `@tanstack/react-router` → `<Link href="/x">` from `next/link`
- `useNavigate` → `useRouter` from `next/navigation`
- Route `head()` metadata → `export const metadata: Metadata` per page
- All client-interactive pages get `"use client"` (forms, framer-motion, accordions, dropdowns — basically every page in this project)
- Image imports keep working (Next supports static asset imports); optionally swap `<img>` → `next/image`

### Technical notes
- Tailwind v4 in Next: `app/globals.css` uses `@import "tailwindcss"` and `@theme` blocks exactly like the current `src/styles.css` — design tokens carry over unchanged.
- Framer Motion, sonner, and the `Reveal` component move into `src/components/site/` and work as-is once parent pages declare `"use client"`.
- No backend logic in the project today, so no server-function migration needed.

### Out of scope
- Visual or content changes (everything renders identically)
- Adding features
- Deployment config beyond `next.config.ts`

Confirm and I'll execute the full conversion in one pass.
