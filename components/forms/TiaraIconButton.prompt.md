Icon-only square button for toolbars and table row actions; always pass `aria-label`.

```jsx
<TiaraIconButton icon={<i className="fa-solid fa-eye" />} aria-label="Apri" />
<TiaraIconButton icon={<i className="fa-solid fa-pen" />} variant="secondary" aria-label="Modifica" />
```

Variants: `ghost` (default), `secondary`, `primary`. Sizes: `xs` `sm` `md` `lg`.
