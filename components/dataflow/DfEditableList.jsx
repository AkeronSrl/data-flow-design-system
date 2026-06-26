import React from 'react';

/**
 * DfEditableList — inline-editable list (Alkyra `alk-list`).
 *
 * A column of rows, each an editable text field plus a row-action cluster, with
 * an "add" button pinned to the top-right. Works controlled (pass `items` +
 * handlers) or uncontrolled (seed with `defaultItems`).
 */
export function DfEditableList({
  items,
  defaultItems = [],
  addLabel = 'Add item',
  rowActions = [],
  emptyText = 'No items yet.',
  onAdd,
  onUpdate,
  onDelete,
  className = '',
  ...rest
}) {
  const controlled = items != null;
  const [internal, setInternal] = React.useState(defaultItems);
  const rows = controlled ? items : internal;

  const update = (id, description) => {
    if (!controlled) setInternal((s) => s.map((it) => (it.id === id ? { ...it, description } : it)));
    onUpdate?.(id, description);
  };
  const add = () => {
    if (!controlled) setInternal((s) => [...s, { id: `row-${Date.now()}`, description: '' }]);
    onAdd?.();
  };
  const remove = (id) => {
    if (!controlled) setInternal((s) => s.filter((it) => it.id !== id));
    onDelete?.(id);
  };

  const actions = rowActions.length
    ? rowActions
    : [{ icon: 'fa-solid fa-trash-can', label: 'Delete', danger: true, onClick: (it) => remove(it.id) }];

  return (
    <div className={['df-list', className].filter(Boolean).join(' ')} {...rest}>
      <div className="df-list__head">
        <button type="button" className="tia-btn tia-btn--secondary tia-btn--sm" onClick={add}>
          <i className="fa-solid fa-plus" aria-hidden="true" /> {addLabel}
        </button>
      </div>
      {rows.length === 0 ? (
        <div className="df-list__empty">{emptyText}</div>
      ) : (
        <div className="df-list__rows">
          {rows.map((it) => (
            <div className="df-list__row" key={it.id}>
              <input
                className="df-list__field"
                value={it.description}
                placeholder="Untitled"
                onChange={(e) => update(it.id, e.target.value)}
              />
              <div className="df-list__row-actions">
                {actions.map((a, i) => (
                  <button
                    key={i}
                    type="button"
                    className="tia-iconbtn tia-iconbtn--sm tia-iconbtn--ghost"
                    aria-label={a.label}
                    title={a.label}
                    style={a.danger ? { color: 'var(--color-danger-600)' } : undefined}
                    onClick={() => a.onClick?.(it)}
                  >
                    {typeof a.icon === 'string' ? <i className={a.icon} /> : a.icon}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
