# Data Flow — Design System

> **Last reviewed:** 2026-06-26 — rebranded from a fashion-ERP mis-read to the correct product (Data Flow, the data integration platform). Visuals inherited from the shared Tiara library remain provisional pending the Data Flow Angular front-end.

The design system for **Data Flow**, Akeron's **cloud-native data integration & transformation platform**. Data Flow lets teams connect to heterogeneous data sources, build visual transformation pipelines, and deliver processed data to target systems — **no code required**.

Product capabilities (from the v1.4.0 product documentation):
- **Ingest** from databases (JDBC), cloud storage (S3, Azure Blob), CRM/ERP (Salesforce, HubSpot, MS Business Central), files (CSV, Excel), queues (Amazon SQS), REST APIs, and other Akeron products (Vulki, Kautha, Tarko).
- **Transform** with visual pipelines — datasets of type *source, join, union, aggregation, subset*, plus a custom **formula** language and column operations (rename, cast, impact analysis).
- **Export** to databases (drop&create / insert-update / append), S3, or Akeron products via DataLoader.
- **Run** in **batch** (manual, scheduled, or API-triggered) and **streaming** (SQS, with DLQ) modes, with real-time WebSocket monitoring, per-dataset logs/metrics, and an **audit snapshot** of every execution.
- **Explore** with the built-in **Query Analyzer** (save/run SQL-like queries, browse & download results).
- Integrates into the Akeron ecosystem (e.g. Vulki's scheduler step "Execute Data Flow Pipeline").

This design system gives a design agent the foundations (tokens, type, color, components) to build Data Flow interfaces and on-brand Akeron assets.

> **Naming note.** The low-level visual tokens and React primitives in this system are currently sourced from **Tiara** — the shared Akeron component library (used by the Tarko product, accent rebranded to blue). They are treated here as the **Akeron shared visual language** and are **provisional for Data Flow** until reconciled against the Data Flow front-end (Angular). See *Caveats*.

## Sources
- **Product documentation (source of truth for product scope, vocabulary, capabilities):** Confluence — *Data Flow — Product Documentation v1.4.0 (EN)*, space `Alkyra` (`support-akeron.atlassian.net/wiki/spaces/Alkyra/pages/1062141993`). Requires Akeron access.
- **Visual tokens / React primitives:** `github.com/AkeronSrl/hub-next` → `packages/tiara-ds` (the shared Tiara DS: shadcn/ui + Radix + CVA + Tailwind 4; Figma "Tiara - Tarko-New"). Original `tokens.css` / `globals.css` / brand override preserved under `reference/`.
- **Placeholder repo:** `github.com/AkeronSrl/data-flow-design-system` (now mirrors this project).
- **Pending:** the **Data Flow front-end (Angular)** — to be supplied as a zip. This is the authoritative source for Data Flow's real screens, additional components, and any product-specific visual overrides.

---

## Content Fundamentals
**Language:** **English-first.** Akeron is an Italian company, but Data Flow is a technical data-engineering product with international connectors and an English product surface (the v1.4.0 docs are EN). Keep UI copy in English unless a localized build requires otherwise.

**Voice:** technical, precise, neutral. It speaks to **data engineers, integration specialists, and analysts** — people building pipelines, not consumers. Imperative for actions (*"Add a source dataset", "Run pipeline"*), plain declaratives for states (*"No executions match these filters"*). No marketing gloss, no exclamation marks, **no emoji**, no mascots.

**Person:** addresses the user implicitly via imperatives; the product never refers to itself in the first person.

**Casing:** Sentence case for titles, buttons, labels (*"New pipeline", "Add connector"*). UPPERCASE only for tiny section eyebrows and short codes/badges (`BATCH`, `API`, `SQL`, `DLQ`).

**Domain vocabulary (use these exact terms):** *Workspace, Pipeline (Batch / API-Webhook), Dataset (Source · Join · Union · Aggregation · Subset), Connector, Transformation, Formula, Column (cast / rename / impact), Export (Drop&Create · Insert/Update · Append), Execution (correlation ID, state, logs, metrics), Audit Snapshot, Query Analyzer, Streaming, Dead-letter queue (DLQ).* Connector names are proper-cased: *Amazon S3, Azure Blob Storage, Salesforce, HubSpot, Microsoft Business Central, Amazon SQS, REST API, Hook API, Vulki, Akeron.*

**Status language:** execution states read like a pipeline run — *Queued, Running, Succeeded, Failed, Partially failed, Canceled.* Pipelines are *Active / Inactive*.

**Numbers & data:** row counts, durations (`1.2s`, `00:04:31`), record volumes (`1.4M rows`), and percentages appear constantly — use tabular figures and right-align numeric columns. Timestamps in ISO-ish form (`2026-06-25 14:32`).

**Empty / error states:** an icon, a one-line title, a one-line explanation, and a single primary action. Calm and instructive, never cute — e.g. *"This workspace has no pipelines yet. Create one to start moving data."*

---

## Visual Foundations
> These foundations are inherited from the Akeron shared **Tiara** library and are **provisional for Data Flow** pending the Angular front-end. Where Data Flow diverges, the Angular sources win and this section will be updated.

**Overall vibe:** a clean, dense, *Fluent2-adjacent* enterprise tool — appropriate for a data platform with tables, pipeline canvases, config panels, and monitoring dashboards. Warm-grey neutrals, soft radii, restrained color, low-contrast elevation. Color earns its place (brand action, connector identity, execution status) — it never decorates.

**Color**
- **Brand / accent: blue `#3b82f6`** (Tailwind blue-500). Scale `accent-100…700`; `500` canonical, `600` hover, `700` pressed. Drives primary buttons, links, active nav, focus rings, selection, and the "running" execution state.
- **Neutrals:** a 22-step *warm* grey scale (`neutral-10`→`220`). Text `#201f1e` (warm near-black), secondary `#605e5c`.
- **Status (map to execution states):** success `#00a239` (Succeeded), warning `#ff9500` (Partially failed / warnings), danger `#eb0000` (Failed / DLQ), info `#3c69fb` (Running / informational).
- **Categorical palette** (red, orange, amber, green, blue, purple, pink + dark variants) for connector chips, dataset-type tags, and labels.
- **Dark mode** is first-class (`[data-theme="dark"]`) — neutrals invert to warm near-blacks, blue lightens on hover/press, shadows become light glows. (A data tool is used for long sessions; dark mode matters.)

**Typography:** **Roboto** (300/400/500/600/700). Small, tight working range — body & table text 14px, labels 12px, page titles 24px/700, monospace-feel for SKUs/IDs/SQL via tabular numerals. Weight carries hierarchy (400 body, 500 controls/labels, 600 headings/values, 700 page titles). Fixed px line-heights.

**Spacing:** 4px base step, non-linear scale (`spacing-1`=4 … `spacing-12`=48). Page gutters 24px, card padding 20px, control gaps 8–12px. Built with flex/grid + `gap`, never inter-sibling margins.

**Radius:** soft, not pill-y. Cards/panels `xl` (12px), buttons & inputs 10–14px, badges 12px, avatars/dots/status-dots full. Nothing sharp-cornered.

**Borders:** hairline `1px` `--color-border-light` (`#edebe9`) for dividers and card edges; inputs use a heavier `1.5px` border that turns blue on focus. Dashed borders signal disabled/read-only fields and empty-state drop zones (e.g. "drop a CSV here").

**Elevation:** deliberately subtle. Panels float on near-white with `--shadow-panel` (`0 0.8px 16px rgba(0,0,0,.13)`). No hard drop shadows, no neumorphism. Cards = white surface + hairline border + soft panel shadow + 12px radius.

**Backgrounds:** flat color only. Page `background-alt1` (`#faf9f8`), surfaces pure white. **No gradients** in product UI (a brand gradient exists for marketing/logo only), no photographic backgrounds, no textures.

**App shell:** the **sidebar is dark slate** (`#1e293b`, slate-800) with slate-200 text and blue-tinted active items — a fixed anchor across both themes. The top bar is a sticky, hairline-bordered surface.

**Motion:** quick and functional. Durations 150/200/300ms, standard `cubic-bezier(.4,0,.2,1)` easing. Fades and small scale-pops for overlays; spinners + indeterminate bars for running executions; live metrics tick via WebSocket. **No bounces, no parallax, no decorative loops.** Honors `prefers-reduced-motion`.

**Interaction states:** hover darkens fills one step (`-600`) and tints ghost/row backgrounds; press darkens another (`-700`) with no scale; focus = 2px accent outline (buttons) or 1px accent ring + accent border + faint blue field tint (inputs); disabled = muted grey + pointer-events off (inputs go dashed); selected rows/nav use a soft neutral or blue-tinted background, never a heavy fill.

**Transparency/blur:** sparing — modal overlay `rgba(0,0,0,.23)`; no glassmorphism.

---

## Iconography
**Font Awesome 6 — Solid** is the icon system (in the shared library it's `@fortawesome/free-solid-svg-icons` re-exported under PascalCase names). Use it from CDN:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<i class="fa-solid fa-diagram-project"></i>
```
- **One weight only:** solid. No mixing regular/light/brands in product UI.
- Icons at 16px default (xs 12 / sm 14 / md 16 / lg 20 / xl 24), inherit `currentColor`, paired with the muted `--color-icon` tone unless carrying status meaning.
- Useful Data Flow glyphs: `fa-diagram-project` (pipeline), `fa-database` / `fa-plug` (connector), `fa-table` (dataset), `fa-code-merge` (join/union), `fa-filter` (subset), `fa-calculator` (formula/aggregation), `fa-play` (run), `fa-clock-rotate-left` (audit/history), `fa-wave-square` (streaming), `fa-magnifying-glass-chart` (query analyzer).
- Standalone icons need `aria-label`; decorative icons are `aria-hidden`. **No emoji, no Unicode-glyph icons, no hand-drawn SVG icons** — always Font Awesome.
- Brand mark: `assets/logos/data-flow-mark.svg`. Legacy Tarko logos remain in `assets/logos/` for reference only.

---

## Index / Manifest
**Root**
- `styles.css` — single entry point (consumers link this); `@import`s every token + component layer.
- `readme.md` — this guide. `SKILL.md` — portable skill wrapper.

**`tokens/`** — `fonts.css` (Roboto), `primitives.css` (palette), `typography.css`, `spacing.css`, `radius-borders.css`, `shadows-motion.css`, `semantic.css` (role mapping + dark mode), `base.css` (reset + keyframes), `components.css` (component CSS layer).

**`components/`** — 21 React primitives (namespace `window.TiaraDesignSystemNyma_96297e`), each with a sibling `.d.ts` + `.prompt.md`:
- `forms/` — `TiaraButton`, `TiaraIconButton`, `TiaraInput`, `TiaraTextarea`, `TiaraCheckbox`, `TiaraRadioGroup`, `TiaraToggleSwitch`, `TiaraSelect`
- `display/` — `TiaraBadge`, `TiaraChip`, `TiaraAvatar`, `TiaraStatCard`, `TiaraCard`, `TiaraSeparator`, `TiaraSkeleton`, `TiaraProgressBar`, `TiaraSpinner`
- `feedback/` — `TiaraAlert`, `TiaraTooltip`
- `navigation/` — `TiaraTabs`, `TiaraBreadcrumb`

**`ui_kits/`** — ⚠️ being rebuilt. The current `nyma-backoffice/` kit reflects the **wrong product** (legacy fashion-ERP) and will be replaced with real Data Flow screens (workspaces, pipeline builder, dataset config, connector gallery, execution monitor, query analyzer) once the Angular front-end is supplied.

**Reusable starting points (`templates/`)** — none yet. Consuming projects now seed new designs from **templates** (`templates/<slug>/<Slug>.dc.html`) rather than the older `@startingPoint` tags. Data Flow templates (e.g. a pipeline-detail page, a connector-setup wizard, a monitoring dashboard) will be authored here once the Angular screens are reconciled.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.

**`assets/logos/`** — Data Flow mark + legacy Tarko logos. **`reference/`** — original imported `tokens.css` / `globals.css` / brand override.

---

## Caveats & open questions
- **Product reframed:** the system was first built against the wrong product (a fashion ERP). Product scope, vocabulary, and copy are now corrected to Data Flow per the v1.4.0 docs.
- **Visuals are provisional:** tokens, type, color, and the React primitives are inherited from the shared Tiara/Tarko library. **They must be validated against the Data Flow Angular front-end.** If Data Flow has its own theme/SCSS variables, those override what's here.
- **UI kit pending:** real Data Flow screens require the Angular sources — not invented here.
- **Components to add:** the Angular project will surface Data Flow-specific components (pipeline canvas / node, dataset config panel, connector cards, execution timeline, formula editor, data-preview grid, schema mapper). These get added as React recreations once the source arrives.
- **Fonts:** Roboto loads from Google Fonts CDN (the production typeface, not a substitution). Self-hosted woff2 can be wired into `tokens/fonts.css` on request.
