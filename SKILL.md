---
name: data-flow-design
description: Use this skill to generate well-branded interfaces and assets for Data Flow — Akeron's cloud-native, no-code data integration & transformation (ETL/pipeline) platform — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI component primitives for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

**What Data Flow is:** a data integration & transformation platform — connectors → visual pipelines → datasets (source / join / union / aggregation / subset) → transformations & formulas → export, run in batch or streaming, with monitoring, audit snapshots, and a Query Analyzer. Audience: data engineers and integration specialists. It is NOT a fashion/commerce app — that was an earlier mistake now corrected.

If creating visual artifacts (mocks, prototypes, slides), copy assets out and create static HTML files — link `styles.css` for the full token system, load Font Awesome 6 Solid from CDN for icons, and load `_ds_bundle.js` to use the React primitives (`window.TiaraDesignSystemNyma_96297e`). For production code, copy assets and read the rules here.

Key facts to honour:
- **Brand accent: blue `#3b82f6`**; warm-grey Fluent2 neutrals; **Roboto** typeface; **Font Awesome 6 Solid** icons (no emoji, no hand-drawn SVG icons).
- **English-first**, technical and precise copy — sentence case, no exclamation marks, data-platform vocabulary (workspace, pipeline, dataset, connector, transformation, execution, audit).
- Map status colors to execution states: success=Succeeded, info/blue=Running, warning=Partially failed, danger=Failed/DLQ.
- Soft radii (cards 12px), hairline borders, subtle low-contrast shadows, flat backgrounds (no gradients in product UI), quick functional motion. Dark mode is first-class via `[data-theme="dark"]`. App-shell sidebar is dark slate (`#1e293b`).
- **Provisional visuals:** tokens/components are inherited from Akeron's shared Tiara library and should be validated against the Data Flow Angular front-end when available.

If the user invokes this skill without other guidance, ask what they want to build, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_ production code.
