import React from 'react';

/**
 * DfVariableMapping — maps a set of left-hand variables (e.g. source columns)
 * onto right-hand targets (Alkyra `alk-variable-mapping`). Each row is
 * `leftName → control`, where the control is a searchable select (default) or
 * a free-text field when `textMode` is on. Controlled via `value` + `onChange`,
 * or uncontrolled via `defaultValue`.
 */
export function DfVariableMapping({
  title = 'Variable mapping',
  leftVariables = [],
  rightVariables = [],
  value,
  defaultValue = {},
  textMode = false,
  allowedFor,
  emptyText = 'No variables to map.',
  onChange,
  className = '',
  ...rest
}) {
  const controlled = value != null;
  const [internal, setInternal] = React.useState(defaultValue);
  const mapping = controlled ? value : internal;

  const set = (leftName, rightName) => {
    const next = { ...mapping, [leftName]: rightName };
    if (!rightName) delete next[leftName];
    if (!controlled) setInternal(next);
    onChange?.(leftName, rightName, next);
  };

  const optionsFor = (leftName) =>
    (allowedFor ? allowedFor(leftName, rightVariables) : rightVariables) || [];

  return (
    <div className={['df-mapping', className].filter(Boolean).join(' ')} {...rest}>
      <div className="df-mapping__panel">
        <div className="df-mapping__head">
          <span className="df-mapping__title">{title}</span>
          <span className={`df-mapping__subtitle${textMode ? ' df-mapping__subtitle--accent' : ''}`}>
            {textMode ? 'Free-text mode' : 'Select mode'}
          </span>
        </div>

        {leftVariables.length === 0 ? (
          <div className="df-mapping__empty">{emptyText}</div>
        ) : (
          <div className="df-mapping__rows">
            {leftVariables.map((lv) => {
              const name = typeof lv === 'string' ? lv : lv.name;
              return (
                <div className="df-mapping__row" key={name}>
                  <span className="df-mapping__left" title={name}>{name}</span>
                  <i className="fa-solid fa-arrow-right-long df-mapping__arrow" aria-hidden="true" />
                  <div className="df-mapping__control">
                    {textMode ? (
                      <div className="tia-input tia-input--sm">
                        <input
                          className="tia-input__field"
                          value={mapping[name] || ''}
                          placeholder="Target expression…"
                          onChange={(e) => set(name, e.target.value)}
                        />
                      </div>
                    ) : (
                      <div className="tia-select">
                        <select
                          value={mapping[name] || ''}
                          onChange={(e) => set(name, e.target.value)}
                          aria-label={`Target for ${name}`}
                        >
                          <option value="">Select target…</option>
                          {optionsFor(name).map((rv) => {
                            const rn = typeof rv === 'string' ? rv : rv.name;
                            return <option key={rn} value={rn}>{rn}</option>;
                          })}
                        </select>
                        <span className="tia-select__chevron" aria-hidden="true"><i className="fa-solid fa-chevron-down" /></span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
