# Tiara Design System — Nyma

The design system behind **Nyma**, a multi-tenant **fashion-operations ERP** (SaaS). Nyma targets fashion brands with €5–20M revenue, replacing a patchwork of legacy gestionali + Excel + external e-commerce with one operational backbone: catalog (products, size/colour variants, collections, seasons, price lists), B2B / B2C / agent orders (incl. preorders & sampling), warehouse (stock, picking, packing), operational documents (orders, confirmations, DDT, proforma — no fiscal accounting), and a native AI assistant.

**Tiara** is the React component library + token system that dresses every Nyma surface: the back-office admin (React + Vite), the warehouse PWA, and — on the roadmap — the B2C / B2B / agent portals (Next.js).

> Names: **Nyma** is the brand/company. **Tiara** is the design system. The system was forked from an upstream **Tarko** design system (orange accent) and rebranded to Nyma blue — Tarko logos are kept under `assets/logos/` for reference only.

## Sources
This system was reverse-engineered from the production codebase. Explore these to build more accurately:
- **Design system + app:** `github.com/AkeronSrl/hub-next` (private) — the real Tiara DS lives at `packages/tiara-ds/` (shadcn/ui + Radix + CVA + Tailwind 4, ~50 components across atoms/molecules/organisms, Storybook). The admin app is `apps/web/` (React + Vite + MUI in transition to Tiara).
- **Empty placeholder repo:** `github.com/AkeronSrl/data-flow-design-system` — referenced in the brief but currently empty; the authoritative source is `hub-next/packages/tiara-ds`.
- Token source of truth in the repo: Figma "Tiara - Tarko-New" (fluent2 collection, Light/Dark), exported to `tokens.css`. Original imports are preserved under `reference/` here.

Key files lifted verbatim for fidelity: `packages/tiara-ds/src/styles/{tokens.css,globals.css,nyma-brand-override.css}`, `src/atoms/{button,input,badge,icon,stat-card}`, `apps/web/src/{theme.ts,layouts/BackofficeLayout.tsx,shared/components/Nyma{Sidebar,TopBar,Logo}.tsx}`.

---

## Content Fundamentals
**Language:** Italian-first, with English fallbacks in code (`t('orders.title', 'Ordini')`). UI strings ship in Italian: *Ordini, Nuovo ordine, Resetta filtri, Spedizioni, Giacenze, Stagioni*.

**Voice:** operational and direct — it speaks to professionals doing a job, not consumers. Imperative for actions (*"Crea il primo ordine per iniziare a tracciare le vendite"*), plain declaratives for states (*"Nessun ordine corrisponde ai filtri"*). No marketing gloss, no exclamation marks, **no emoji**, no mascots.

**Person:** addresses the user implicitly via imperatives ("Gestisci ordini cliente B2B e B2C"); avoids "I". The product never refers to itself in the first person.

**Casing:** Sentence case everywhere — page titles (`Ordini`), buttons (`Nuovo ordine`), labels. UPPERCASE only for tiny section eyebrows in the sidebar (`CATALOGO`, `MAGAZZINO`) and short codes (`IT`, `B2B`).

**Domain vocabulary:** fashion-ops specific — *variante (taglia/colore), collezione, stagione, listino, preordine, campionario, DDT, proforma, picking, putaway, buffer, rebalance, coverage*. SKUs read `BLZ-001 / 42 / Navy`.

**Numbers:** European formatting — `€ 12.480,00` (dot thousands, comma decimals), dates `24 giu 2026`. Numeric table columns use tabular figures and right-align.

**Empty / error states:** an icon, a one-line title, a one-line explanation, and a single primary action. Calm, never cute.

---

## Visual Foundations

**Overall vibe:** a clean, dense, *Fluent2-adjacent* enterprise tool. Warm-grey neutrals, generous radii, restrained colour, low-contrast elevation. Productivity over personality — colour earns its place (status, brand action), it doesn't decorate.

**Colour**
- **Brand / accent: Nyma blue `#3b82f6`** (Tailwind blue-500). Scale `accent-100…700`; `500` is canonical, `600` hover, `700` pressed. Used for primary buttons, links, active nav, focus rings, selection.
- **Neutrals:** a 22-step *warm* grey scale (`neutral-10`→`220`) — slightly beige, not blue-grey. Text is `#201f1e` (near-black, warm), secondary `#605e5c`.
- **Status:** success `#00a239`, warning `#ff9500`, danger `#eb0000`, info `#3c69fb` — each with a soft `-100` surface for banners.
- **Badges/tags:** a categorical palette (red, orange, amber, green, blue, purple, pink + dark variants) for order statuses and labels.
- **Dark mode** is a first-class theme (`[data-theme="dark"]`) — neutrals invert to warm near-blacks, blue lightens on hover/press, shadows become light glows.

**Typography:** **Roboto** throughout (300/400/500/600/700). Working range is small and tight — body 14px, table text 14px, labels 12px, page titles 24px/700. Weight does the hierarchy work (400 body, 500 controls/labels, 600 headings/values, 700 page titles). Line-heights are fixed px values, not ratios.

**Spacing:** 4px base step, non-linear scale (`spacing-1`=4 … `spacing-12`=48). Page gutters 24px, card padding 20px, control gaps 8–12px. Layout is built with flex/grid + `gap`, never margins between siblings.

**Radius:** soft but not pill-y. Cards/panels `xl` (12px), buttons 10–14px, inputs 10–14px, badges 12px (full-pill feel at small height), avatars/dots full. Nothing is sharp-cornered.

**Borders:** hairline `1px` in `--color-border-light` (`#edebe9`) for dividers and card edges; inputs use a heavier `1.5px` border that turns blue on focus. Dashed borders signal disabled/read-only inputs and empty-state drop zones.

**Elevation / shadows:** deliberately subtle and low-contrast — panels float on near-white with `--shadow-panel` (`0 0.8px 16px rgba(0,0,0,.13)`). No hard drop shadows, no neumorphism. Cards = white surface + hairline border + soft panel shadow + 12px radius. Flat cards drop the shadow inside already-elevated contexts.

**Backgrounds:** flat colour only. Page is `background-alt1` (`#faf9f8`), surfaces are pure white. **No gradients** in the UI (a brand gradient exists for marketing/logo moments only), no photographic backgrounds, no textures or patterns.

**The app shell** is the one place that breaks the warm-neutral palette: the **sidebar is dark slate** (`#1e293b`, slate-800) with slate-200 text and blue-tinted active items — a deliberate, fixed anchor across both light and dark modes. The top bar is a sticky, hairline-bordered white (or near-black in dark) bar.

**Motion:** quick and functional. Durations 150/200/300ms, standard `cubic-bezier(.4,0,.2,1)` easing. Fades and small scale-pops for overlays; spinners for loading; **no bounces, no parallax, no decorative loops**. Honours `prefers-reduced-motion`.

**Interaction states**
- **Hover:** fills darken one step (buttons → `-600`), ghost/row backgrounds tint to `content-bg-hover`, links go blue.
- **Press:** darken another step (`-700`); no scale transform.
- **Focus:** 2px accent outline with 2px offset (buttons) or a 1px accent ring + accent border + faint blue field tint (inputs).
- **Disabled:** muted grey fill + grey text, pointer-events off; inputs switch to a dashed border.
- **Selected (rows/nav):** soft neutral or blue-tinted background, never a heavy fill.

**Transparency/blur:** used sparingly — modal overlay is `rgba(0,0,0,.23)`; no glassmorphism.

---

## Iconography
**Font Awesome 6 — Solid** is the icon system. In the repo it's `@fortawesome/free-solid-svg-icons` re-exported under friendly PascalCase names (`Plus`, `Eye`, `AnglesLeft`, `RightFromBracket`, `MagnifyingGlass`, `TriangleExclamation`…) via `@nyma/tiara-ds/icons`.

In this design system, use Font Awesome 6 Solid from CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<i class="fa-solid fa-plus"></i>
```
- **One weight only:** solid. No mixing in regular/light/brands for product UI.
- Icons sit at 16px default (xs 12 / sm 14 / md 16 / lg 20 / xl 24), inherit `currentColor`, and pair with the muted `--color-icon` tone unless they carry status meaning.
- Standalone icons need an `aria-label`; decorative icons are `aria-hidden`.
- **No emoji. No Unicode-glyph icons. No hand-drawn SVG icons** — always Font Awesome.
- Brand mark: `assets/logos/nyma-mark.svg` (blue circle + white "N"). Legacy Tarko logos are in `assets/logos/` for reference, not active use.

---

## Index / Manifest

**Root**
- `styles.css` — single entry point (consumers link this); `@import`s every token + component layer.
- `readme.md` — this guide. `SKILL.md` — portable skill wrapper.

**`tokens/`** — `fonts.css` (Roboto), `primitives.css` (palette), `typography.css`, `spacing.css`, `radius-borders.css`, `shadows-motion.css`, `semantic.css` (role mapping + dark mode), `base.css` (reset + keyframes), `components.css` (component CSS layer).

**`components/`** — React primitives (namespace `window.TiaraDesignSystemNyma_96297e`):
- `forms/` — TiaraButton, TiaraIconButton, TiaraInput, TiaraTextarea, TiaraCheckbox, TiaraRadioGroup, TiaraToggleSwitch, TiaraSelect
- `display/` — TiaraBadge, TiaraChip, TiaraAvatar, TiaraStatCard, TiaraCard, TiaraSeparator, TiaraSkeleton, TiaraProgressBar, TiaraSpinner
- `feedback/` — TiaraAlert, TiaraTooltip
- `navigation/` — TiaraTabs, TiaraBreadcrumb

**`ui_kits/nyma-backoffice/`** — interactive fashion-ERP recreation (login → dashboard → orders → detail). See its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

**`assets/logos/`** — Nyma mark + legacy Tarko logos. **`reference/`** — original imported `tokens.css` / `globals.css` / brand override.

---

## Caveats
- **Fonts:** Roboto loads from Google Fonts CDN (it *is* the production typeface — not a substitution). If you need self-hosted woff2 binaries, drop them in `assets/fonts/` and swap `tokens/fonts.css` to `@font-face` rules.
- This is a **focused core** of ~21 primitives. The real Tiara DS has ~50 components (DataGrid, Pivot, DatePicker, Combobox, RichTextEditor, charts, Toast, Dialog, Sheet…) — ask to add any you need.
