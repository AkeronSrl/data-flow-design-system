import React from 'react';

/**
 * DfOptionSelect — grid of selectable option cards (Alkyra
 * `tiara-suite-option-button-selection`). Each card carries an icon, title and
 * subtitle; used for picking a dataset type, connector type, join type or
 * export destination. Single-select by default, or `multiple` for a set.
 * Controlled via `value` + `onChange`, or uncontrolled via `defaultValue`.
 */
export function DfOptionSelect({
  options = [],
  value,
  defaultValue,
  multiple = false,
  onChange,
  className = '',
  ...rest
}) {
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(
    defaultValue !== undefined ? defaultValue : (multiple ? [] : null)
  );
  const current = controlled ? value : internal;

  const isSelected = (v) => (multiple ? Array.isArray(current) && current.includes(v) : current === v);

  const pick = (v) => {
    let next;
    if (multiple) {
      const set = Array.isArray(current) ? current : [];
      next = set.includes(v) ? set.filter((x) => x !== v) : [...set, v];
    } else {
      next = current === v ? null : v;
    }
    if (!controlled) setInternal(next);
    onChange?.(next);
  };

  return (
    <div className={['df-options', className].filter(Boolean).join(' ')} role={multiple ? 'group' : 'radiogroup'} {...rest}>
      {options.map((opt) => {
        const sel = isSelected(opt.value);
        return (
          <button
            type="button"
            key={opt.value}
            className={['df-option', sel && 'df-option--selected'].filter(Boolean).join(' ')}
            role={multiple ? 'checkbox' : 'radio'}
            aria-checked={sel}
            onClick={() => pick(opt.value)}
          >
            {opt.icon && (
              <span className="df-option__ico" aria-hidden="true">
                {typeof opt.icon === 'string' ? <i className={`fa-solid fa-${opt.icon}`} /> : opt.icon}
              </span>
            )}
            <span className="df-option__text">
              <span className="df-option__title">{opt.title}</span>
              {opt.subtitle && <span className="df-option__subtitle">{opt.subtitle}</span>}
            </span>
            <i className="fa-solid fa-circle-check df-option__check" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
