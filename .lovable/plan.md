
# Packborn Website — Build Plan

A warm, premium single-page site for Packborn using the full copy you provided, built as a single route with smooth-scroll anchor navigation between sections. The uploaded **Packborn logo** (green + brown hexagonal "P" on cream) will be used as the brand mark throughout.

## Note on hosting

This project is a React (TanStack Start) app rather than raw HTML/CSS/JS, but all your functional constraints still hold: **no backend, no server submissions — the contact form opens WhatsApp / mailto on submit**. If you specifically need a pure-static HTML bundle for GitHub Pages, tell me and I'll generate that instead.

## Logo usage

- Copy upload to `src/assets/packborn-logo.png` and import as an ES6 module.
- Sticky nav: logo mark + "Packborn" wordmark in Fraunces.
- Footer brand block: logo + tagline.
- Favicon: same logo wired through `__root.tsx` head links.
- Hero: subtle large watermark version of the logo behind the headline at low opacity.

## Design system

Warm, premium, kraft-paper aesthetic pulled from the logo:
- **Palette** (oklch tokens in `src/styles.css`):
  - Cream background `#F7F1E6`, card `#FBF6EC`
  - Forest green `#3F6B36` (primary, matches logo green)
  - Kraft brown `#7A4F2A` (accent, matches logo brown)
  - Charcoal `#1A1A1A` foreground, muted brown-gray body text
- **Type**: Fraunces (bold display serif) for H1/H2 + Inter (body).
- Rounded corners (`rounded-2xl`), soft layered shadows, subtle paper-grain texture.
- Scroll reveals via IntersectionObserver. Sticky nav with backdrop blur. Smooth scroll.

## Page structure (single route: `src/routes/index.tsx`)

One scrolling page; each section has an `id` anchor:

1. **Nav** (`#top`) — sticky; logo + wordmark; links Home / Services / Portfolio / About / Contact; filled "Get a Quote" CTA. Hamburger on mobile.
2. **Hero** (`#home`) — full-viewport. H1 "Packaging that Builds Brands, Not Just Boxes", subheading, two CTAs ("Get Custom Quote" → #contact, "View Our Work" → #portfolio). Right-side image of branded café packaging; faded logo watermark behind.
3. **Trust bar** (`#trust`) — headline + 3 animated counters (100+ / 500+ / 5+).
4. **Services** (`#services`) — "What We Do" + 4 icon cards (Custom Packaging, Branding & Design, Bulk Printing, Consultation). "Explore Services" CTA → #pricing.
5. **Industries** (`#industries`) — pill/badge tags for the 5 industries + closing line.
6. **Why Packborn** (`#why`) — checklist grid of the 5 benefits.
7. **Portfolio** (`#portfolio`) — intro + filter tabs (All / Food / Café / Retail) filtering a responsive image grid. Featured Café Rebranding card with Challenge / Solution / Result.
8. **About** (`#about`) — Our Story, Mission, Vision; Founder pull-quote with photo placeholder; 5-step process timeline (horizontal desktop / vertical mobile).
9. **Pricing** (`#pricing`) — 3 plan cards (Starter / Growth / Premium), middle highlighted, each → #contact.
10. **CTA banner** — "Your packaging is your silent salesman." full-bleed deep-green band with button.
11. **Contact** (`#contact`) — Two columns:
    - Left: inquiry form with all 8 fields. On submit, build a pre-filled WhatsApp message (`https://wa.me/917055499136?text=...`) and open it; mailto fallback to `packborn.hq@gmail.com`. Client-side validation + privacy note.
    - Right: WhatsApp button (green) + Call button (`tel:+917055499136`) + contact details.
12. **Footer** — 4 columns (Brand+logo, Quick Links, Services, Contact + Instagram @packborn2026), bottom bar © 2025 + Privacy / Terms placeholders.

## Files to create/modify

- `src/assets/packborn-logo.png` — copied from upload.
- `src/styles.css` — replace tokens with warm palette; helpers for paper texture, gradient, reveal.
- `src/routes/__root.tsx` — Google Fonts (Fraunces, Inter) links; favicon link to logo; Packborn meta title/description/OG.
- `src/routes/index.tsx` — page shell with `<Nav />`, sections in order, `<Footer />`; H1 head meta.
- `src/components/site/` — one file per section: `Nav.tsx`, `Hero.tsx`, `TrustBar.tsx`, `Services.tsx`, `Industries.tsx`, `WhyPackborn.tsx`, `Portfolio.tsx`, `About.tsx`, `Pricing.tsx`, `CtaBanner.tsx`, `Contact.tsx`, `Footer.tsx`.
- `src/components/site/useReveal.ts` — small IntersectionObserver hook for reveals + counter animation.
- `src/assets/` — generated hero image, 6–8 portfolio mockups across 3 categories, founder portrait placeholder, kraft-paper texture. All via the image tool, imported as ES6 modules with alt text.

## Interactivity (all client-side)

- Smooth-scroll anchor nav (CSS `scroll-behavior: smooth`, nav offset).
- Mobile menu toggle (React state).
- Counters animate on first viewport entry.
- Portfolio filter via `useState`.
- Contact form `onSubmit` → validate → `window.open(whatsappUrl, '_blank')`; mailto button always available.

## Accessibility & SEO

- Single H1; H2 per section; semantic landmarks; `aria-label`s on nav and icon buttons.
- Alt text on every image (logo: "Packborn logo").
- Title <60 chars, description <160 chars, OG + Twitter tags.
- Visible focus rings on all interactive elements.

## Out of scope

No backend, no Lovable Cloud, no database, no real form submission, no authentication.

Ready to build on approval.
