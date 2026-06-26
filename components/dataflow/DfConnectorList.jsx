import React from 'react';

/**
 * DfConnectorList — vertical list of selectable connector cards (Alkyra
 * `pipeline-queue-selector` / connection list). Each row shows a logo or icon,
 * a name and a meta line, with a coloured left accent rail that turns blue when
 * selected. Controlled via `value` + `onSelect`, or uncontrolled via
 * `defaultValue`.
 */
export function DfConnectorList({
  connectors = [],
  value,
  defaultValue = null,
  onSelect,
  className = '',
  ...rest
}) {
  const controlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const current = controlled ? value : internal;

  const pick = (c) => {
    if (!controlled) setInternal(c.id);
    onSelect?.(c);
  };

  return (
    <div className={['df-conns', className].filter(Boolean).join(' ')} role="listbox" {...rest}>
      {connectors.map((c) => {
        const sel = current === c.id;
        return (
          <button
            type="button"
            key={c.id}
            className={['df-conn', sel && 'df-conn--selected'].filter(Boolean).join(' ')}
            role="option"
            aria-selected={sel}
            onClick={() => pick(c)}
          >
            <span className="df-conn__ico" aria-hidden="true">
              {c.logo ? <img src={c.logo} alt="" /> : typeof c.icon === 'string' ? <i className={`fa-solid fa-${c.icon}`} /> : (c.icon || <i className="fa-solid fa-plug" />)}
            </span>
            <span className="df-conn__text">
              <span className="df-conn__name">{c.name}</span>
              {c.meta && <span className="df-conn__meta">{c.meta}</span>}
            </span>
            <i className="fa-solid fa-circle-check df-conn__check" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
