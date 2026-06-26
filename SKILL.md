---
name: nyma-design
description: Use this skill to generate well-branded interfaces and assets for Nyma (the Tiara design system) — a multi-tenant fashion-operations ERP — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css` for the full token system, load Font Awesome 6 Solid from CDN for icons, and load `_ds_bundle.js` to use the React component primitives (`window.TiaraDesignSystemNyma_96297e`). If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

Key facts to honour:
- **Brand accent: Nyma blue `#3b82f6`**; warm-grey Fluent2 neutrals; **Roboto** typeface; **Font Awesome 6 Solid** icons (no emoji, no hand-drawn SVG icons).
- Italian-first, operational, direct copy — sentence case, no exclamation marks, European number/date formatting.
- Soft radii (cards 12px), hairline borders, subtle low-contrast shadows, flat backgrounds (no gradients in product UI), quick functional motion. Dark mode is first-class via `[data-theme="dark"]`.
- The app shell sidebar is dark slate (`#1e293b`); everything else is warm-neutral.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
