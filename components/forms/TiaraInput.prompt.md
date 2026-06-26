Single-line text input with optional leading icon, clear button and validation state.

```jsx
<TiaraInput placeholder="Cerca per N. ordine o cliente…"
  leftIcon={<i className="fa-solid fa-magnifying-glass" />} />
<TiaraInput inputSize="md" state="error" defaultValue="bad@" />
```

`inputSize`: `sm` `md` `lg`. `state`: `default` `success` `warning` `error`. Props: `leftIcon`, `clearable` + `onClear`, plus native input attrs.
