# Nyma Backoffice — UI Kit

Interactive recreation of the **Nyma** multi-tenant fashion-ERP backoffice (the `apps/web` admin from `AkeronSrl/hub-next`), built entirely on the Tiara design-system primitives.

## Flow
`index.html` boots a fake but clickable app:

1. **Login** — tenant / email / password, Nyma mark, brand-blue primary button.
2. **Dashboard** — KPI stat cards, a stock-alert banner, recent-orders panel.
3. **Ordini (list)** — searchable + status-filterable table with status badges, row actions, pagination.
4. **Order detail** — breadcrumb, status, summary panel, tabbed lines table.

Use the dark sidebar to switch modules; other modules show a labelled placeholder (kept honest — only the screens above are real, per the recreation brief).

## Files
- `index.html` — shell; loads React 18 + Babel + `_ds_bundle.js` + Font Awesome, then the three kit scripts in order.
- `kit-shell.jsx` — `NymaSidebar` (dark slate, sectioned nav) + `NymaTopBar` (tenant, locale, user menu).
- `kit-screens.jsx` — `LoginScreen`, `Dashboard`, `OrdersList`, `OrderDetail` + mock data.
- `kit-app.jsx` — `NymaApp` state machine wiring auth + navigation + selected order.

## Notes
- Each `<script type="text/babel">` has isolated scope; every component is published to `window` and DS primitives are read from `window.TiaraDesignSystemNyma_96297e`.
- All colour, spacing, type and radius come from `styles.css` tokens — no hard-coded brand values except the slate sidebar chrome (which the real app also hard-codes as Tailwind slate).
- Copy is Italian-first, matching the production app.
