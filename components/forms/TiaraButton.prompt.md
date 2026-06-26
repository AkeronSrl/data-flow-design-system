Branded button — primary action control; use one `primary` per view, `secondary`/`ghost` for the rest, status fills for destructive/confirm.

```jsx
<TiaraButton variant="primary" leftIcon={<i className="fa-solid fa-plus" />}>
  Nuovo ordine
</TiaraButton>
<TiaraButton variant="secondary">Annulla</TiaraButton>
<TiaraButton variant="danger" size="sm">Elimina</TiaraButton>
<TiaraButton variant="ghost" loading>Salvataggio…</TiaraButton>
```

Variants: `primary` (Nyma blue), `secondary`, `success` / `warning` / `danger` / `info`, `outline-primary` / `outline-secondary` / `outline-danger`, `ghost`. Sizes: `xs` `sm` `md` `lg`. Props: `leftIcon`, `rightIcon`, `loading`, plus native button attrs.
