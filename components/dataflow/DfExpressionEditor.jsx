import React from 'react';

const DEFAULT_FUNCTIONS = [
  'IF', 'COALESCE', 'ISNULL', 'CONCAT', 'UPPER', 'LOWER', 'TRIM', 'SUBSTRING',
  'LENGTH', 'REPLACE', 'ROUND', 'ABS', 'CAST', 'TO_DATE', 'DATEADD', 'DATEDIFF',
  'SUM', 'AVG', 'MIN', 'MAX', 'COUNT', 'NULLIF', 'CASE',
];

const TOKEN_RE = /[A-Za-z0-9_.]+$/;

/** Find the partial identifier immediately before the caret. */
function tokenAtCaret(value, caret) {
  const before = value.slice(0, caret);
  const m = before.match(TOKEN_RE);
  if (!m) return { text: '', start: caret };
  return { text: m[0], start: caret - m[0].length };
}

function buildSuggestions(value, caret, columns, functions, max) {
  const { text } = tokenAtCaret(value, caret);
  const q = text.toLowerCase();
  const cols = columns.map((c) => ({ label: c, kind: 'column' }));
  const fns = functions.map((f) => ({ label: f, kind: 'function' }));
  const all = [...cols, ...fns];
  const filtered = q ? all.filter((s) => s.label.toLowerCase().includes(q)) : all;
  // prefix matches first
  filtered.sort((a, b) => {
    const ap = a.label.toLowerCase().startsWith(q) ? 0 : 1;
    const bp = b.label.toLowerCase().startsWith(q) ? 0 : 1;
    return ap - bp || a.label.localeCompare(b.label);
  });
  return filtered.slice(0, max);
}

function applySuggestion(value, caret, sugg) {
  const { start } = tokenAtCaret(value, caret);
  const insert = sugg.kind === 'function' ? `${sugg.label}(` : sugg.label;
  const next = value.slice(0, start) + insert + value.slice(caret);
  return { value: next, caret: start + insert.length };
}

function autoWarnings(value, functions) {
  const known = new Set(functions.map((f) => f.toUpperCase()));
  const warnings = [];
  const seen = new Set();
  const re = /([A-Za-z_][A-Za-z0-9_]*)\s*\(/g;
  let m;
  while ((m = re.exec(value))) {
    const name = m[1];
    if (!known.has(name.toUpperCase()) && !seen.has(name.toUpperCase())) {
      seen.add(name.toUpperCase());
      warnings.push({ code: 'unknown-function', message: `Unknown function "${name}"` });
    }
  }
  return warnings;
}

/**
 * DfExpressionEditor — formula / SQL expression field with autocomplete and
 * inline lint warnings (Alkyra `alk-smart-expression-editor`).
 *
 * Type to get column + function suggestions (also opens on Ctrl+Space);
 * ArrowUp/Down navigate, Enter/Tab apply, Esc closes. Unknown function calls
 * surface as amber warning chips. Controlled via `value`/`onChange`, or
 * uncontrolled via `defaultValue`.
 */
export function DfExpressionEditor({
  value,
  defaultValue = '',
  placeholder = 'Enter an expression…',
  columns = [],
  functions = DEFAULT_FUNCTIONS,
  maxSuggestions = 12,
  rows = 4,
  validationState = 'none',
  warnings,
  onChange,
  className = '',
  ...rest
}) {
  const controlled = value != null;
  const [internal, setInternal] = React.useState(defaultValue);
  const text = controlled ? value : internal;

  const [open, setOpen] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState([]);
  const [active, setActive] = React.useState(0);
  const ref = React.useRef(null);

  const effectiveWarnings = warnings ?? autoWarnings(text, functions);

  const setText = (next, caret) => {
    if (!controlled) setInternal(next);
    onChange?.(next);
    if (caret != null) {
      requestAnimationFrame(() => {
        const el = ref.current;
        if (el) { el.focus(); el.setSelectionRange(caret, caret); }
      });
    }
  };

  const refresh = (force = false) => {
    const el = ref.current;
    const caret = el ? el.selectionStart : text.length;
    const next = buildSuggestions(text, caret, columns, functions, maxSuggestions);
    setSuggestions(next);
    setActive(0);
    setOpen(force ? next.length > 0 : next.length > 0);
  };

  const choose = (sugg) => {
    const el = ref.current;
    const caret = el ? el.selectionStart : text.length;
    const applied = applySuggestion(text, caret, sugg);
    setText(applied.value, applied.caret);
    setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.ctrlKey && e.code === 'Space') { e.preventDefault(); refresh(true); return; }
    if (!open || suggestions.length === 0) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((a) => (a + 1) % suggestions.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((a) => (a - 1 + suggestions.length) % suggestions.length); }
    else if (e.key === 'Enter' || e.key === 'Tab') { e.preventDefault(); choose(suggestions[active]); }
    else if (e.key === 'Escape') { e.preventDefault(); setOpen(false); }
  };

  return (
    <div className={['df-expr', validationState === 'invalid' && 'df-expr--invalid', className].filter(Boolean).join(' ')} {...rest}>
      <textarea
        ref={ref}
        className="df-expr__area"
        value={text}
        rows={rows}
        placeholder={placeholder}
        spellCheck={false}
        onChange={(e) => { setText(e.target.value); }}
        onKeyUp={(e) => {
          if (['ArrowDown', 'ArrowUp', 'Enter', 'Tab', 'Escape'].includes(e.key)) return;
          if (e.ctrlKey || e.altKey || e.metaKey) return;
          refresh();
        }}
        onKeyDown={onKeyDown}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
      />

      {open && suggestions.length > 0 && (
        <div className="df-expr__suggest" role="listbox">
          {suggestions.map((s, i) => (
            <button
              type="button"
              key={s.kind + s.label}
              className={['df-expr__opt', i === active && 'df-expr__opt--active'].filter(Boolean).join(' ')}
              onMouseDown={(e) => e.preventDefault()}
              onMouseEnter={() => setActive(i)}
              onClick={() => choose(s)}
            >
              <span className="df-expr__opt-label">{s.label}</span>
              <span className="df-expr__opt-kind">{s.kind}</span>
            </button>
          ))}
        </div>
      )}

      {effectiveWarnings.length > 0 && (
        <div className="df-expr__warnings">
          {effectiveWarnings.map((w, i) => (
            <div className="df-expr__warning" key={i}>
              <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" style={{ marginRight: 6 }} />
              {w.message}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
